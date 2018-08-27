<template>
    <Layout>
        <Menu mode="horizontal" theme="primary" :active-name="activeNum" >
            <div class="layout-logo"></div>
            <div class="layout-nav" v-if="docWidth">
                <MenuItem name="1">
                   <Icon type="ios-home" />
                    首页
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-list-box" />
                    检测系统
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-flower" />
                    检测流程
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-download" />
                    下载报告
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="md-create" />
                    人工降重
                </MenuItem>
            </div>
            <div class="layout-nav" v-else>
                <Dropdown trigger="click">
                    <Button type="primary">
                        首页
                        <Icon type="ios-arrow-down"></Icon>
                    </Button>
                    <DropdownMenu slot="list">
                        <DropdownItem>检测系统</DropdownItem>
                        <DropdownItem>检测流程</DropdownItem>
                        <DropdownItem>下载报告</DropdownItem>
                        <DropdownItem>人工降重</DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </div>
        </Menu>

    </Layout>
</template>

<script>
export default {
  data() {
    return {
      docWidth: true,
      activeNum:'1'
    };
  },
  mounted() {
      if (this.$el.clientWidth<830) {
          this.docWidth = !this.docWidth; 
      }
  },
};
</script>
<style scoped>
.ivu-layout {
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
  background: url(../assets/logo.png) no-repeat center;
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
.ivu-menu-horizontal {
  width: 1200px;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
}
@media screen and (max-width: 1200px) {
  .ivu-menu-horizontal,
  .layout-nav {
    width: auto;
    float: right;
  }
}
</style>


