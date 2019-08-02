<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-foot></my-foot>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFoot from "@/components/Foot";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyFoot
  }
};
</script>

<style>
#app {
  overflow: hidden;
}
li {
  list-style: none;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: #d2d2d2;
}
::-webkit-scrollbar-track {
  border-radius: 6px;
  background: #f7f7f7;
}

::-webkit-scrollbar-thumb:hover {
  background: #bebebe;
}
::-webkit-scrollbar-thumb:active {
  background: #acacac;
}
</style>
