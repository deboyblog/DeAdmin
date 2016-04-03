// 此文件是配合content-header组件来使用的 根据路由不同匹配不同的值 配置的时候注意数据的个数 严格按照ES6的格式 还有根目录的.editconfig配置项来配置
module.exports = {
  '/dashboard': {
    title: '系统首页',
    subTitle: 'DA后台管理系统',
    list: []
  },
  '/user/add': {
    title: '新增会员',
    subTitle: '会员管理',
    list: [{name: '会员管理', icon: 'fa-user', path: '/user/manage'}, {name: '新增会员'}]
  },
  '/user/manage': {
    title: '会员管理',
    subTitle: '会员管理',
    list: [{name: '会员管理', icon: 'fa-user', path: '/user/manage'}, {name: '会员管理'}]
  },
  '/user/blacklist': {
    title: '黑名单管理',
    subTitle: '会员管理',
    list: [{name: '会员管理', icon: 'fa-user', path: '/user/manage'}, {name: '黑名单管理'}]
  },
  '/article/add': {
    title: '新增文章',
    subTitle: '文章管理',
    list: [{name: '文章管理', icon: 'fa-bookmark', path: '/article/manage'}, {name: '新增文章'}]
  },
  '/article/category': {
    title: '分类管理',
    subTitle: '文章管理',
    list: [{name: '文章管理', icon: 'fa-bookmark', path: '/article/manage'}, {name: '分类管理'}]
  },
  '/article/manage': {
    title: '文章管理',
    subTitle: '文章管理',
    list: [{name: '文章管理', icon: 'fa-bookmark', path: '/article/manage'}, {name: '文章管理'}]
  },
  '/article/trash': {
    title: '回收站',
    subTitle: '文章管理',
    list: [{name: '文章管理', icon: 'fa-bookmark', path: '/article/manage'}, {name: '回收站'}]
  }

}
