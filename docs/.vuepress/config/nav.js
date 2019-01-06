const nav = [
    { text:'主页',link:'/' },
    {
        text:'编程语言',
        items:[
            {
                text:'javascript',
                link:'/javascript/',
            },
            {
                text:'php',
                link:'/php/基本语法'
            },
        ]
    },{
        text:'工具',
        items:[
            {
                text:'markdown',
                link:'/markdown/基本语法'
            },
            {
                text:'tooldocs',
                link:'/tooldocs/工具文档'
            }
        ]
    },
    { text:'GitHub',link:'https://github.com/clispaul3' },
]
module.exports = {
    nav
}