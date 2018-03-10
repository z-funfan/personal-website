<template>
  <div class="image-filters" >
    <image-compare></image-compare>
  </div>
</template>

<script>
import imageCompare from "../components/opencv/image-compare.vue";
export default {
  props: {},
  components: {
    imageCompare
  }
};
</script>
<style lang="less" scoped>

</style>
