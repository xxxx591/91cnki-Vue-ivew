<template>
<div>


  <div class="index-box">
    <div class="content">
      <div class="h1">
        <h1>知网论文查重 大学本科研究生硕博毕业论文查重入口</h1>
      </div>
      <div class="h2">
        <h2>知网论文查重入口，检测结果100%与学校、杂志社相同！<router-link to="" class="h2-a">[查看论文检测报告单样例]</router-link></h2>
      </div>
      <div class="h2">
        <h2>24小时自助，系统自动检测，论文安全不泄露。30分钟-2小时下载报告。<router-link to="" class="h2-a">[检测流程]</router-link></h2>
      </div>
      <div class="h2">
        <h2>学术诚信是一种态度，抵制抄袭，鼓励原创，检测务必认准学术不端知网查重入口，结果和学校单位一致，准确放心！</h2>
      </div>
    </div>
  </div>
  <div class="goodlist">
    <Row :gutter="16">
      
        <Col span="6" style="margin-top:20px;" :xs="24" :sm="8" :md="6">
            <Card>
                <p slot="title">本科大学生PMLC查重专用</p>
                <p class="content">大学生本科学位论文检测系统。</p>
                <p class="content">权威本科院校检测系统</p>
                <p class="content">专用于本科毕业学位论文重复率检测</p>
                <p class="content">查重结果保证和学校一致！</p>
                <p class="price content">198元/篇</p>
                <p  class="content"><Button long type="primary" @click="routerToUpload('pmlc')">立即检测</Button></p>
            </Card>
        </Col>
     
    </Row>
  </div>
  <div class="new-list">
    <Row :gutter="16">
      <Col span="6" style="margin:20px 0;" :xs="24" :sm="12" :md="12">
        <h1>行业新闻</h1>
        <ul>
          <li>知网查重时字数超过了怎么办？ <span>2018-08-08</span> </li>
          <li>知网查重时字数超过了怎么办？</li>
          <li>知网查重时字数超过了怎么办？</li>
        </ul>
      </Col>
      <Col span="6" style="margin:20px 0;" :xs="24" :sm="12" :md="12">
        <h1>行业新闻</h1>
      </Col>
    </Row>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    routerToUpload(e){
      this.$router.push({
        path:'upload',
        query:{
          type:e,
          activeNum:'2',
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.index-box {
  width: 100%;
  height: 480px;
  background: url(/static/banner-bg.jpg) center center no-repeat;
  position: relative;
  text-align: center;
  h1 {
    color: #fff;
    padding-top: 150px;
  }
  h2 {
    margin-top: 20px;
    color: #fff;
    .h2-a {
      color: #fff;
      &:hover {
        color: #2d8cf0;
      }
    }
  }
}
.goodlist {
  width: 1200px;
  margin: 20px auto;
  .content {
    line-height: 2;
  }
  .price {
    color: #ed4014;
    font-size: 30px;
    text-align: center;
  }
}
.new-list {
  width: 1200px;
  margin: 0 auto;
  h1 {
    font-size: 20px;
    line-height: 2;
    background: #f8f8f9;
    border-left: 5px solid #2d8cf0;
    padding-left: 20px;
  }
  ul{
    li{
      line-height: 2;
      cursor: pointer;
      padding-left: 25px;
      span{
        float:right;
        margin-right: 20px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .goodlist,
  .new-list {
    width: auto;
  }
}
</style>
