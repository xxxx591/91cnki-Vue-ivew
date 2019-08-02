<template>
  <div class="flower-box" style="margin-bottom:70px;">
    <ul>
      <li>
        <div>
          <span>第一步：</span>进入
          <router-link to="/?activeNum=1">知网查重系统</router-link>,选择所需查重系统，点击【立即检测】。</div>
        <div>
          <span>第二步：</span>填写待检测论文的标题（篇名）和作者。如果要去除引用本人已发表文章的重复，请务必填写作者姓名。点击【选择文件】按钮上传待检论文。</div>
        <div>
          <p>
            <span>第三步：</span>1，输入【手机号码】，然后点击【上传论文】按钮上传论文。</p>
          <p>2，【微信/支付宝支付】打开扫一扫，扫描屏幕二维码，成功后自动跳转至
            <router-link to="download">下载检测报告</router-link>页面。</p>
        </div>
        <div>
          <p>
            <span>第四步</span>提交论文成功后，请等待30分钟左右（高峰时期可能要排队一至两小时），可以点击左侧导航【下载检测报告】下载检测结果。检测报告为压缩包，解压后用即可打开。</p>
        </div>
      </li>
      <li>
          <div class="gzh">
          <img src="/static/erweima.png" alt="">
          <p>关注二维码，获取更多福利</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flower-box {
  width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 36px;
  margin-top: 20px;
  position: relative;
  padding: 0 20px;
  .gzh {
    display: block;
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
}

@media screen and (max-width: 1200px) {
  .flower-box {
    width: auto;
    font-size: 14px;
  }
}
</style>
