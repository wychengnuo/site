<template>
    <div :class="$style.productContainer">
        <div :class="$style.product">
            <div :class="$style.productMess">
                <p :class="$style.title">
                    {{ title }}
                </p>
                <p :class="$style.desc">
                    {{ desc }}
                </p>
            </div>
            <div :class="$style.productCon">
                <div v-for="item in productList" :key="item.id" :class="$style.productItem">
                    <img :src="item.icon">
                    <p :class="$style.productTitle">
                        {{ item.title }}
                    </p>

                    <p v-for="(v, index) in item.desc" :key="index" :class="$style.productDesc">
                        {{ v }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ICON from '@/static/service/service.jpg';
export default {
    data() {
        return {
            title: '我们能做什么',
            desc: '我们能做什么XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            productList: [{
                id: 1,
                icon: ICON,
                title: '网站建设',
                desc: ['官网', '电商平台', '论坛', '活动平台'],
            },{
                id: 2,
                icon: ICON,
                title: 'H5页面开发',
                desc: ['H5游戏', 'H5宣传页', '定制应用'],
            },{
                id: 3,
                icon: ICON,
                title: '移动端定制开发',
                desc: ['app设计与开发', '手机端网站定制', '微信公众号开发', '定制小程序'],
            },{
                id: 4,
                icon: ICON,
                title: '数据迁移服务',
                desc: ['p2v', 'v2v', '数据备份', '物理主机'],
            },{
                id: 5,
                icon: ICON,
                title: '运维服务',
                desc: [' IT基础资源监控', '业务可用性监测', '压力测试平台'],
            },]
        };
    }
};
</script>

<style module>
    @import './productItem.css';
</style>