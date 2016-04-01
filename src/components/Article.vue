<template>
	<router-view></router-view>
</template>
<script>
import ContentHeader from './layout/content-header.vue'
export default {
  components: {
    ContentHeader
  },
  data () {
    return {
      bread: {
        title: '文章管理',
        subTitle: '文章系统',
        bread: []
      }
    }
  },
  route: {
    data (transition) {
      this.bread.bread = [ {name: '文章系统', icon: 'fa-book', path: '/article/manage', active: false} ]
      var index = transition.to.path.lastIndexOf('/')
      var length = transition.to.path.length
      var path = transition.to.path.substring(index + 1, length)
      switch (path) {
        case 'manage':
          this.bread.title = '文章管理'
          this.bread.bread.push({name: '文章管理', active: true})
          break
        case 'add':
          this.bread.title = '新增文章'
          this.bread.bread.push({name: '新增文章', active: true})
          break
        case 'category':
          this.bread.title = '分类管理'
          this.bread.bread.push({name: '分类管理', active: true})
          break
        case 'trash':
          this.bread.title = '文章回收站'
          this.bread.bread.push({name: '文章回收站', active: true})
          break
      }
      transition.next()
    }
  }
}
</script>