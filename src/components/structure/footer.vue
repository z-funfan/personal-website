<template>
  <section class="footer text-center hidden-sm hidden-xs">
    <p>{{msg}}</p>
  </section>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      msg: "©2017 Funfan 趣风帆 沪ICP备17051350号-1 All rights reserved."
    };
  }
};
</script>
<<style lang="less" scoped>
.footer{
  width: 100%;
  color: #5f6060;
  line-height: 25px;
  font-size: 12px;
  text-align: center;
  margin-bottom: -25px
}

</style>
