module.exports = [
  {name: '系统首页', path: '/dashboard', tree: false},
  {name: '会员系统', path: '/user', tree: true, child: [
      {name: '新增会员', path: '/user/add'},
      {name: '会员管理', path: '/user/manage'},
      {name: '黑名单', path: '/user/blacklist'}
  ]
  },
  {name: '文章系统', path: '/article', tree: true, child: [
      {name: '文章管理', path: '/article/manage'},
      {name: '新增文章', path: '/article/add'},
      {name: '分类管理', path: '/article/category'},
      {name: '回收站', path: '/article/trash'}
  ]
  }
]
