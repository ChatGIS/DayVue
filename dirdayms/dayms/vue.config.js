const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    configureWebpack: config => {
        config.plugins.push(AutoImport({
            resolvers: [ElementPlusResolver()],
        }))
        config.plugins.push(Components({
            resolvers: [ElementPlusResolver()],
        }))
    },
    devServer: {
        proxy: {
            '/api': {
                // target: 'https://lianghj.top:8888/api/private/v1',
                target: 'http://daymsapi.com:3007/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData:   // 8版本用prependData:
                    `
                      @import "@/styles/variables.scss";  // scss文件地址
                      @import "@/styles/mixin.scss";     // scss文件地址
                    `
            }
        }
    }
}