<template>
    <div class="set_bgCol">
        <mt-tab-container v-model="selectedTabber">
            <mt-tab-container-item id="home">
                <wv-flex :gutter="10">
                    <wv-flex-item flex="3" style="background-color:#e8e8e8;padding:0px;">
                        <div v-bind:style="{height:tab_height}" style="width:100%">
                            <ul>
                                <li v-for="(item,index) in typeList" :key="index" :id="item.id" class="tabCss" @click="choose(item)" v-bind:class="index==0?'choosed':''">{{item.name}}</li>
                            </ul>
                        </div>
                    </wv-flex-item>
                    <wv-flex-item flex="7" style="padding:0px">
                        <wv-group :title="currSelected+'分类'"></wv-group>
                        <div id="mescroll" class="mescroll" v-bind:class="currList.length>0?'changW':'changP'">
                            <wv-grid>
                                <wv-grid-item v-for="(item,index) in currList" :key="index" @click="goProductList(item)">
                                    <img :src="thumbSmall" slot="icon">
                                    <span slot="label">{{item.name}}</span>
                                </wv-grid-item>
                            </wv-grid>
                        </div>
                    </wv-flex-item>
                </wv-flex>
            </mt-tab-container-item>
            <mt-tab-container-item id="shoppingCart">
                <!-- <cart></cart>  -->
                <test></test>
                <!-- <shoppingcart></shoppingcart> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="history">
                333333333333333
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar fixed v-model="selectedTabber">
            <mt-tab-item id="home">
                <i class="fa fa-home" slot="icon"></i>
                首页
            </mt-tab-item>
            <mt-tab-item id="shoppingCart" @click="changetype">
                <i class="fa fa-shopping-cart" slot="icon"></i>
                购物车
            </mt-tab-item>
            <mt-tab-item id="history">
                <i class="fa fa-history" slot="icon"></i>
                历史记录
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style scoped>
.set_bgCol {
  background-color: #fff;
}

body {
  overflow: hidden;
}

.tabCss {
  flex: 1;
  font-size: 16px;
  padding: 10px 0;
  text-align: center;
}

.choosed {
  background-color: #fff;
  color: #26a2ff;
}

.weui-media-box__hd img {
  height: 100%;
  width: 100%;
}

.weui-media-box_appmsg .weui-media-box__bd {
  margin-top: -25px;
}

#mescroll {
  display: block;
  top: 44px;
  bottom: 0;
  height: auto;
}

.changP {
  width: auto;
}

.changW {
  position: absolute;
  width: auto;
}
</style>
<script>
$().ready(function() {
  $('.mint-tab-item').click(function() {
    $('.inputnumber input').attr('type', 'tel')
  })
})
//import ShoppingCart from './ShoppingCart'
import Test from './Test'
export default {
  name: 'home',
  components: { Test },
  data() {
    return {
      currSelected: '地暖',
      tab_height: 0,
      typeList: [
        { id: 'dn', name: '地暖' },
        { id: 'kt', name: '空调' },
        { id: 'xf', name: '新风' },
        { id: 'js', name: '净水' },
        { id: 'pj', name: '配件' }
      ],
      selectedTabber: 'home',
      thumbSmall: '/static/kt.png',
      currList: [],
      totalCount: 21
    }
  },
  methods: {
    changetype() {
      var el = $('.inputnumber')
    },
    choose(item) {
      $('#' + item.id).addClass('choosed')
      $('#' + item.id)
        .siblings()
        .removeClass('choosed')
      this.currSelected = item.name
    },
    goProductList(obj) {
      this.$router.push('/product/productlist')
    },
    upCallback: function(page) {
      var self = this
      self.getList(
        page.num,
        page.size,
        function(curPageData) {
          if (page.num == 1) self.currList = []
          self.currList = self.currList.concat(curPageData)
          self.mescroll.endBySize(curPageData.length, self.totalCount)
        },
        function() {
          self.mescroll.endErr()
        }
      )
    },
    getList: function(pageNum, pageSize, successCallback, errorCallback) {
      //this.$http.post("/UserGuide/GetUserGuides", { pIndex: pageNum }).then((response) => {
      //    var listData = response.body.list;
      //    this.totalCount = response.body.rCount;
      //    successCallback && successCallback(listData);
      //}).catch(function (response) {
      //    console.log(response)
      //})
      setTimeout(function() {
        var data = [
          { name: '类型1', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型2', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型3', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型4', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型5', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型6', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型7', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型8', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型9', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型10', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型11', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型12', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型13', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型14', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型15', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型16', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型17', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型18', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型19', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型20', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型21', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型22', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型23', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型24', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型25', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型26', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
          { name: '类型27', des: 'xxxxxxxxxxxxxxxxxxxxxxxx' }
        ] // 模拟数据
        var listData = [] //模拟分页数据
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (i == data.length) break
          listData.push(data[i])
        }
        successCallback && successCallback(listData) //成功回调
        //				})
        //				.catch(function(error) {
        //					errorCallback&&errorCallback()//失败回调
        //				});
      }, 500)
    }
  },
  mounted: function() {
    this.tab_height = $(window).height() - 50 + 'px'
    var self = this
    self.mescroll = new MeScroll('mescroll', {
      up: {
        callback: self.upCallback,
        isBounce: false,
        page: { size: 18 },
        toTop: {
          //src: "../Content/images/mescroll-totop.png",
          //html: "<a href='#' id='top_float_button' class='fixed_float_button'><i></i></a>",
          offset: 300
        },
        empty: {
          warpId: 'dataList',
          //icon: "../res/img/mescroll-empty.png",
          tip: '亲,暂无相关数据哦~'
        },
        htmlNodata: '<p class="upwarp-nodata">-- 我是有底线的 --</p>'
      }
    })
  },
  created: function() {
   
  }
}
</script>
