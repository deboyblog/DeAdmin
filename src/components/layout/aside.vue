<template>
	<aside class="main-sidebar">
		<!-- sidebar: style can be found in sidebar.less -->
		<section class="sidebar" style="height: auto;">
			<!-- search form -->
			<form action="#" method="get" class="sidebar-form">
				<div class="input-group">
					<input type="text" name="q" class="form-control" placeholder="Search...">
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
				<li class="treeview">
					<a href="#">
						<i class="fa fa-dashboard"></i>
						<span>Dashboard</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu" style="display: none;">
						<li class="active">
							<a href="index2.html">
								<i class="fa fa-circle-o"></i>
								Dashboard v2
							</a>
						</li>
					</ul>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-files-o"></i>
						<span>Layout Options</span>
						<span class="label label-primary pull-right">4</span>
					</a>
					<ul class="treeview-menu">
						<li>
							<a href="pages/layout/top-nav.html">
								<i class="fa fa-circle-o"></i>
								Top Navigation
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="pages/widgets.html">
						<i class="fa fa-th"></i>
						<span>Widgets</span>
						<small class="label pull-right bg-green">new</small>
					</a>
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
      list: [
			{name: 'menu', path: '/from'}
      ]
    }
  }
}
</script>
<style lang='less'></style>