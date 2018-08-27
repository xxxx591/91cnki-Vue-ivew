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
      </div>
      </Col>
      <Col span="6" style="margin-top:20px;" :xs="24" :sm="6" :md="6">
      <h3>当前系统</h3>
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
        Default: "本科（毕业论文）",
        schoolList: [{
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
          this.checkNum = e
      },
      payNow(){
          console.log('立即检测');
      }
    }
  }

  ;

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
    p {
      margin-top: 20px;
      &:last-of-type {
        margin-bottom: 2px;
      }
      padding-left: 20px;
      span {}
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
  }

  @media screen and (max-width: 1200px) {
    .upload {
      width: auto;
    }
    .sub-ipt {
      width: 230px !important;
    }
    .left-pay {
      p {
        .pay-img-box {
          width: 170px;
          img {
            width: 100px;
          }
        }
      }
    }
  }

</style>
