<template>
  <div id="app">
    <!-- //<router-view/> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body {
   height:100%;
  background-color: #e8e8e8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%
}

.wv-header .wv-header-title {
  font-size: 15px !important;
}
.wv-header .left {
  font-size: 23px !important;
}
.weui-dialog__ft {
    font-size: 15px;
}
.weui-dialog__btn_primary {
    color: #fff;
    background: #ff3030;
}
.weui-toast {
  top:40%;
}
</style>
