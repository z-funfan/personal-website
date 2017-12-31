<template>
  <div class="blogmgt">
    <blog-mgt-content></blog-mgt-content>
  </div>
</template>

<script>
import BlogMgtContent from "../components/blog/blog-mgt-content.vue";
export default {
  props: {},
  components: { BlogMgtContent }
};
</script>
<style lang="less" scoped>
.blogmgt {
  background-color: #fafafa;
}
</style>
