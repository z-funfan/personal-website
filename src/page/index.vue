<template>
  <div class="index-page">
    <div class="content-wrapper">
      <div class="main-content">
        <span class="main-content-text content-medium-size">Just for </span>
        <span class="main-content-text content-large-size">FUN</span>
      </div>
        
      <div class="main-background"></div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "@/components/structure/footer";
export default {
  props: {},
  components: {
    myFooter
  }
};
</script>
<style lang="less" scoped>
.index-page {
  position: relative;
  .content-wrapper {
    display: inline-block;
    position: relative;
    min-height: 85vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    .main-content {
      text-align: center;
      margin: 25vh auto;
      .content-medium-size {
        font-size: 5em;
      }
      .content-large-size {
        font-size: 12em;
      }
      .main-content-text {
        position: relative;
        color: #fff;
        font-weight: bold;
        font-family: Helvetica;
        text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
          0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
          0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
          0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
      }
    }
    .main-background {
      position: absolute;
      padding-bottom: 25px;
      background-image: url("../assets/img/index-background.gif");
      background-size: cover;
      background-repeat: no-repeat;
      top: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(2px);
      overflow: hidden;
      z-index: -1;
    }
  }
  .content-wrapper:after {
    display: block;
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>
