<template>
    <div class="download-box">
        <div class="check-box">
            <h3 class="check-title"><Icon type="ios-search" size="35" />查询报告-- 请输入淘宝订单编号或手机号，点击“查询报告”即可。</h3>
            <p><Input clearable size="large" placeholder="请输入手机号码查询" class="check-ipt" /> <Button :size="buttonSize" type="primary">立即查询</Button></p>
        </div>
        <div class="check-list">
            
            <h3 class="check-title"><Icon type="ios-list" size="35" />检测高峰3-12小时出结果，晚上19:00点后提交的请次日11:00左右查询结果，请耐心等待，提交后不予退款！</h3>
        </div>
         <Table  border :columns="columns" :data="downList"></Table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      downList: [
        {
          title: "发送到发送到发生是放大法士大夫阿萨德",
          user: "xyh",
          type: "pmlc",
          time: "2018-08-18",
          state: "已完成"
        }
      ],
      columns: [
        {
          title: "论文标题",
          key: "title",
          fixed: "left",
          maxWidth: "500"
        },
        {
          title: "论文作者",
          key: "user"
        },
        {
          title: "产品名称",
          key: "type"
        },
        {
          title: "检测状态",
          key: "state"
        },
        {
          title: "检测时间",
          key: "time"
        },
        {
          title: "操作",
          key: "操作",
          fixed: "right",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "下载"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      buttonSize: "large"
    };
  }
};
</script>

<style lang="scss" scoped>
.download-box {
  width: 1200px;
  margin: 0 auto;

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
