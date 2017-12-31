<template>
  <div class="blog">
    <blog-content></blog-content>
  </div>
</template>

<script>
import BlogContent from "@/components/blog/blog-content";
export default {
  props: {},
  components: { BlogContent }
};
</script>
<style lang="less" scoped>
  .blog {
    background-color: #fafafa;
  }
</style>
