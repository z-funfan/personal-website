<template>
<div class="container-fuild blog-index bg-gray pd15">
	<div class="container oh">
		<!--左侧-->
		<div class="col-md-9 col-sm-12 col-xs-12 index-left bg-white">
			<h1>最新</h1>
			<ul class="article-list">
				<li class="each-article" v-for="(item, index) in blog_artciles" :key="index">
					<div class="media">
						<div class="media-body">
							<p class="date">{{item.date}}</p>
							<p class="title">{{item.title}}</p>
							<p class="content">
								{{item.content}}
							</p>
							<p class="desc"><span class="glyphicon glyphicon-folder-open"></span>{{item.desc}}</p>
						</div>
						<div class="media-right hidden-xs">
							<img :src="item.img" alt="文章图片">
						</div>
					</div>
				</li>
			</ul>

			<ul class="pagination">
			    <li class="disabled"><a href="javascript:void(0);" rel="prev">«</a></li>
			    <li class="active"><a href="javascript:void(0);">1</a></li>
			    <li><a href="javascript:void(0);">2</a></li>
			    <li><span>3</span></li>
			    <li><a href="javascript:void(0);">4</a></li>
			    <li><a href="javascript:void(0);">5</a></li>
			    <li><a href="javascript:void(0);" rel="next">»</a></li>
			</ul>

		</div>
		<!--end 左侧-->
		<!--右侧-->
		<div class="col-md-3 hidden-sm hidden-xs">
			<div class="index-right">
				<div class="author-info bg-white">
					<img src="../../assets/img/blog/author.png" alt="作者头像" class="img-author">
					<div class="author-name">郑丰帆</div>
					<div class="author-intro">看着有趣，随便玩玩</div>
					<div class="author-blog">个人站点：<a href="http://funfan.xyz/" target="_blank">http://funfan.xyz/</a></div>
				</div>

				<div class="right-tags bg-white mt15">
          <div class="title">标签</div>
          <div class="tags-body">
            <a href="javascript:void(0);" class="btn btn-default btn-sm  btn-rounded m-r-5 m-b-10" v-for="item in blog_index_tags" :key="item">{{item}}</a>
          </div>
        </div>

        <div class="share-wrap bg-white mt15">
          <div class="title">分享</div>
          <share></share>
        </div>
			</div>
		</div>
		<!--end 右侧-->
	</div>
</div>
</template>

<script>
import share from "./share.vue";
export default {
  components: {
    share
  },
  create() {},
  destroyed() {},
  data() {
    return {
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
      ],
      blog_index_tags: [
        "JAVA",
        "PrimeFaces",
        "Spring",
        "自动化",
        "QA",
        "git",
        "持续集成"
      ]
    };
  }
};
</script>

<style scoped>
.oh {
  overflow: hidden;
}
.bg-gray {
  background: #fafafa;
}
.bg-white {
  background: #fff;
}
.pd15 {
  padding: 15px 0;
}
.blog-index {
  font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", STHeitiSC-Light,
    "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
}
.index-left h1 {
  font-size: 32px;
  color: rgb(92, 107, 119);
  font-weight: 300;
}
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.article-list .each-article {
  position: relative;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
.each-article .media-body {
  padding: 20px;
}
.each-article .date {
  color: rgb(119, 119, 119);
  font-size: 15px;
  line-height: 1.8;
  font-weight: bold;
}
.each-article .title {
  font-size: 18px;
  font-weight: 300;
  line-height: 33px;
}
.each-article .content {
  color: #7f8888;
}
.each-article .desc {
  position: relative;
  bottom: 15px;
  padding: 15px 0 0 0;
  font-size: 16px;
  color: #7c7c84;
  line-height: 24px;
}
.each-article .desc .glyphicon {
  margin-right: 10px;
}
.each-article .media-right {
  max-width: 195px;
  overflow: hidden;
}
.each-article .media-right img {
  max-width: 195px;
}
@media screen and (max-width: 768px) {
  .each-article .desc {
    position: static;
  }
}

/*.index-right{padding-bottom: 9999px;margin-bottom: -9999px;}*/
.author-info {
  padding: 25px 10px;
  text-align: center;
}
.author-info .img-author {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.author-info .author-name {
  color: #555;
  font-size: 19px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
}
.author-info .author-name img {
  width: 24px;
  height: 24px;
  margin-left: 5px;
  vertical-align: middle;
  border-radius: 3px;
}
.author-info .author-intro,
.author-info .author-blog {
  font-size: 12px;
  line-height: 24px;
}
.author-info .author-blog a {
  text-decoration: none;
  color: #555;
}
.mt15 {
  margin-top: 15px;
}
.right-tags {
  padding: 15px;
}
.index-right .title {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  color: #666;
}
.tags-body .btn {
  margin-top: 10px;
  border-radius: 15px;
  padding: 4px 15px;
  margin-right: 5px;
}
.share-wrap {
  padding: 15px;
}
.share-wrap .title {
  margin-bottom: 10px;
}

.pagination > li > a,
.pagination > li > span {
  border-radius: 50% !important;
  margin: 0 5px;
}
.pagination > .active > a,
.pagination > .active > a:focus,
.pagination > .active > a:hover,
.pagination > .active > span,
.pagination > .active > span:focus,
.pagination > .active > span:hover {
  background-color: #8a7dbe;
  border-color: #8a7dbe;
}

.pagination > li > a:focus,
.pagination > li > a:hover,
.pagination > li > span:focus,
.pagination > li > span:hover {
  color: rgb(0, 0, 0);
}

.pagination > li > a,
.pagination > li > span {
  color: rgba(41, 44, 47, 0.22);
}
</style>
