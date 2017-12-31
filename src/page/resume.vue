<template>
  <div class="resume">
    <div class="page-a4">
      <resume-header></resume-header>
      <resume-about></resume-about>
      <resume-work></resume-work>
      <resume-education></resume-education>
      <resume-skills></resume-skills>
    </div>
    <span class="to-be-done">还没做完</span>
  </div>
</template>

<script>
import resumeHeader from "../components/resume/resume-header.vue";
import resumeAbout from "../components/resume/resume-about-me.vue";
import resumeEducation from "../components/resume/resume-education.vue";
import resumeWork from "../components/resume/resume-work.vue";
import resumeSkills from "../components/resume/resume-skills.vue";

export default {
  props: {},
  components: {
    resumeHeader,
    resumeAbout,
    resumeEducation,
    resumeWork,
    resumeSkills
  }
};
</script>
<style lang="less" scoped>
.resume {
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  z-index: -99;
  .page-a4 {
    width: 9.25in;
    height: 100%;
    background-color: #fafafa;
    z-index: -50;
    filter: blur(10px);
  }
  .to-be-done {
    position: fixed;
    color: #5421ff;
    font-weight: bold;
    font-family: Helvetica;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
    font-size: 5em;
    top: 4em;
    z-index: 999;
  }
}
</style>
