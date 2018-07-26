<template>
    <div id="details">
        <!-- 头部 -->
        <wv-header title="产品详情" :fixed="true" background-color="#FFF" style="color:#666;font-size:18px">
            <div class="btn-back" slot="left">
                <!-- <i class="iconfont icon-back" @click="$router.go(-1)"></i> -->
                <i class="iconfont icon-back" @click="goback()"></i>
            </div>
        </wv-header>
        <!-- 内容 -->
        <!-- 底部 -->
        <wv-tabbar :fixed="true" style="height:50px">
            <div class="sun_text">
                加入购物车
            </div>
        </wv-tabbar>
    </div>
</template>
<style>

#details .sun_text {
  background-color: #ff3030;
  width: 35%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  padding-top: 10px;
  text-align: center;
  margin-left: 65%;
}
</style>

<script>
export default {
  name: 'productdetails',
  methods:{
      goback(){
          window.history.back()
      }
  },
  mounted:function(){
  }
}
</script>
