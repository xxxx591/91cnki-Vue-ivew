<template>
  <div class="upload" style="margin-bottom:70px;">
    <Row :gutter="16">
      <Col span="18" style="margin-top:20px;" :xs="24" :sm="18" :md="18">
        <Tabs type="card" @on-click="changeData">
          <TabPane label="提交论文" name="name1">
            <h3 class="title">第一步：上传文章</h3>
            <div class="left-content">
              <p>
                <span>论文标题</span>
                <Input placeholder="填写真实标题，不超过50字" class="sub-ipt" clearable v-model="papertitle"/>
              </p>
              <p>
                <span>论文作者</span>
                <Input placeholder="填写真实作者，不超过15字" class="sub-ipt" clearable v-model="paperuser"/>
                <span>专业选择</span>
                <Select v-model="Default" style="width:165px" @on-change="optiondata" :label-in-value="true">
                  <Option
                    v-for="item in schoolList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.value }}</Option>
                </Select>
              </p>
              <p>
                <span>论文内容</span>
                <span>
                  当前共计
                  <i class="red">{{paperindex}}</i> 字
                </span>
                <Input
                  v-model="papertextarea"
                  type="textarea"
                  :rows="6"
                  placeholder="将论文内容粘贴至此处..."
                  class="textarea"
                  on-change="getPaperVal($event)"
                />
              </p>
            </div>
          </TabPane>
          <TabPane label="上传文档" name="name2">
            <h3 class="title">第一步：上传文章</h3>
            <div class="left-content">
              <p>
                <span>论文标题</span>
                <Input placeholder="填写真实标题，不超过50字" class="sub-ipt" clearable v-model="papertitle"/>
              </p>
              <p>
                <span>论文作者</span>
                <Input placeholder="填写真实作者，不超过15字" class="sub-ipt" clearable v-model="paperuser"/>
                <span>专业选择</span>
                <Select v-model="Default" style="width:165px"  @on-change="optiondata" :label-in-value="true">
                  <Option
                    v-for="item in schoolList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.value }}</Option>
                </Select>
              </p>
              <p>
                <span>选择文件</span>

                <Input v-model="value" disabled placeholder="请上传Word文档，不超过15M" class="sub-ipt"/>
                <!-- <Upload
                  action="/outApi/aliPay/doAliPayMobileReq"
                  :on-success="handleUpload"
                  class="upload-btn"
                  :data="test"
                >
                  <span>
                    <Button icon="ios-cloud-upload-outline" type="primary">上传检测文章</Button>
                  </span>
                </Upload>-->
                <label for="testFile" class="filebox">
                  <Icon type="ios-cloud-upload-outline" style="color:#fff;"/>上传检测文章
                </label>
                <input
                  type="file"
                  name="filebtn"
                  id="testFile"
                  style="visibility: hidden;"
                  @change="fileChange()"
                >
              </p>
            </div>
          </TabPane>
        </Tabs>

        <h3 class="title">第二步：订单支付</h3>
        <div class="left-pay">
          <p style="color:#808695">
            <span>支付后关注公众号。论文检测完成后，微信实时推送下载报告。</span>
          </p>
          <p>
            <span>手机号码</span>
            <Input placeholder="手机号码用于获取报告详情" class="sub-ipt" clearable v-model="paperphone"/>
          </p>
          <!-- <p>
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
          </p> -->
          <p>
            <Button type="primary" @click="payNow" large>立即检测</Button>
          </p>
          <Modal
            v-model="buyflag"
            draggable
            scrollable
            title="信息确认"
            @on-ok="payNow2"
            :ok-text="buytitle"
            :width="width"
          >
            <div class="buy-box">
              <p>
                论文标题：
                <span>{{papertitle}}</span>
              </p>
              <p>
                论文作者：
                <span>{{paperuser}}</span>
              </p>
              <p>
                论文专业：
                <span>{{Default}}</span>
              </p>
              <p>
                上传文件名：
                <span>{{value}}</span>
              </p>
              <p>
                手机号码：
                <span>{{paperphone}}</span>
              </p>
              <p>
                支付金额：
                <!-- <span>￥{{goodsobj.goodsPrice}}元</span> -->
                <span>免费</span>
              </p>
              <!-- <div id="qrcode"></div> -->
              <img :src="imgurl" alt>
            </div>
          </Modal>

          <div class="gzh">
            <img src="/static/erweima.png" alt>
            <p>关注二维码，获取更多福利</p>
          </div>
        </div>
      </Col>
      <Col span="6" style="margin-top:20px;" :xs="24" :sm="6" :md="6">
        <div class="right-box">
          <h3>论文检测文献库范围</h3>
          <ul>
            <li v-for="(item,index) in checkScope" :key="index">
              <p>
                <span>{{index+1}}.</span>
                {{item.val}}
              </p>
            </li>
          </ul>
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
      buytitle: "确认检测",
      width: 520,
      papertitle: "",
      paperuser: "",
      Default: "本科（毕业论文）",
      value: "",
      paperphone: "",
      tabNum: 0,
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
      ],
      fileData: "",
      goodId: 6,
      goodsobj: {},
      qrcode: "",
      orderNum: "",
      flag: true,
      papertextarea: "",
      paperindex: "0",
      erindex: 0,
      imgurl: "",

      test: {
        goodsId: 6,
        phone: "",
        author: 1111,
        title: "1阿达",
        payMoney: 1,
        body: "dasda"
      },
      optiondata:0
    };
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    papertextarea(newName, oldName) {
      let str = newName;
      let result;
      // 去除字符串空格正则
      result = str.replace(/[ ]/g, "");
      // 遍历字符串
      let charLength = 0;
      for (var i = 0; i < result.length; i++) {
        var sonChar = result.charAt(i);
        //如果是汉字，长度大于2，其他任何字符（包括￥等特殊字符，长度均为1）另外：根据需求规则，限制n个字，一个字=2个字符
        encodeURI(sonChar).length > 2 ? (charLength += 1) : (charLength += 0.5);
      }
      // 同步字数
      this.paperindex = parseInt(charLength);
    }
  },
  mounted() {
    if (window.innerWidth <= 470) {
      this.width = window.innerWidth - 20;
    }
    let routerParams = this.$route.query.type; // 将数据放在当前组件的数据内
    this.msg = routerParams;
    this.goodId = this.$router.history.current.query.goodId;
    // this.init();
  },
  methods: {
    init() {
      this.$axios
        .get("/outApi/goods/queryById", {
          params: {
            goodsId: this.goodId
          }
        })
        .then(res => {
          console.log(res);
          this.goodsobj = res.data;
        });
      this.$axios
        .post("/outApi/dic/list", {
          dictType: "order_major"
        })
        .then(res => {
          console.log(res);
          this.schoolList = res.data.data
        });
    },
    changeData(name) {
      console.log(this.tabNum);
      if (name == "name1") {
        this.tabNum = 0;
      } else if (name == "name2") {
        this.tabNum = 1;
      }
    },
    optiondata(index){
      console.log(index);
      switch (index) {
        case "本科（毕业论文）":
          this.optiondata = 0 
          break;
        case "专科（毕业论文）":
          this.optiondata = 1 
          break;
        case "研究生（毕业论文）":
          this.optiondata = 2
          break;
        case "发表,投稿论文":
          this.optiondata = 3 
          break;
        case "其他文章":
          this.optiondata = 4 
          break;
      
        default:
          break;
      }
    },
    handleUpload(res, file, fileList) {
      this.fileData = fileList["0"].response.data;
      this.value = file.name;
      this.file = file;
      console.log(fileList);
      // this.$axios.post("/outApi/ossFile/ossUploadFile",file).then(res=>{
      //   console.log(res);

      // })
    },
    fileChange() {
      this.fileData = document.getElementById("testFile").files[0];
      this.value = document.getElementById("testFile").files[0].name;
    },
    checkThis(e) {
      this.checkNum = e;
    },
    payNow2(){
if (this.papertitle == "") {
        this.$Message.info("请输入论文标题哟~");
        return;
      } else if (this.paperuser == "") {
        this.$Message.info("请输入论文作者哟~");
        return;
      } else if (this.paperphone == "") {
        this.$Message.info("请输入联系方式哟~");
        return;
      }else{
        this.$router.push({
              path: "/download",
              query: {
                orderNum: 983110587610
              }
            });
      }
    },
    payNow() {
      if (this.papertitle == "") {
        this.$Message.info("请输入论文标题哟~");
        return;
      } else if (this.paperuser == "") {
        this.$Message.info("请输入论文作者哟~");
        return;
      } else if (this.paperphone == "") {
        this.$Message.info("请输入联系方式哟~");
        return;
      }else {
        this.loadingStatus = true;
        this.buyflag = true;
        var checkOrderNum = e => {
          this.$axios
            .get("/outApi/order/queryByOrderNum", {
              params: {
                orderNum: e
              }
            })
            .then(res => {
              if (res.data.data.payStatus == 2) {
                console.log("支付完成，发起跳转");
                this.buytitle = '已支付，查看详情'
              } else {
                console.log("重新发起查询");
                this.buytitle = '支付中...'
                if (this.flag == true) {
                  this.flag = false;
                  setTimeout(() => {
                    this.flag = true;
                    checkOrderNum(this.orderNum);
                  }, 3000);
                }
              }
            });
        };
        if (
          navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
          )
        ) {
          // 移动端输入区域
        } else {
          // pc端输入区域
          let param = new FormData();
          param.append("goodsId", this.goodId);
          param.append("phone", this.paperphone);
          param.append("payMoney", this.goodsobj.goodsPrice);
          param.append("wordNum", this.paperindex);
          param.append("author", this.paperuser);
          param.append("title", this.papertitle);
          param.append("submitType", this.tabNum);
          param.append("orderMajor", this.optiondata);
          if (this.tabNum == 0) {
            param.append("body", this.papertextarea);
          } else {
            param.append("file", this.fileData);
          }
          this.$axios
            .post("/outApi/aliPay/doAliPayMobileReq", param)
            .then(res => {
              console.log(res);
              this.qrcode = res.data.data.qrCode;
              this.orderNum = res.data.data.payOrderId;
              this.imgurl =
                "http://qr.liantu.com/api.php?text=" + res.data.data.qrCode;
              checkOrderNum(this.orderNum);
            });
        }
      }
    },

    pay() {
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        // 跳转支付！
        this.$axios
          .post("/outApi/aliPay/payAsPC", {
            goodsId: this.goodId,
            phone: this.paperphone,
            payMoney: this.goodsobj.goodsPrice,
            wordNum: this.paperindex,
            author: this.paperuser,
            title: this.papertitle,
            configId: "3"
          })
          .then(res => {
            console.log(res);
            // window.open(res.data.url,'target','');
            window.location.href = res.data.url;
          });
      } else {
        // 调起查询接口
        this.$axios
          .get("/outApi/order/queryByOrderNum", {
            params: {
              orderNum: this.orderNum
            }
          })
          .then(res => {
            this.$router.push({
              path: "/details",
              query: {
                orderNum: this.orderNum
              }
            });
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.buy-box {
  position: relative;
  p {
    line-height: 2;
    span {
      color: #2b85e4;
    }
  }
  img {
    position: absolute;
    width: 120px;
    top: 50%;
    right: 10px;
    margin-top: -60px;
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
    .textarea {
      padding: 10px 20px;
    }
    i {
      font-style: normal;
      color: #2b85e4;
    }
  }
  .upload-btn {
    display: inline-block;
  }
  .filebox {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
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
