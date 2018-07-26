<template>
    <div id="carts">
        <wv-panel title="图文组合列表">
            <a href="#" class="del" @click="del">删除</a>
            <div id="mescrolls" class="mescroll">
                <div id="dataLists" class="carts">
                    <div v-for="(item,index) in list" :key="index">
                        <wv-checklist :options="item.options" v-model="selectList"> </wv-checklist>
                        <wv-media-box :thumb="item.thumb" :title="item.title" :description="item.description"></wv-media-box>
                        <p class="bottom_price">
                            <small style="font-size:10px">￥</small>
                            <span style="font-size:18px;margin-left:-2px;">2699</span>
                            <el-input-number class="inputnumber" v-model="num1" size="mini" :precision="0" :min="1" :max="10"></el-input-number>
                        </p>
                    </div>
                </div>
            </div>
        </wv-panel>
        <div id="james" v-bind:style="{marginTop:_bottom}">
            <wv-tabbar style="height:50px;">
                <p style="width:65%;background:#e8e8e8e8">
                    <span @click="selectAll">
                        <wv-icon type="circle" class="sum" v-show="!isSelect_all"></wv-icon>
                        <wv-icon type="success" class="sum" v-show="isSelect_all" style="color:#FF3030"></wv-icon>
                    </span>
                    <span class="select_all">全选</span>
                    <span class="sum_span">合计:￥{{totalprice}}</span>
                </p>
                <div class="sun_text">
                    去结算({{selectList.length}})
                </div>
            </wv-tabbar>
        </div>
        <img class="top_float_button" src="/static/mescroll-totop.png" />
    </div>
</template>
 <style>
.del {
  position: fixed;
  top: 10px;
  right: 25px;
  font-size: 15px;
  color: #999;
}
#carts .weui-media-box_appmsg .weui-media-box__hd {
  width: 25%;
  height: 100px;
  margin-left: 10%;
}

#carts .weui-media-box_appmsg .weui-media-box__bd {
  height: 100px;
  margin-top: 0px;
}

#carts .weui-cells {
  margin-top: 50px;
  position: absolute;
  z-index: 2;
  background-color: transparent;
  width: 12%;
}

#carts .weui-check__label:active {
  background-color: transparent;
}

#carts .weui-cells:before,
.weui-cells:after {
  border: none;
}

#carts .weui-cells_checkbox .weui-cell__hd {
  margin-left: 10px;
}

#carts .weui-media-box_appmsg .weui-media-box__thumb {
  width: 100%;
  vertical-align: top;
  height: 100%;
}

#carts .weui-media-box__title {
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

#carts .bottom_price {
  position: relative;
  margin-left: 39%;
  color: #ff4500;
  margin-top: -37px;
}
#carts .inputnumber {
  position: absolute;
  color: #999999;
  right: 12px;
  float: right;
  bottom: 5px;
}
#carts .el-input-number--mini {
  width: 93px;
}
#carts .sum {
  margin-top: 13px;
  margin-left: 10px;
  z-index: 10;
}
#carts .select_all {
  font-size: 13px;
  top: 15px;
  position: absolute;
  left: 45px;
}
#carts .sum_span {
  position: absolute;
  top: 11px;
  left: 83px;
  font-size: 18px;
  font-weight: 400;
}
#carts .sun_text {
  background-color: #ff3030;
  width: 35%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  padding-top: 10px;
  text-align: center;
}
#mescrolls {
  display: block;
  top: 44px;
  bottom: 95px;
  height: auto;
  position: fixed;
  background: #fff;
}
#carts .weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before {
  content: '\EA06';
  color: #ff3030;
}
#carts .top_float_button {
  position: fixed;
  z-index: 9990;
  width: 36px;
  height: 36px;
  bottom: 130px;
  right: 20px;
  display: none;
}
</style>
<script>
export default {
  name: 'test',
  data() {
    return {
      list: [],
      totalSize: 24,
      selectList: [],
      options: ['全选'],
      totalprice: '0.00',
      isSelect_all: false, //是否全选,
      _bottom: 0,
      num1: 1
    }
  },
  methods: {
    selectAll() {
      this.isSelect_all = !this.isSelect_all
      if (this.isSelect_all) {
        this.selectList = []
        for (var i = 0; i < this.list.length; i++) {
          this.selectList.push(this.list[i].options[0].value)
        }
      } else {
        this.selectList = []
      }
    },
    del() {
      if (this.selectList.length == 0) {
        this.$toast.text({
          duration: 1500,
          message: '您还没有选择商品哦'
        })
        return
      }
      this.$dialog.confirm({
        title:'',
        message: '确定要删除这' + this.selectList.length + '种商品吗?',
        showCancelButton: true
      })
        .then(() => {
          
        })
        .catch(() => {

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

          //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
          //console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length + ", self.list.length==" + self.list.length);

          //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
          self.mescroll.endBySize(curPageData.length, self.totalSize) //必传参数(当前页的数据个数, 总数据量)
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
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '1' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '2' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '3' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '4' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '5' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '6' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '7' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '8' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '9' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '10' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '11' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '12' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '13' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '14' }]
          },
          {
            thumb: './static/kt.png',
            title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3',
            description: '自动水洗|强力除湿',
            options: [{ label: ' ', value: '15' }]
          }
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机AUX/奥克斯 KFR-35GW/NFI19+3', description: '自动水洗|强力除湿' },
          //{ thumb: './static/kt.png', title: '1.5匹变斌空调挂机', description: '自动水洗|强力除湿' }
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
    var self = this
    self.mescroll = new MeScroll('mescrolls', {
      up: {
        callback: self.upCallback,
        isBounce: false,
        page: { size: 18 },
        empty: {
          warpId: 'dataLists',
          //icon: "../res/img/mescroll-empty.png",
          tip: '亲,暂无相关数据哦~'
        },
        htmlNodata: '<p class="upwarp-nodata">-- 我是有底线的 --</p>'
      }
    })
    //滚动显示图标
    $('#carts .mescroll').scroll(function() {
      if ($('#carts .mescroll').scrollTop() >= 1000) {
        $('#carts .top_float_button').fadeIn()
      } else {
        $('#carts .top_float_button').fadeOut()
      }
    })
    //返回顶部
    $('#carts .top_float_button').click(function() {
      $('#carts .mescroll').animate({ scrollTop: 0 }, 300)
      return false
    })
  },
  created: function() {
    //this.tab_height = $(window).height() - 50 + 'px'
    this._bottom = $(window).height() - 95 + 'px'
  }
}
</script>
