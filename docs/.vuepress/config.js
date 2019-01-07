const { sidebar } = require('./config/sidebar')
const { nav } = require('./config/nav')
module.exports = {
    title:'50号公路的技术博客',
    description:'每一行代码都是你成长的记录',
    head:[
        ['link',{rel:'icon',href:'/img/avatar.png'}]
    ],
    themeConfig:{
        nav,
        sidebar,
        sidebarDepth:1,
        lastUpdated:'最后更新'
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@static': '/public'
          }
        }
    }
}