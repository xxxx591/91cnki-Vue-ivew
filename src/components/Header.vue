<template>
    <Layout>
        <Menu mode="horizontal" theme="primary" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    首页
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-paper" />
                    检测系统
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-paper" />
                    检测流程
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper" />
                    下载报告
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="ios-paper" />
                    降重修改
                </MenuItem>
            </div>
        </Menu>
    </Layout>
</template>

<script>
export default {};
</script>
<style scoped>
.ivu-layout{
    background: #2d8cf0;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 80px;
}
.layout-logo {
  width: 200px;
  height: 45px;
  background: url(../assets/logo.png)no-repeat center;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 900px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.ivu-menu-horizontal{
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
}
</style>


