<template>
  <div id="app" class="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import myHeader from "@/components/structure/header";

export default {
  name: "app",
  components: {
    myHeader
  }
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/iconfont.css";
@import "./assets/css/bootstrap.min.css";

.app a {
  color: #7e8c8d;
  text-decoration: none;
  backface-visibility: hidden;
}
#app {
  width: 100%;
}
</style>
