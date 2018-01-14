<template>
  <div class="resume-header">
    <blur class="background" :blur-amount="15" :url="backgroundUrl">
      <p class="center"><img :src="url"></p>
      <div class="name-wrapper">
        <span class="name">{{name}}</span>
        <span class="job">{{job}}</span>
      </div>
    </blur>
  </div>
</template>

<script>
import { Blur } from "vux";
export default {
  props: {},
  components: {
    Blur
  },
  data() {
    return {
      url: "../../../static/img/resume/my_photo.jpg",
      backgroundUrl: "../../../static/img/resume/header-background.jpg",
      name: "郑丰帆",
      job: "软件工程师"
    };
  }
};
</script>
<style lang="less" scoped>
.resume-header {
  .background {
    z-index: 50;
  }
  .center {
    text-align: center;
    padding-top: 20px;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 15px 5px #88888a;
  }
  .name-wrapper {
    line-height: 3em;
    height: 3em;
  }
  .name {
    font-size: 3em;
    font-weight: 800;
    color: aliceblue;
    float: left;
    margin-left: 30%;
    vertical-align: bottom;
  }
  .job {
    font-size: large;
    font-weight: bold;
    color: aliceblue;
    float: right;
    margin-right: 30%;
    vertical-align: bottom;
    line-height: 3em;
    height: 3em;
  }
}
</style>
