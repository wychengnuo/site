import isMobile from './../utils/isMobile';

const remHandle = () => {
    function flexible(win) {
        const doc = win.document;
        const docEl = doc.documentElement;
        let metaEl = doc.querySelector('meta[name="viewport"]');
        const flexibleEl = doc.querySelector('meta[name="flexible"]'); // 这样的写法没有尝试过
        let dpr = 0;
        let scale = 0;
        let tid;
        // eslint-disable-next-line
        const flexible = win.flexible || (win.flexible = {});

        if (flexibleEl) {
            const content = flexibleEl.getAttribute('content');
            if (content) {
                const initialDpr = content.match(/initial-dpr=([\d\\.]+)/);
                const maximumDpr = content.match(/maximum-dpr=([\d\\.]+)/);
                if (initialDpr) {
                    dpr = parseFloat(initialDpr[1]);
                    scale = parseFloat((1 / dpr).toFixed(2));
                    // 3.1415.toFixed(2),保留2位小数点
                }
                if (maximumDpr) {
                    dpr = parseFloat(maximumDpr[1]);
                    scale = parseFloat((1 / dpr).toFixed(2));
                }
            }
        }

        // 当没有设置meta标签之后，根据设备信息来设置屏幕缩放比
        if (!dpr && !scale) {
            const isIPhone = win.navigator.appVersion.match(/iphone/gi);
            const { devicePixelRatio } = win;
            if (isIPhone) {
                // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
                if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                    dpr = 3;
                } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                    dpr = 2;
                } else {
                    dpr = 1;
                }
            } else {
                // 其他设备下，仍旧使用1倍的方案，但是fs并不是固定的
                dpr = 1;
            }
            scale = 1 / dpr;
        }

        // 给文档设置自定义属性，保存dpr的值
        docEl.setAttribute('data-dpr', dpr);

        // 创建meta标签，设置初始比、最小比和最大比均为scale值，并将其插入到页面
        // 设置了缩放比，那么相当于这个屏幕渲染在一个被放大的画布之上。
        if (!metaEl) {
            metaEl = doc.createElement('meta');
            metaEl.setAttribute('name', 'viewport');
            metaEl.setAttribute(
                'content',
                `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`,
            );
            if (docEl.firstElementChild) {
                docEl.firstElementChild.appendChild(metaEl);
            } else {
                // 并没有什么作用
                const wrap = doc.createElement('div');
                wrap.appendChild(metaEl);
                doc.write(wrap.innerHTML);
            }
        }

        // 自定义页面元素的fontsize，方便rem的配置
        function refreshRem() {
            let { width } = docEl.getBoundingClientRect();
            // 屏幕信息，屏幕宽度，bound：绑定；rect：矩形
            if (width / dpr > 1180) {
                width = 1180 * dpr;
            }
            const rem = width / 10;
            docEl.style.fontSize = `${rem}px`;
            // eslint-disable-next-line
            flexible.rem = win.rem = rem;
        }

        /**
         * 对于设计稿为320px的，根元素fontsize = 32px;
         * 对于设计稿为1080px的，根元素fontsize = 108px;
         * 设屏幕的宽度为w(rem*10),设计稿尺寸为w,那么有比例关系w:rem*10 = x:1 ;
         * ==> x= w/(rem*10);（单位）
         * 那么任意设计稿尺寸 L 转化为相应的尺寸就为：L/x = (L*rem*10)/w;
         * 由于rem设置给根元素了，那么所有的尺寸均可以用rem单位来操作;
         * xrem = (L*rem*10)/w*fontsize = (L*10)/w;
         * 那么在设计稿中量取 L长度的，在编辑器中就为(L*10/w) rem;
         * 如此便完成了rem的自动适配
         */

        function resize() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
        function pageshow(e) {
            if (e.persisted) {
                resize();
            }
        }
        win.addEventListener('resize', resize, false);
        win.addEventListener('pageshow', pageshow, false);

        // 设置页面的body的字体 大小 ，目前发现有何用
        if (doc.readyState === 'complete') {
            doc.body.style.fontSize = `${14 * dpr}px`;
        } else {
            doc.addEventListener(
                'DOMContentLoaded',
                () => {
                    doc.body.style.fontSize = `${14 * dpr}px`;
                },
                false,
            );
        }

        // 页面初始化
        refreshRem();

        // 提供一些方法
        // eslint-disable-next-line
        flexible.dpr = win.dpr = dpr;
        flexible.refreshRem = refreshRem;
        flexible.rem2px = d => {
            let val = parseFloat(d) * this.rem;
            if (typeof d === 'string' && d.match(/rem$/)) {
                val += 'px';
            }
            return val;
        };
        flexible.px2rem = d => {
            let val = parseFloat(d) / this.rem;
            if (typeof d === 'string' && d.match(/px$/)) {
                val += 'rem';
            }
            return val;
        };
    }
    flexible(window);
};

const pcRem = () => {
    function flexible(win) {
        const doc = win.document;
        const docEl = doc.documentElement;
        docEl.style.fontSize = '100px';
        if (doc.readyState === 'complete') {
            doc.body.style.fontSize = '14px';
        } else {
            doc.addEventListener(
                'DOMContentLoaded',
                () => {
                    doc.body.style.fontSize = '14px';
                },
                false,
            );
        }
    }
    flexible(window);
};

const renderHtml = () => {
    if (process.client) {
        const isMobileDevice = isMobile();
        isMobileDevice ? remHandle() : pcRem();
    }
};

export default () => {
    renderHtml();
};