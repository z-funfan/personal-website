<template>
  <card class="edu-exp">
    <div slot="content">
      <h4 class="edu-detail-title">教育经历</h4>
      <timeline class="edu-detail-wrapper" color="#5421ff">
        <timeline-item v-for="(exp, index) in eduExperiences" :key="index" color="#5421ff" class="edu-detail-item">
            <h4 :class="[index === 0 ? 'recent-title' : 'normal-title']">{{exp.title}}</h4>
             <group :title="exp.desc">
              <x-textarea class="edu-detail-content"
                v-html="exp.detail" :readonly="false" :autosize="true">
              </x-textarea>
            </group>
        </timeline-item>
      </timeline>
    </div>
  </card>
  
</template>

<script>
import { Timeline, TimelineItem, Card, Group, XTextarea } from "vux";
export default {
  props: {},
  components: { Timeline, TimelineItem, Card, Group, XTextarea },
  data() {
    return {
      eduExperiences: [
        {
          title: "复旦大学 在职研究生 工学硕士",
          desc: "2013 - 2016",
          detail: "13年自考复旦大学软件工程专业在职硕士生，毕业论文为《基于Scrum敏捷开发软件的测试模型设计与实现》"
        },
        {
          title: "上海海事大学 本科 工学学士",
          desc: "2008 - 2012",
          detail:
          // eslint-disable-next-line
            "本科就读于上海海事大学，通信工程专业。<br/>\
            本科期间获得人民奖学金，担任蒲公英志愿者服务队档案部部长，<br/>\
            参与世博志愿者工作，获优秀志愿者称号。"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.edu-exp {
  .edu-detail-title {
    margin-top: 0.77em;
    margin-bottom: 0.3em;
    padding-left: 15px;
    padding-right: 15px;
    color: #999999;
    font-size: 14px;
  }
  .edu-detail-wrapper {
    .edu-detail-item {
      padding-left: 2em;
      .recent-title {
        font-weight: 700;
        color: #5421ff;
      }
      .normal-title {
        font-weight: 700;
      }
      .edu-detail-content {
        padding: 1em;
      }
    }
  }
}
</style>
