const { sidebar } = require('./config/sidebar')
console.log(sidebar)
const { nav } = require('./config/nav')
module.exports = {
    title:'50号公路的技术博客',
    description:'个人技术博客',
    head:[
        ['link',{rel:'icon',href:'/img/avatar.png'}]
    ],
    themeConfig:{
        nav,
        sidebar,
        sidebarDepth:1,
        lastUpdated:'last updated'
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@static': '/public'
          }
        }
    }
}