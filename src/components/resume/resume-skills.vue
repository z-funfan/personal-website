<template>
  <div class="skills">
  <flexbox>
    <flexbox-item class="my-ility">
      <card>
        <div slot="content">
          <radar-chart :chart-data="myIbility" :options="radarOpts"></radar-chart>
        </div>
      </card>
    </flexbox-item>
    <flexbox-item>
      <card>
        <div slot="content">
          <horizontal-bar-chart :chart-data="mySkills" :options="chartOpts"></horizontal-bar-chart>
        </div>
      </card>
    </flexbox-item>
  </flexbox>
  </div>
</template>

<script>
import RadarChart from "../chart/radar-chart";
import HorizontalBarChart from "../chart/horizontal-bar-chart";
import { Flexbox, FlexboxItem, Card } from "vux";

export default {
  props: {},
  components: { RadarChart, HorizontalBarChart, Flexbox, FlexboxItem, Card },
  data() {
    return {
      myIbility: {
        labels: ["责任心", "自信心", "分析能力", "团队精神", "沟通能力", "学习能力", "社交能力"],
        datasets: [
          {
            label: "自我评价",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [99, 80, 85, 99, 80, 85, 60]
          }
        ]
      },
      mySkills: {
        labels: ["JAVA基础", "Vue", "持续集成", "SQL", "手工测试", "自动化测试", "性能测试"],
        datasets: [
          {
            label: "专业技能",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [90, 70, 90, 80, 96, 90, 80],
            scaleStartValue: 0
          }
        ]
      },
      chartOpts: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              ticks: {
                suggestedMin: 40 // minimum will be 0, unless there is a lower value.
              }
            }
          ]
        }
      },
      radarOpts: {
        responsive: true,
        maintainAspectRatio: true,
        scale: {
          ticks: {
            beginAtZero: true,
            min: 45,
            max: 100,
            stepSize: 10
          }
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.skills {
  margin: 10px 0 20px 0;
  .skills-header {
    margin: 0.7em 0.3em;
    padding: 15px;
    font-size: large;
    font-weight: 600;
  }
}
</style>
