<template>
    <div class="download-box">
         <Table width="550"  border :columns="columns" :data="downList"></Table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "论文标题",
          name: "论文标题",
          fixed: "left",
          width:'100'
        },
        {
          title: "论文作者",
          name: "论文作者",
        },
        {
          title: "产品名称",
          name: "产品名称"
        },
        {
          title: "检测时间",
          name: "检测时间"
        },
        {
          title: "检测状态",
          name: "检测状态"
        },
        {
          title: "操作",
          name: "操作",
          width:'100',
          flexd: "right",
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
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "Edit"
              )
            ]);
          }
        }
      ],
      
    };
  }
};
</script>

<style>
</style>
