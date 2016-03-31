<template>
  <div id='app' class="wrapper">
    <!-- 头部 -->
    <app-header></app-header>
    <!-- 左边功能菜单栏 -->
    <app-aside></app-aside>
    <!-- 右侧内容容器 -->
    <div class="content-wrapper" style="min-height: 901px;">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from './components/layout/header.vue'
import appFooter from './components/layout/footer.vue'
import appAside from './components/layout/aside.vue'
export default {
  components: {
    appHeader,
    appFooter,
    appAside
  }
}
</script>