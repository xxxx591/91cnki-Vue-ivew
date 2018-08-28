<template>
  <Layout>
    <Menu mode="horizontal" theme="primary" :active-name="activeNum">
      <div class="layout-logo"></div>
      <div class="layout-nav" v-if="docWidth">
        <MenuItem name="1">
        <Icon type="ios-home" />
        <router-link to="/" style="color:#fff;">首页</router-link>
        </MenuItem>
        <Submenu name="2" class="item-title">
          <template slot="title">
          <Icon type="ios-list-box" /> 检测系统
          </template>
          <MenuGroup>
            <MenuItem name="2-1" to="upload?type=pmlc">本科论文检测</MenuItem>
            <MenuItem name="2-2">研究生论文检测</MenuItem>
            <MenuItem name="2-3">期刊检测</MenuItem>
            <MenuItem name="2-4">小分解</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="3" to="flower">
        <Icon type="ios-flower" /> 检测流程
        </MenuItem>
        <MenuItem name="4" to="download">
        <Icon type="ios-download" /> 下载报告
        </MenuItem>
        <MenuItem name="5">
        <Icon type="md-create" /> 人工降重
        </MenuItem>
      </div>
      <div class="layout-nav" v-else>
        <Dropdown trigger="click" >
          <Button type="primary">
            首页
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem><router-link to="/">首页</router-link></DropdownItem>
            <Dropdown placement="right-start">
                <DropdownItem trigger="click">
                    检测系统
                    <Icon type="ios-arrow-forward"></Icon>
                </DropdownItem>
                <DropdownMenu slot="list">
                    <DropdownItem><router-link to="/upload?type=pmlc">本科论文检测</router-link></DropdownItem>
                    <DropdownItem><router-link to="/upload?type=pmlc">研究生论文检测</router-link></DropdownItem>
                    <DropdownItem><router-link to="/upload?type=pmlc">期刊检测</router-link></DropdownItem>
                    <DropdownItem><router-link to="/upload?type=pmlc">小分解</router-link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DropdownItem to="flower"><router-link to="/flower">检测流程</router-link></DropdownItem>
            <DropdownItem to="download"><router-link to="/download">下载报告</router-link></DropdownItem>
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
      activeNum: "1"
    };
  },
  mounted() {
    if (this.$router.history.current.query.activeNum) {
      this.activeNum = this.$router.history.current.query.activeNum;
    }
    if (this.$el.clientWidth < 875) {
      this.docWidth = false;
    }
    window.onresize = () => {
      const that = this;
      return (() => {
        if (this.$el.clientWidth < 875) {
          window.docWidth = false;
          that.docWidth = window.docWidth;
        } else {
          window.docWidth = true;
          that.docWidth = window.docWidth;
        }
      })();
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      this.activeNum = to.query.activeNum;
    }
  }
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
