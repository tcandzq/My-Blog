const nav = require('../../config/navConfig')
const sidebar = require('../../config/sidebarConfig')


module.exports = {
    title: '热心市民的博客',
    description: '谁能证明你在人间来过',
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
    repo: 'tcandzq/My-Blog',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: nav,
    sidebar:sidebar,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
    }
  }