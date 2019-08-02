<template>
  <div class="upload" style="margin-bottom:70px;">
    <Row :gutter="22">
      <Col span="22" style="margin-top:20px;" :xs="24" :sm="24" :md="24">
        <h3 class="title">订单详情</h3>
        <div class="left-content">
          <p>
            <span class="details-title">检测标题：</span>
            <span>{{datalist.title}}</span>
          </p>
          <p>
            <span class="details-title">检测作者：</span>
            <span>{{datalist.author}}</span>
          </p>
          <p>
            <span class="details-title">检测学科：</span>
            <span>{{datalist.orderMajor}}</span>
          </p>
          <p>
            <span class="details-title">订单编号：</span>
            <span>{{datalist.orderNum}}</span>
          </p>
          <p>
            <span class="details-title">联系方式：</span>
            <span>{{datalist.phone}}</span>
          </p>
          <p>
            <span class="details-title">检测状态：</span>
            <span>{{status(datalist.status)}}</span>
          </p>
          <p>
            <span class="details-title">支付状态：</span>
            <span>{{statics(datalist.payStatus)}}</span>
          </p>
          <p>
            <span class="details-title">支付金额：</span>
            <span>{{datalist.payMoney}}元</span>
          </p>
           <p>
            <Button type="primary" @click="payNow" large>立即支付</Button>
          </p>
          <Modal v-model="buyflag" draggable scrollable title="信息确认" @on-ok="pay" :ok-text='buytitle' :width='width'>
            <div class="buy-box">
              <img src="/static/erweima.png" alt>
            </div>
          </Modal>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "upload",
  data() {
    return {
      msg: "",
      file: null,
      checkNum: null,
      loadingStatus: false,
      PayShow: false,
      // 购买信息
      buyflag: false,
      buytitle: "确认购买",
      width: 520,
      papertitle: "",
      paperuser: "",
      Default: "本科（毕业论文）",
      value: "",
      paperphone: "",
      fileData: {},
      goodId: 6,
      goodsobj: {},
      orderNum: "",
      datalist: {
        orderStatic: "",
        orderNum: "",
        checkNum: "",
        payStatic: "",
        orderTitle: "",
        orderName: "",
        orderMajor: "",
        payMoney: ""
      }
    };
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "routerToUpload"
  },
  computed: {
    statics(){
      return function(str){
        switch (str) {
          case 0:
          return '未支付'
            break;
          case 1:
          return '支付中'
            break;
          case 2:
          return '已支付'
            break;
        
          default:
            break;
        }
      }
    },
    status(){
      return function (str) {
        return str == 0?'拼命检测中...':'检测完成';
      }
    }
  },
  mounted() {
    if (window.innerWidth <= 470) {
      this.width = window.innerWidth - 20;
    }
    let routerParams = this.$route.query.type; // 将数据放在当前组件的数据内
    this.msg = routerParams;
    this.goodId = this.$router.history.current.query.goodId;
    this.orderNum = this.$router.history.current.query.orderNum;

    this.init();
  },
  methods: {
    init() {
      this.$axios
        .get("/outApi/order/queryByOrderNum", {
          params: {
            orderNum: this.orderNum
          }
        })
        .then(res => {
          console.log(res);
          this.datalist = res.data.data;
        });
    },

    checkThis(e) {
      this.checkNum = e;
    },
    payNow() {
      this.loadingStatus = true;
      console.log("立即检测");
      this.buyflag = true;
    },
    pay() {
      // 跳转支付！
      this.$axios
        .post("/outApi/aliPay/payAsPC", {
          id: 3,
          subject: "测试标题",
          totalAmount: "0.1",
          body: "商品描述"
        })
        .then(res => {
          console.log(res);
          // window.open(res.data.url,'target','');
          window.location.href = res.data.url;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.buy-box {
  position: relative;
  text-align: center;
  img {
    width: 120px;
  }
}
.upload {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  padding: 10px 20px;
  background: #f8f8f9;
  margin-bottom: 20px;
}

.left-content {
  p {
    &:last-of-type {
      margin: 20px 0;
    }
    .details-title {
      display: inline-block;
      padding: 15px 0px 0 20px;
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
    img {
      width: 164px;
      height: 164px;
    }
  }
  p {
    margin-top: 20px;
    &:last-of-type {
      margin-bottom: 2px;
    }
    padding-left: 20px;
    span {
      padding: 15px 10px 0 0;
    }
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
    width: 254px !important;
  }
  .left-pay {
    .gzh {
      position: static;
    }
    p {
      .pay-img-box {
        width: 155px;
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
@media screen and (max-width: 375px) {
  .sub-ipt {
    width: 200px !important;
  }
  .left-pay {
    .gzh {
      position: static;
    }
    p {
      .pay-img-box {
        width: 155px;
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
