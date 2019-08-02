<template>
  <div style="margin-bottom:70px;">
    <div class="index-box">
      <div class="content">
        <div class="h1">
          <h1>知网论文查重 大学本科研究生硕博毕业论文查重入口</h1>
        </div>
        <div class="h2">
          <h2>知网论文查重入口，检测结果100%与学校、杂志社相同！
            <router-link to class="h2-a">[查看论文检测报告单样例]</router-link>
          </h2>
        </div>
        <div class="h2">
          <h2>24小时自助，系统自动检测，论文安全不泄露。30分钟-2小时下载报告。
            <router-link to class="h2-a">[检测流程]</router-link>
          </h2>
        </div>
        <div class="h2">
          <h2>学术诚信是一种态度，抵制抄袭，鼓励原创，检测务必认准学术不端知网查重入口，结果和学校单位一致，准确放心！</h2>
        </div>
      </div>
    </div>
    <div class="goodlist">
      <Row :gutter="16">
        <Col
          span="6"
          style="margin-top:20px;padding:0 20px;"
          :xs="12"
          :sm="8"
          :md="6"
          v-for="(item, index) in goodsList"
          :key="index"
        >
          <Card>
            <p slot="title" class="title">{{item.goodsName}}</p>
            <!-- <p class="content">{{item.remarks.replace(/<(?!img).*?>/g, "")}}</p> -->
            <p class="content">
              <img :src="item.img" alt srcset>
            </p>
            <p v-html="item.remarks" class="content"></p>
            <!-- <p class="price">{{item.goodsPrice}}元/{{company(item.company)}}</p> -->
            <p class="price">免费检测</p>
            <p>
              <Button long type="primary" @click="routerToUpload(item.goodsId)">立即检测</Button>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
    <div class="new-list">
      <Row :gutter="16">
        <Col span="6" style="margin:20px 0;" :xs="24" :sm="12" :md="12">
          <h1>行业新闻</h1>
          <ul>
            <li>
              <router-link
                :to="{ path: '/news/news-detail', query: { userId: '123' }}"
              >知网查重时字数超过了怎么办？</router-link>
              <span>2018-08-08</span>
            </li>
            <li>知网查重时字数超过了怎么办？</li>
            <li>知网查重时字数超过了怎么办？</li>
          </ul>
          <p class="show-more">查看更多>></p>
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
      msg: "Welcome to Your Vue.js App",
      goodsList: [
        {goodsName:'论文查重',img:require('../assets/images/test.png'),remarks:'<p>一款免费的论文检测</p>'},
        {goodsName:'论文查重',img:require('../assets/images/test.png'),remarks:'<p>一款免费的论文检测</p>'},
        {goodsName:'论文查重',img:require('../assets/images/test.png'),remarks:'<p>一款免费的论文检测</p>'}
      ]
    };
  },
  mounted() {
    // this.getGoodsList();
  },
  computed: {
    company() {
      return function(num) {
        return num == 1?'篇':'千字'
      };
    }
  },
  methods: {
    getGoodsList() {
      this.$axios
        .post("/outApi/goods/list", {
          pageSize: 10,
          pageNum: 1,
          isAsc: "asc"
        })
        .then(res => {
          console.log(res);
          this.goodsList = res.data.rows;
        });
    },
    routerToUpload(e) {
      console.log(e);
      this.$router.push({
        path: "upload",
        query: {
          goodId: e
        }
      });
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
  .title {
    font-size: 16px;
    line-height: 32px;
    height: 32px;
  }
  p {
    line-height: 2;
    img{
      width: 100%;
    }
  }
  .content {
    min-height: 160px;
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
  ul {
    li {
      line-height: 2;
      cursor: pointer;
      padding-left: 25px;
      span {
        float: right;
        margin-right: 20px;
      }
    }
  }
  .show-more {
    text-align: right;
    padding-right: 20px;
    cursor: pointer;
  }
}
@media screen and (max-width: 1200px) {
  .goodlist,
  .new-list {
    width: auto;
    .title {
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }
    .content {
      min-height: auto;
    }
  }
}
@media screen and(max-width: 420px) {
  .index-box,
  .new-list {
    display: none;
  }
}
</style>
