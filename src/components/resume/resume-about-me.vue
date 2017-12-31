<template>
<div class="about-me" >
  <flexbox>
    <flexbox-item :span="1/3" class="my-contact">
      <card>
        <div slot="content">
          <group>
            <cell title="邮箱" value="zheng0000@yeah.net"></cell>
            <cell title="手机" value="15021094246"></cell>
            <cell title="微信" value="15021094246"></cell>
            <cell title="个人主页" value="http://funfan.xyz"></cell>
          </group>
        </div>
      </card>
    </flexbox-item>
    <flexbox-item>
      <card>
        <div slot="content" class="about-detail">
            <group>
              <cell-box class="about-detail-content">
                  郑丰帆，男，1990年出生。做事按部就班、负责守信，有一定自学能力；
                  个性偏内向，比较‘宅’，互相熟悉之后也能比较玩的开。
                  家住上海，没有特别的爱好。大学时候喜欢看小说，追动漫，工作几年后都渐渐淡了。
                  现在休息时就逛逛酷壳、慕课，看看五星体育。差不多了，最后一句，要没了谷歌，要怎么开发！
              </cell-box>
              <!-- <cell class="" value=""></cell> -->
            </group>
        </div>
      </card>
    </flexbox-item>
  </flexbox>
</div>
  
</template>

<script>
import { Flexbox, FlexboxItem, Card, Group, Cell, CellBox } from "vux";
export default {
  props: {},
  components: {
    Flexbox,
    FlexboxItem,
    Card,
    Group,
    Cell,
    CellBox
  }
};
</script>
<style lang="less" scoped>
.about-me {
  margin-top: 10px;
  .about-detail {
    .about-detail-content {
      height: 213px;
    }
  }
}
</style>
