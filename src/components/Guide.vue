<template>
<div id="guide">
<wv-group title="请选择报价类型">
  <el-checkbox-group v-model="checkboxGroup" size="small" style="text-align:center; margin-top:22px;margin-bottom:22px">
      <el-checkbox label="空调" border></el-checkbox>
      <el-checkbox label="新风" border></el-checkbox>
      <el-checkbox label="地暖" border></el-checkbox>
      <el-checkbox label="净水" border></el-checkbox>
    </el-checkbox-group>
</wv-group>
 <wv-group title="建筑面积">
        <wv-input label="面积(㎡)" placeholder="请输入建筑面积" type="number" v-model="valueNumber" required></wv-input>
    </wv-group>
    <br />
    <wv-group class="weui-btn-area">
        <wv-button type="primary" :is-loading="flag" style="font-size:15px" @click="doQuotation()"  :disabled="valueNumber.length==0">开始报价</wv-button>
    </wv-group>
</div>
</template>
<style scoped>
.weui-cell{
  padding:10px 15px;
  position:relative;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -webkit-align-items:center;
  -ms-flex-align:center;
  align-items:center
  }
</style>

<script>
  export default {
    name:'guide',
    data () {
      return {
        checkboxGroup: [],
        valueNumber: "",
        flag:false
      };
    },
    methods:{
      doQuotation(){
          this.$router.push('/home')
      }
    }
  }
</script>
