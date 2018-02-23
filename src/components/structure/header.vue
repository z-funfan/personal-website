<template>
  <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
      <div class="container">
        <a href="javascript:void(0);" class="navbar-brand c-blue logo">
          <img src="../../assets/img/logo.png" width="160" height="40" alt="网站logo">
        </a>

        <tab bar-active-color="#5421ff">
          <tab-item>
              <a class="router-link" href="http://funfan.xyz/">博客</a>
          </tab-item>
          <tab-item>
            <a class="router-link" href="http://funfan.xyz/admin">博客管理</a>
          </tab-item>
          <tab-item selected>
            <router-link class="router-link" to="/resume">简历</router-link>
          </tab-item>
        </tab>
      </div>
      <!-- <button v-on:click="hello">Hello</button> -->
    </header>
</template>

<script>
import { Tab, TabItem } from "vux";
export default {
  props: {},
  components: {
    Tab,
    TabItem
  }
};
</script>
<style lang="less" scoped>
.container {
  display: inline-flex;
  .logo {
    margin-left: 5%;
    margin-right: 10%;
  }
  .vux-tab {
    right: 0;
    width: 50em;
    .vux-tab-item {
      font-size: large;
      &.vux-tab-selected a {
        color: #5421ff;
      }
    }
    .router-link {
      display: block;
    }
  }
}
</style>
