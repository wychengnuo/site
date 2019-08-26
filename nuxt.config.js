module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/extraJs.client.js',
        '~/plugins/element.js',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             // important: use vue-style-loader instead of style-loader
    //             use: process.env === 'production'
    //                 ? ExtractTextPlugin.extract({
    //                     use: 'css-loader',
    //                     fallback: 'vue-style-loader'
    //                 })
    //                 : ['vue-style-loader', 'css-loader']
    //         }
    //     ]
    // },
    server: {
        port: 3001, // default: 3000
        // host: '172.16.22.20',
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        postcss: {
            plugins: {
                'postcss-px2rem': {
                    remUnit: 100
                },
                'pixrem': {
                    rootValue: 236,
                    replace: false,
                    atrules: false,
                    html: true,
                    browsers: 'ie <= 8',
                    unitPrecision: 2,
                },
                'postcss-calc': {
                    warnWhenCannotResolve: true
                },
                'postcss-nesting': {},
                'postcss-nested': {}
            },
            preset: {
                // 更改postcss-preset-env 设置
                autoprefixer: {
                    grid: true
                }
            }
        },

        loaders: {
            // vue: {
            //     transformAssetUrls: {
            //         video: 'src',
            //         source: 'src',
            //         object: 'src',
            //         embed: 'src'
            //     }
            // },
            cssModules: {
                modules: true
            },
            css: {},
            vueStyle: {}
        },
        vendor: ['element-ui']
        // extend(config, ctx) {}
    },
};
