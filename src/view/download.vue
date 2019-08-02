<template>
  <div class="download-box">
    <div class="check-box">
      <h3 class="check-title">
        <Icon type="ios-search" size="35" />查询报告-- 请输入淘宝订单编号或手机号，点击“查询报告”即可。
      </h3>
      <p>
        <Input clearable size="large" placeholder="请输入手机号码查询" class="check-ipt" v-model="num" />
        <Button :size="buttonSize" type="primary" @click="check()">立即查询</Button>
      </p>
    </div>
    <div class="check-list">
      <h3 class="check-title">
        <Icon type="ios-list" size="35" />检测高峰3-12小时出结果，晚上19:00点后提交的请次日11:00左右查询结果，请耐心等待，提交后不予退款！
      </h3>
    </div>
    <ul class="listtop">
      <li>论文标题</li>
      <li>论文作者</li>
      <li>产品名称</li>
      <li>检测状态</li>
      <li>检测时间</li>
      <li>操作</li>
    </ul>
    <ul class="listcontent" v-for="(item,index) in downList" :key="index">
      <li>{{item.title}}</li>
      <li>{{item.author}}</li>
      <li>{{item.goodsName}}</li>
      <li>{{status(item.status)}}</li>
      <li>{{item.createTime}}</li>
      <li>
        <Button type="info" size="small" v-if="item.status != 0">下载</Button>
        <Button type="info" size="small" @click="go(item.orderNum)">查看</Button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      downList: [],
      buttonSize: "large"
    };
  },
  computed: {
    status() {
      return function(str) {
        return str == 0 ? "拼命检测中..." : "检测完成";
      };
    }
  },
  mounted() {},
  methods: {
    go(orderNum) {
      this.$router.push({
        path: "/details",
        query: {
          orderNum: orderNum
        }
      });
    },
    check() {
      this.$axios
        .get("/outApi/order/selectOrderByPhoneOrOrderNum", {
          params: {
            phone: this.num.replace(/(^\s*)|(\s*$)/g, "")
          }
        })
        .then(res => {
          console.log(res);
          this.downList = res.data.data;
          this.downList.forEach(ele => {
            console.log(ele);
            if (ele.status == 0) {
              ele.status == "正在拼命检测中";
            } else if (ele.status == 1) {
              ele.status == "检测已完成";
            }
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.download-box {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  .check-box {
    p {
      padding-left: 40px;
      .check-ipt {
        width: 400px;
        margin-right: 20px;
      }
    }
  }
  .check-title {
    font-size: 16px;
    line-height: 44px;
    margin: 20px 0;
    font-weight: 500;
  }
  .listtop {
    display: flex;
    li {
      width: 20%;
      text-align: center;
      font-weight: 600;
      color: #515a6e;
      background-color: #f8f8f9;
      height: 40px;
      line-height: 40px;
      &:first-of-type {
        width: 35%;
      }
    }
  }
  .listcontent {
    display: flex;
    li {
      width: 20%;
      text-align: center;
      color: #515a6e;
      height: 40px;
      line-height: 40px;
      border-right: 1px solid #efefef;
      padding: 0px 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 1px solid #efefef;
      &:first-of-type {
        width: 35%;
        border-left: 1px solid #efefef;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .download-box {
    width: auto;
    .check-box {
      p {
        padding-left: 10px;
        .check-ipt {
          width: 260px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
