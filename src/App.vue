<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
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
li{
  list-style: none;
}
</style>
