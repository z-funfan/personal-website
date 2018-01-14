<template>
<div class="about-me" >
  <flexbox>
    <flexbox-item :span="1/3" class="my-contact">
      <card>
        <div slot="content">
          <group title="联系方式">
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
            <group title="自我介绍">
              <cell-box class="about-detail-content">
                  本人，男，1990年出生。没换过公司，一直在研发部工作。
                  QA做了大概4年多吧。
                  做过手工测试，做过自动化测试也做过性能测试。<br/>
                  后来转了JAVA工程师，技术主要用的Spring + Primefaces。最近因为项目的需要，
                  学了一点Vue和前端的知识。因为对公司流程，软件开发从前到后都比较熟悉，什么都懂一点，
                  承担了Scrum Master的责任，颇有我是革命一块砖，哪里需要哪里搬的感觉。<br/>
                  个人做事按部就班、负责守信，有一定自学能力；
                  个性偏内向，比较‘宅’，互相熟悉之后也能比较玩的开。
                  家住上海，没有特别的爱好。大学时候喜欢看小说，追动漫，工作几年后都渐渐淡了。
                  现在休息时就逛逛酷壳、慕课，看看体育新闻。<br/>
                  最近总有一种，我明明一直在学习，但还是会感觉越来越被时代抛弃。
                  现在仍在努力从Full-Stackoverflow Engineer向真正Full-Stack Engineer升级。
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
  .my-contact {
    .vux-card-content {
      .weui-cell {
        height: 80px;
      }
    }
  }
  .about-detail {
    .about-detail-content {
      height: 320px;
      font-size: medium;
    }
  }
}
</style>
