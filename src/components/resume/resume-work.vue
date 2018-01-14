<template>
  <card class="work-exp">
    <div slot="content">
      <h4 class="work-detail-title">工作经历</h4>
      <timeline class="work-detail-wrapper" color="#5421ff">
        <timeline-item v-for="(exp, index) in workExperiences" :key="index" color="#5421ff" class="work-detail-item">
            <h4 :class="[index === 0 ? 'recent-title' : 'normal-title']">{{exp.title}}</h4>
             <group :title="exp.desc">
              <x-textarea class="work-detail-content"
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
      workExperiences: [
        {
          title: "会员系统以及一些兴趣项目",
          desc: "2016.12-2017.12 航信德利",
          detail:
          // eslint-disable-next-line
            "会员系统：Spring + JSF的架构，整体使用下来感觉对于Admin Console这种软件来说是非常还用的。\
            尤其是对于我这种没什么前端经验的同学，大部分页面逻辑也交给JAVA代码，页面只要一些基本的前端知识就足矣完成绝大部分功能。<br/>\
            但是对于性能要求、并发量、响应速度、使用带宽有较高的移动端，JSF的表现不甚良好，因此移动端尝试前后端分离的方案。\
            国内比较火的就是Vue，用下来感觉还不错，因为学习资源和控件库都比较丰富，也容易上手。<br/>\
            其他：除了Vue，还搞了一台阿里云服务器玩了一下，就是现在这台，搞了个个人网站，先把简历搞一下。"
        },
        {
          title: "物业管理系统项目、会员系统以及其他一些小项目",
          desc: "2016.12-2017.12 航信德利",
          detail:
          // eslint-disable-next-line
            "所有的项目基本都切换到了WildFly + MySql + Spring + PrimeFaces这样的架构上了。<br/>\
            -  物业管理项目：主要服务于商场的管理系统，主要用于管理出租单元、招商合同、每月结算等。<br/>\
            -  会员系统：管理会员信息、会员积分、会员等级、积分兑换以及部分优惠券、活动。\
            包含管理员界面和一个嵌在微信公众号里的移动端页面，当然这个阶段还是用PrimeFaces实现的。<br/>\
            -  其他：帮其他团队做了一些自助收银设备，自助打票设备什么的，都是边边角角帮帮忙，并没有特别深入参与。"
        },
        {
          title: "开发工程师： JAVA开发",
          desc: "2016.04-2016.11 Wincor Nixdorf",
          detail:
          // eslint-disable-next-line
            "物业管理系统项目和工单管理软件项目。<br/>\
            这一年，公司基本所有的项目都有较大的转型，逐渐将所有项目从原来的Server + RCP Console切换至基于Spring, JSF(Primefaces)实现的BS架构。<br/>\
            其中，物业管理系统属于从无到有的一个项目，从需求分析开始，慢慢的构建、慢慢的完善；<br/>\
            工单管理软件项目算是一个救火项目，两三个月里，用Spring，JSF为原来的产品搭建一个Web风格的控制台。\
            还是调用原来的服务端，并不涉及业务的重构。<br/>\
            原来十年前Swing写的控制台，有人嫌太难看，现在要不是浏览器随开随看的，都不好意思出来卖..."
        },
        {
          title: "测试工程师：GitLab搭建",
          desc: "2016.03-2016.04 Wincor Nixdorf (外派)",
          detail: "自学在CentOS上为公司搭建私有GitLab，并进行日常备份管理"
        },
        {
          title: "测试工程师：产品测试",
          desc: "2014-2016 Wincor Nixdorf (外派)",
          detail:
          // eslint-disable-next-line
            "银行自助服务设备监控软件ProView及其组件的维护与测试<br/>\
            -  Selenium + Cucumber自动化测试框架开发（BDD实践）及自动化测试案例编写、运行、维护<br/>\
            -  Jenkins持续集成环境维护<br/>\
            -  使用JMeter、BAT性能测试<br/>\
            -  探索性测试实践<br/>\
            -  依SCRUM流程进行日常测试任务。包括，参与需求分析，编写测试计划，编写、执行测试任务，撰写测试报告，报告追踪软件缺陷等"
        },
        {
          title: "测试工程师：产品测试",
          desc: "2012-2014 Wincor Nixdorf (外派)",
          detail:
          // eslint-disable-next-line
            "维护、改进基于QTP（UFT）的自动化测试框架，为多个项目编写自动化测试用例；<br/>\
            ProView产品安装包、HotInfo制作及发布准出测试；<br/>\
            -  使用InstallShield制作安装包及HotInfo补丁包<br/>\
            -  使用Install4J制作其他组件安装包及更新包"
        },
        {
          title: "实习生：参与自动化测试",
          desc: "2011-2012 Wincor Nixdorf (外派)",
          detail: "跟随资深测试人员，学习自动化测试，并在其建立的自动化测试框架下编写测试用例和封装测试逻辑"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.work-exp {
  .work-detail-title {
    margin-top: 0.77em;
    margin-bottom: 0.3em;
    padding-left: 15px;
    padding-right: 15px;
    color: #999999;
    font-size: 14px;
  }
  .work-detail-wrapper {
    .work-detail-item {
      padding-left: 2em;
      .recent-title {
        font-weight: 700;
        color: #5421ff;
      }
      .normal-title {
        font-weight: 700;
      }
      .work-detail-content {
        padding: 1em;
      }
    }
  }
}
</style>
