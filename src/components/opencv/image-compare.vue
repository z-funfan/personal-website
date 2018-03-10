<template>
<div class="image-compare">

  <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
		<h3>Drop files to upload</h3>
  </div>
  <div class="upload" v-show="!isOption">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Thumb</th>
            <th>Name</th>
            <th>Size</th>
            <th>Speed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!files.length">
            <td colspan="7">
              <div class="text-center p-5">
                <h4>Drop files anywhere to upload<br/>or</h4>
                <label :for="name" class="btn btn-lg btn-primary">Select Files</label>
              </div>
            </td>
          </tr>
          <tr v-for="(file, index) in files" :key="file.id" @click="selectFile(file)">
            <td>{{index}}</td>
            <td>
              <img v-if="file.thumb" :src="file.thumb" width="40" height="auto" />
              <span v-else>No Image</span>
            </td>
            <td>
              <div class="filename">
                {{file.name}}
              </div>
              <div class="progress" v-if="file.active || file.progress !== '0.00'">
                <div :class="{'progress-bar': true, 'progress-bar-striped': true, 'bg-danger': file.error, 'progress-bar-animated': file.active}" role="progressbar" :style="{width: file.progress + '%'}">{{file.progress}}%</div>
              </div>
            </td>
            <td>{{file.size}}</td>
            <td>{{file.speed}}</td>

            <td v-if="file.error">{{file.error}}</td>
            <td v-else-if="file.success">success</td>
            <td v-else-if="file.active">active</td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="example-footer">
      <div class="footer-status float-right">
        Drop: {{$refs.upload ? $refs.upload.drop : false}},
        Active: {{$refs.upload ? $refs.upload.active : false}},
        Uploaded: {{$refs.upload ? $refs.upload.uploaded : true}},
        Drop active: {{$refs.upload ? $refs.upload.dropActive : false}}
      </div>
      <div class="btn-group">
        <file-upload
          class="btn btn-primary"
          :post-action="postAction"
          :put-action="putAction"
          :extensions="extensions"
          :accept="accept"
          :multiple="multiple"
          :directory="directory"
          :size="size || 0"
          :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
          :headers="headers"
          :data="data"
          :drop="drop"
          :drop-directory="dropDirectory"
          :add-index="addIndex"
          v-model="files"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload">
          <i class="glyphicon glyphicon-plus"></i>
          Select
        </file-upload>
      </div>
      <button type="button" class="btn btn-danger"  v-if="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false">
        <i class="glyphicon glyphicon-stop" aria-hidden="true"></i>
        Stop Upload
      </button>
      <button type="button" class="btn btn-danger"  v-if="files.length" @click.prevent="$refs.upload.remove(files[0])">
        <i class="glyphicon glyphicon-trash" aria-hidden="true"></i>
        Remove
      </button>

    </div>
  </div>

  <div :class="{'modal-backdrop': true, 'fade': true, show: addData.show}" v-if="addData.show"></div>

  <flexbox>
    <flexbox-item class="image-item">
      <card>
        <div slot="content" class=" image-content">
          <group title="处理前">
              <div class="text-center" v-if="selectedFile">
                <x-img :src="selectedFile.blob"></x-img>
              </div>
          </group>
        </div>
      </card>
    </flexbox-item>
    <flexbox-item class="image-item">
      <card>
        <div slot="content" class="image-content" >
            <group title="处理后">
              <div class="text-center">
              </div>
            </group>
        </div>
      </card>
    </flexbox-item>
  </flexbox>
</div>


</template>
<style lang="less" scoped>
@color_1: #fff;

.image-compare {
  width: 90%;
  margin: 2% 5%;
  .image-item {
    .image-content {
      height: 60vh;
    }
  }
  .btn-group {
    .dropdown-menu {
      display: block;
      visibility: hidden;
      transition: all 0.2s;
    }
    &:hover {
      > .dropdown-menu {
        visibility: visible;
      }
    }
    .dropdown-toggle {
      margin-right: 0.6rem;
    }
  }
  label.dropdown-item {
    margin-bottom: 0;
  }
  .filename {
    margin-bottom: 0.3rem;
  }
  .btn-is-option {
    margin-top: 0.25rem;
  }
  .example-footer {
    padding: 0.5rem 0;
    border-top: 1px solid #e9ecef;
    border-bottom: 1px solid #e9ecef;
  }
  .edit-image {
    img {
      max-width: 100%;
    }
  }
  .edit-image-tool {
    margin-top: 0.6rem;
    .btn-group {
      margin-right: 0.6rem;
    }
  }
  .footer-status {
    padding-top: 0.4rem;
  }
  .drop-active {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    opacity: 0.6;
    text-align: center;
    background: #000;
    h3 {
      margin: -0.5em 0 0;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      font-size: 40px;
      color: @color_1;
      padding: 0;
    }
  }
}
</style>

<script>
import ImageCompressor from "@xkeshi/image-compressor";
import FileUpload from "vue-upload-component";
import { Flexbox, FlexboxItem, Card, Group, XImg } from "vux";
export default {
  props: {},
  components: {
    Flexbox,
    FlexboxItem,
    Card,
    Group,
    XImg,
    FileUpload
  },
  data() {
    return {
      files: [],
      selectedFile: File,
      accept: "image/png,image/gif,image/jpeg,image/webp",
      extensions: "gif,jpg,jpeg,png,webp",
      // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
      // extensions: /\.(gif|jpe?g|png|webp)$/i,
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      addIndex: false,
      thread: 3,
      name: "file",
      postAction: "/upload/post",
      putAction: "/upload/put",
      headers: {
        "X-Csrf-Token": "xxxx"
      },
      data: {
        _csrf_token: "xxxxxx"
      },
      autoCompress: 1024 * 1024,
      uploadAuto: true,
      isOption: false,
      addData: {
        show: false,
        name: "",
        type: "",
        content: ""
      }
    };
  },
  watch: {
    "addData.show"(show) {
      if (show) {
        this.addData.name = "";
        this.addData.type = "";
        this.addData.content = "";
      }
    }
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
        // Automatic compression
        // 自动压缩
        if (
          newFile.file &&
          newFile.type.substr(0, 6) === "image/" &&
          this.autoCompress > 0 &&
          this.autoCompress < newFile.size
        ) {
          newFile.error = "compressing";
          const imageCompressor = new ImageCompressor(null, {
            convertSize: Infinity,
            maxWidth: 512,
            maxHeight: 512
          });
          imageCompressor
            .compress(newFile.file)
            .then(file => {
              this.$refs.upload.update(newFile, {
                error: "",
                file,
                size: file.size,
                type: file.type
              });
            })
            .catch(err => {
              this.$refs.upload.update(newFile, {
                error: err.message || "compress"
              });
            });
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }
        // Thumbnails
        // 缩略图
        newFile.thumb = "";
        if (newFile.blob && newFile.type.substr(0, 6) === "image/") {
          newFile.thumb = newFile.blob;
        }
      }
    },
    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (
            newFile.size >= 0 &&
            this.minSize > 0 &&
            newFile.size < this.minSize
          ) {
            this.$refs.upload.update(newFile, { error: "size" });
          }
        }
        if (newFile.progress !== oldFile.progress) {
          // progress
        }
        if (newFile.error && !oldFile.error) {
          // error
        }
        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }
      // Automatically activate upload
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    },
    selectFile(file) {
      this.selectedFile = file;
      console.log(file.blob);
    },
    alert(message) {
      alert(message);
    },
    // add folader
    onAddFolader() {
      if (!this.$refs.upload.features.directory) {
        this.alert("Your browser does not support");
        return;
      }
      let input = this.$refs.upload.$el.querySelector("input");
      input.directory = true;
      input.webkitdirectory = true;
      this.directory = true;
      input.onclick = null;
      input.click();
      input.onclick = e => {
        this.directory = false;
        input.directory = false;
        input.webkitdirectory = false;
      };
    },
    onAddData() {
      this.addData.show = false;
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support");
        return;
      }
      let file = new window.File([this.addData.content], this.addData.name, {
        type: this.addData.type
      });
      this.$refs.upload.add(file);
    }
  }
};
</script>
