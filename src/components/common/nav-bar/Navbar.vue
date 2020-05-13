<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 10;
  background: white;
}
.nav-bar .left,
.right {
  width: 60px;
}
.nav-bar .center {
  flex: 1;
}
</style>
