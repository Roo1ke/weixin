
<template>
    <div id="productlist">
        <!-- 头部 -->
        <wv-header title="变频空调" :fixed="true" background-color="#FFF" style="color:#666;font-size:18px">
            <div class="btn-back" slot="left">
                <i class="iconfont icon-back" @click="$router.go(-1)"></i>
            </div>
        </wv-header>
        <wv-panel>
            <div id="product" class="mescroll">
                <div id="pList">
                    <div v-for="(item,index) in list" :key="index" @click="checkdetails(item)">
                        <wv-media-box :thumb="item.thumb" :title="item.title" :description="item.description"></wv-media-box>
                        <p class="bottom_price">
                            <small style="font-size:10px">￥</small>
                            <span style="font-size:18px;margin-left:-2px;">2699</span>
                            <i class="fa fa-angle-right"></i>
                        </p>
                    </div>
                </div>
            </div>
        </wv-panel>
        <img class="top_float_button" src="/static/mescroll-totop.png" />
    </div>
</template>
<style>
#productlist .weui-media-box_appmsg .weui-media-box__hd {
  margin-right: 0.8em;
  width: 35%;
  height: 100px;
  line-height: 60px;
  text-align: center;
}

#productlist .weui-media-box_appmsg .weui-media-box__bd {
  height: 100px;
  margin-top: 0px;
}

#productlist .weui-media-box_appmsg .weui-media-box__thumb {
  width: 100%;
  vertical-align: top;
  height: 100%;
}

#productlist .weui-media-box__title {
  font-weight: 400;
  font-size: 17px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: normal;
  word-wrap: break-word;
  word-break: break-all;
}

#productlist .bottom_price {
  position: relative;
  margin-left: 39%;
  color: #ff4500;
  margin-top: -37px;
}
#productlist .bottom_price i {
  position: relative;
  color: #999999;
  margin-right: 30px;
  float: right;
  margin-top: 8px;
}
#product {
  position: fixed;
  display: block;
  top: 50px;
  bottom: 0;
  height: auto;
  background: #fff;
}

#productlist .top_float_button {
  position: fixed;
  z-index: 9990;
  width: 36px;
  height: 36px;
  bottom: 30px;
  right: 20px;
  display: none;
}
</style>
<script>
export default {
  name: 'productlist',
  data() {
    return {
      totalcount: 24,
      list: [],
      mescroll: null
    }
  },
  methods: {
    checkdetails(obj) {
      // this.$router.push('/product/productdetails')
      this.$router.push({
        name: 'productdetails',
        params: {
          id: 1,
          sc: $('.mescroll').scrollTop()
        }
      })
    },
    //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback: function(page) {
      //联网加载数据
      var self = this
      self.getList(
        page.num,
        page.size,
        function(curPageData) {
          //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置

          //如果是第一页需手动制空列表 (代替clearId和clearEmptyId的配置)
          if (page.num == 1) self.list = []

          //更新列表数据
          self.list = self.list.concat(curPageData)

          self.mescroll.endBySize(curPageData.length, self.totalcount) //必传参数(当前页的数据个数, 总数据量)
        },
        function() {
          //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          self.mescroll.endErr()
        }
      )
    },
    getList: function(pageNum, pageSize, successCallback, errorCallback) {
      setTimeout(function() {
        var data = [
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿'
          },
          {
            thumb:
              'http://127.0.0.1:8010/Files/Pictures/cdeb7cf4-1e54-4d8d-b435-5429a0eecbd4.jpg',
            title: '1.5匹变斌空调挂机',
            description: '自动水洗|强力除湿'
          }
        ] // 模拟数据
        var listData = [] //模拟分页数据
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (i == data.length) break
          listData.push(data[i])
        }
        successCallback && successCallback(listData) //成功回调
      }, 500)
    }
  },
  mounted: function() {
    //创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
    //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
    var self = this
    self.mescroll = new MeScroll('product', {
      //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
      up: {
        callback: self.upCallback, //上拉回调
        //以下参数可删除,不配置
        isBounce: false, //此处禁止ios回弹
        page: { size: 15 }, //可配置每页8条数据,默认10
        empty: {
          //配置列表无任何数据的提示
          warpId: 'pList',
          icon: './static/mescroll-empty.png',
          tip: '亲,暂无相关数据哦~'
          //btntext : "去逛逛 >" ,
          //btnClick : function() {
          //  alert("点击了去逛逛按钮");
          //}
        },
        htmlNodata: '<p class="upwarp-nodata">-- 我是有底线的 --</p>'
      }
    })
    //滚动显示图标
    $('#productlist .mescroll').scroll(function() {
      if ($('#productlist .mescroll').scrollTop() >= 1000) {
        $('#productlist  .top_float_button').fadeIn()
      } else {
        $('#productlist  .top_float_button').fadeOut()
      }
    })
    //返回顶部
    $('#productlist  .top_float_button').click(function() {
      $('#productlist .mescroll').animate({ scrollTop: 0 }, 300)
      return false
    })
  }
}
// $().ready(function() {
//   //滚动显示图标
//   $('#productlist .mescroll').scroll(function() {
//     if ($('#productlist .mescroll').scrollTop() >= 1000) {
//       $('#productlist  .top_float_button').fadeIn()
//     } else {
//       $('#productlist  .top_float_button').fadeOut()
//     }
//   })
//   //返回顶部
//   $('#productlist  .top_float_button').click(function() {
//     $('#productlist .mescroll').animate({ scrollTop: 0 }, 300)
//     return false
//   })
// })
</script>
