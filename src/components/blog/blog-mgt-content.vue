<template>
  <section class="container">
        <table class="table table-hover">
	      <thead>
	        <tr>
	          <th>#</th>
	          <th>文章名</th>
	          <th>时间</th>
	          <th>内容</th>
	          <th>操作</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr v-for="(item, index) in blog_artciles" transition="item" :key="index">
	          <th scope="row">{{ index + 1 }}</th>
	          <td>{{item.title}}</td>
	          <td>{{item.date}}</td>
	          <td>{{item.content}}</td>
	          <td><button class="btn btn-danger btn-sm" v-on:click="deleteRecord(index)">删除</button></td>
	        </tr>
	      </tbody>
	    </table>
		
			<form id="form" action="#">
		  	    <div class="form-group">
				    <label for="recordTitle">标题名：<span> {{recordTitle}} </span></label>
				    <input type="text" class="form-control" id="recordTitle" name="recordTitle" v-model="recordTitle" placeholder="请输入记录的标题名称">
				</div>
		    	<!-- <button class="btn btn-primary btn-sm" v-on:click="addRecord">增加记录</button> -->
          <input type="button" class="btn btn-primary btn-sm" v-on:click="addRecord" value="增加记录">
  	  </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      recordTitle: "",
      blog_artciles: [
        {
          date: "1天之前",
          title: "Vue学习笔记",
          content:
            "每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，",
          desc: "web前端系列",
          img: "../../../static/img/blog/pic-vue.png"
        },
        {
          date: "5天之前",
          title: "Docker学习笔记",
          content:
            "Docker的理念是在一个容器中只运行一种程序；天然分布式；能方便的扩展。Docker是C/S架构程序， client和Daemon交互；是个层叠的文件系统（类似Linux文件系统，但可以使用联合加载技术同时加载多个文件系统） ",
          desc: "Docker",
          img: "../../../static/img/blog/docker.png"
        },
        {
          date: "大约1个月之前",
          title: "Lantern—无需任何配置翻墙",
          content: "今天直奔主题，我们该如何采用最便捷的方式实现翻墙。",
          desc: "工具系列",
          img: "../../../static/img/blog/pic-lattern.png"
        }
      ]
    };
  },
  methods: {
    deleteRecord: function(index) {
      this.blog_artciles.splice(index, 1);
    },
    addRecord: function() {
      var title = this.recordTitle.trim();
      if (title !== "") {
        var record = {
          date: "1小时前",
          title: title,
          content: "test content",
          desc: "test desc",
          img: "../lib/img/blog/pic-cannot-be-found.png"
        };
        this.blog_artciles.push(record);
        this.recordTitle = "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.item-move {
  /* applied to the element when moving */
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
