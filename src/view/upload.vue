<template>
  <div class="upload">
    <Row :gutter="16">
      <Col span="18" style="margin-top:20px;" :xs="24" :sm="18" :md="18">
      <h3 class="title">第一步：上传文章</h3>
      <div class="left-content">
        <p>
          <span>论文标题</span>
          <Input placeholder="填写真实标题，不超过50字" class="sub-ipt" clearable />
        </p>
        <p>
          <span>论文作者</span>
          <Input placeholder="填写真实作者，不超过15字" class="sub-ipt" clearable />
          <span>专业选择</span>
          <Select v-model="Default" style="width:165px">
            <Option v-for="item in schoolList" :value="item.value" :key="item.value"> {{ item.label }}

            </Option>
          </Select>
        </p>
        <p>
          <span>选择文件</span>
          <Input v-model="value" disabled placeholder="请上传Word文档，不超过15M" class="sub-ipt" />
          <Upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="handleUpload" class="upload-btn">
            <span>
              <Button icon="ios-cloud-upload-outline" type="primary">上传检测文章</Button>
            </span>
          </Upload>
        </p>
      </div>
      <h3 class="title">第二步：订单支付</h3>
      <div class="left-pay">
        <p style="color:#808695">
          <span>支付后关注公众号。论文检测完成后，微信实时推送下载报告。</span>
        </p>
        
        <p>
          <Card class="pay-img-box" :class="{'check-this': checkNum == 1}">
            <div style="text-align:center">
              <img src="/static/wx-pay.png" @click="checkThis(1)">
            </div>
          </Card>
          <Card class="pay-img-box" :class="{'check-this': checkNum == 2}">
            <div style="text-align:center">
              <img src="/static/zfb-pay.png" @click="checkThis(2)">
            </div>
          </Card>
        </p>
        <p>
          <Button type="primary" @click="payNow" large>立即检测</Button>
        </p>
        <div class="pay-info" v-if="PayShow">
          <p class="erweima-box">
            <img src="/static/erweima.png" alt="">
            <div class="price-title">您需要支付：
              <span class="red-price">￥120元</span>
            </div>
          </p>
        </div>
        <div class="gzh">
          <img src="/static/erweima.png" alt="">
          <p>关注二维码，获取更多福利</p>
        </div>
      </div>
      </Col>
      <Col span="6" style="margin-top:20px;" :xs="24" :sm="6" :md="6">
      <div class="right-box">
        <h3>论文检测文献库范围</h3>
        <ul>
          <li v-for="(item,index) in checkScope" :key="index">
            <p><span>{{index+1}}.</span>{{item.val}}</p>
          </li>
        </ul>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      value: "",
      file: null,
      checkNum: null,
      PayShow: false,
      Default: "本科（毕业论文）",
      schoolList: [
        {
          value: "本科（毕业论文）",
          label: "本科（毕业论文）"
        },
        {
          value: "专科（毕业论文）",
          label: "专科（毕业论文）"
        },
        {
          value: "研究生（毕业论文）",
          label: "研究生（毕业论文）"
        },
        {
          value: "发表、投稿论文",
          label: "发表、投稿论文"
        },
        {
          value: "其他文章",
          label: "其他文章"
        }
      ],
      checkScope: [
        { val: "中国学术投稿论文网络出版总库" },
        { val: "中国博士学位论文全文数据库" },
        { val: "中国优秀硕士学位论文全文数据库" },
        { val: "中国重要会议论文数据库" },
        { val: "中国重要报纸全文数据库" },
        { val: "中国专利全文数据库" },
        { val: "互联网资源(包含贴吧等论坛资源)" },
        { val: "英文数据库" },
        { val: "港澳台学术文献库" },
        { val: "优先出版文献库" },
        { val: "互联网文档资源" },
        { val: "学术论文联合对比库" },
        { val: "CNKI大成编客-原创作品库" },
        { val: "个人对比库" }
      ]
    };
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "routerToUpload"
  },
  mounted() {
    let routerParams = this.$route.query.type; // 将数据放在当前组件的数据内
    this.msg = routerParams;
  },
  methods: {
    handleUpload(file) {
      this.value = file.name;
      return false;
    },
    checkThis(e) {
      this.checkNum = e;
    },
    payNow() {
      console.log("立即检测");
    }
  }
};
</script>
<style lang="scss" scoped>
.upload {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.title {
  padding: 10px 20px;
  background: #f8f8f9;
  margin-bottom: 20px;
}

.left-content {
  p {
    margin-top: 20px;
    &:last-of-type {
      margin-bottom: 20px;
    }
    span {
      display: inline-block;
      padding: 15px 10px 0 20px;
    }
    .sub-ipt {
      width: 300px;
    }
  }
  .upload-btn {
    display: inline-block;
  }
}

.left-pay {
  position: relative;
  .gzh {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    p {
      margin-top: 0;
      padding-left: 0;
    }
  }
  p {
    margin-top: 20px;
    &:last-of-type {
      margin-bottom: 2px;
    }
    padding-left: 20px;
    .pay-img-box {
      width: 210px;
      display: inline-block;
      img {
        width: 150px;
      }
    }
    .check-this {
      border: 1px solid #ed4014;
    }
  }
  .erweima-box {
    img {
      margin-left: 100px;
    }
  }
  .price-title {
    margin-left: 100px;
    .red-price {
      color: #ed4014;
      font-size: 20px;
    }
  }
}
.right-box {
  h3 {
    text-align: center;
    padding: 10px 20px;
    background: #f8f8f9;
    margin-bottom: 20px;
  }
  ul {
    li {
      span {
        display: inline-block;
        width: 25px;
        text-align: right;
        margin-right: 5px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .upload {
    width: auto;
  }
  .sub-ipt {
    width: 230px !important;
  }
  .left-pay {
    .gzh {
      position: static;
    }
    p {
      .pay-img-box {
        width: 170px;
        img {
          width: 100px;
        }
      }
    }
    .price-title {
      margin-left: 0;
      text-align: center;
    }
    .erweima-box {
      text-align: center;
      img {
        margin-left: 0px;
      }
    }
  }
}
</style>
