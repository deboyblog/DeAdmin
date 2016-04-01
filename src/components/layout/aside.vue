<template>
	<aside class="main-sidebar">
		<!-- sidebar: style can be found in sidebar.less -->
		<section class="sidebar" style="height: auto;">
			<!-- search form -->
			<form class="sidebar-form">
				<div class="input-group">
					<input type="text" name="q" class="form-control" v-model='menuFilter' placeholder="根据系统名称搜索">
					<span class="input-group-btn">
						<button type="submit" name="search" id="search-btn" class="btn btn-flat"> <i class="fa fa-search"></i>
						</button>
					</span>
				</div>
			</form>
			<!-- /.search form -->
			<!-- sidebar menu: : style can be found in sidebar.less -->
			<ul class="sidebar-menu">
				<li class="header">DeAdmin-系统后台操作面板</li>
				<li v-for="item in list | filterBy menuFilter in 'name'" :class='{treeview:item.child,active:$route.path.indexOf(item.path)>=0}'>
					<a v-link="{path:item.path}" v-if='!item.child'>
						<i class="fa fa-th"></i>
						<span>{{item.name}}</span>
					</a>
					<a v-if='item.tree'>
						<i class="fa fa-dashboard"></i>
						<span>{{item.name}}</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu" v-if='item.tree' v-show='$route.path.indexOf(item.path)>=0' style="display: none;">
						<li v-for='subItem in item.child'>
							<a href="#" v-link="{path:subItem.path}">
								<i class="fa fa-circle-o"></i>
								{{subItem.name}}
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</section>
		<!-- /.sidebar -->
	</aside>
</template>

<script>
export default {
  data () {
    return {
      menuFilter: '',
      list: require('../../../static/aside.config.js')
    }
  }
}
</script>