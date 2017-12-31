<template>
  <card class="work-exp">
    <div slot="content">
      <timeline>
        <timeline-item v-for="(exp, index) in workExperiences" :key="index">
            <h4 :class="[i === 0 ? 'recent' : '']">{{exp.title}}</h4>
            <p :class="[i === 0 ? 'recent' : '']">{{exp.desc}}</p>
            <p v-for="(detail, index) in exp.detail" :key="index">{{detail}}</p>
        </timeline-item>
      </timeline>
    </div>
  </card>
  
</template>

<script>
import { Timeline, TimelineItem, Card } from "vux";
export default {
  props: {},
  components: { Timeline, TimelineItem, Card },
  data() {
    return {
      workExperiences: [
        {
          title: "",
          desc: "2016.12-2018 航信德利",
          detail: []
        },
        {
          title: "",
          desc: "2016.04-2016.11 Wincor Nixdorf",
          detail: []
        },
        {
          title: "",
          desc: "2016.03-2016.04 Wincor Nixdorf (外派)",
          detail: []
        },
        {
          title: "",
          desc: "2014-2016 Wincor Nixdorf (外派)",
          detail: []
        },
        {
          title: "",
          desc: "2012-2014 Wincor Nixdorf (外派)",
          detail: [
            "银行自助服务设备监控软件ProView及其组件的维护与测试",
            "-  Selenium + Cucumber自动化测试框架开发（BDD实践）及自动化测试案例编写、运行、维护",
            "-  Jenkins持续集成环境维护",
            "-  使用JMeter、BAT性能测试",
            "-  探索性测试实践",
            "-  依SCRUM流程进行日常测试任务。包括，参与需求分析，编写测试计划，编写、执行测试任务，撰写测试报告，报告追踪软件缺陷等"
          ]
        },
        {
          title: "实习生：参与自动化测试",
          desc: "2011-2012 Wincor Nixdorf (外派)",
          detail: ["跟随资深测试人员，学习自动化测试，并在其建立的自动化测试框架下编写测试用例和封装测试逻辑"]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.work-exp {
}
</style>
