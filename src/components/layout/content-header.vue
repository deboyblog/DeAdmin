<template>
	<section class="content-header">
		<h1>
			{{title}}
			<small>{{subTitle}}</small>
		</h1>
		<ol class="breadcrumb">
      <li>
        <a v-link="{path:'./bashboard'}" > <i class="fa fa fa-dashboard"></i>
          系统首页
        </a>
      </li>
      <li v-for='item in bread' :class='{active: $index < item.length}'>
        <!-- 如果不是最后一个 默认是可以被链接的 -->
        <a v-link="{path:item.path}" v-if='$index < item.length'> <i class="fa" :class='item.icon'></i>
          {{item.name}}
        </a>
        <span v-else>{{item.name}}</span>
      </li>
		</ol>
	</section>
</template>
<script>
export default {
  name: 'ContentHeader',
  prop: {
    info: Object
  },
  data () {
    return {
      // 从文件中读取路由对应配置 一条路由对应一条配置
      list: require('../../../static/content.header.config.js')
    }
  },
  computed: {
    // 大标题
    title () {
      return this.list[this.$route.path].title
    },
    // 副标题
    subTitle () {
      return this.list[this.$route.path].subTitle
    },
    // 面包屑导航
    bread () {
      return this.list[this.$route.path].list
    }
  }
}
</script>