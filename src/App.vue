<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from "../src/components/common/tab-bar/mainTabbar";
export default {
  name: "App",
  components: {
    mainTabbar
  }
};
</script>

<style>
</style>


