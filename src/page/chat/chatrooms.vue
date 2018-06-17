<template>

<div class="chatrooms">

  <div class="rooms" v-if="!chattingMode">
    <div class="header">
      <input type="search" placeholder="搜索 摆着看的，还没到需要索索的程度" class="search">
    </div>

    <div class="card new" @click="onClickCreate">
       点击创建房间
    </div>
    <div v-for="room in rooms" :key="room.id" class="card exsiting" @click="onClickJoin(room)">
      <div class="room-name">{{room.name | truncate(25)}}</div>
      <div class="join">点击加入</div>
    </div>
  </div>

  <div class="chatting" v-show="chattingMode">
    <div v-if="remoteVideoCount === 0" class="no-others">等待他人加入房间</div>
    <div id="remoteVideos" class="remote-videos"></div>
    <div class="video-wrapper">
      <video id="localVideo" ref="localVideo" class="local-video"></video>
    </div>
    <div class="hangup" @click="onClickHangup">退出房间</div>
  </div>

</div>
  
</template>

<script>
export default {
  data() {
    return {
      chattingMode: false,
      sessionId: "",
      localStream: null,
      webrtc: null,
      remoteVideoCount: 0,
      rooms: []
    };
  },

  created() {
    this.initWebRTC();
  },

  beforeDestroy() {
    this.hangup();
  },

  methods: {
    onClickCreate() {
      let _this = this;
      this.$vux.confirm.prompt("请输入昵称，5~15个字母", {
        title: "创建房间",
        closeOnConfirm: false,
        inputAttrs: { maxlength: 15 },
        onConfirm(nickname) {
          if (nickname.length > 4) {
            _this.$vux.confirm.hide();
            _this.createRoom(nickname);
          }
        }
      });
    },

    onClickJoin(room) {
      let _this = this;
      this.$vux.confirm.prompt("请输入昵称，5~15个字母", {
        title: "加入房间",
        closeOnConfirm: false,
        inputAttrs: { maxlength: 15 },
        onConfirm(nickname) {
          if (nickname.length > 4) {
            _this.$vux.confirm.hide();
            _this.joinRoome(nickname, room);
          }
        }
      });
    },

    onClickHangup() {
      let _this = this;
      this.$vux.confirm.show({
        title: "退出房间",
        content: "是否确认退出？",
        onConfirm() {
          _this.hangup();
        }
      });
    },

    createRoom(nickname) {
      let _this = this;
      this.chattingMode = true;
      this.sessionId = nickname
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/[^A-Za-z0-9_\-]/g, "");
      this.webrtc.startLocalVideo();
      this.webrtc.once("readyToCall", () => {
        console.log("Ready to create room");
        _this.webrtc.createRoom(_this.sessionId, function(err, name) {
          console.log(" create room: ", name);
        });
      });
    },

    joinRoome(nickname, room) {
      let _this = this;
      this.chattingMode = true;
      this.sessionId = room.name;
      this.sessionId = "funfan";
      this.webrtc.startLocalVideo();
      this.webrtc.once("readyToCall", () => {
        console.log("Ready to join room");
        _this.webrtc.joinRoom(_this.sessionId, function(err, name) {
          console.log(" Join room cb", _this.sessionId);
        });
      });
    },

    hangup() {
      this.chattingMode = false;

      this.webrtc.leaveRoom();
      this.webrtc.stopLocalVideo();
      this.webrtc.disconnect();
      this.initWebRTC();

      this.$refs.localVideo.src = "";
      this.$refs.localVideo.load();
    },

    initWebRTC() {
      let _this = this;
      // eslint-disable-next-line
      this.webrtc = new SimpleWebRTC({
        // signaling url
        url: "https://funfan.xyz:9999/",
        socketio: {
          forceNew: true
        },
        media: {
          audio: true,
          video: true
        },
        // the id/element dom element that will hold "our" video
        localVideoEl: "localVideo",
        // the id/element dom element that will hold remote videos
        remoteVideosEl: "remoteVideos",
        // immediately ask for camera access
        autoRequestMedia: false,
        debug: false,
        detectSpeakingEvents: true
      });

      this.webrtc.on("roomchanged", function(roomsInfo) {
        _this.findRoomsByRoomNamelessThan(roomsInfo, 15);
        console.log("Detected new room created in network: ", _this.rooms.length);
      });

      this.webrtc.on("activerooms", function(roomsInfo) {
        _this.findRoomsByRoomNamelessThan(roomsInfo, 15);
        console.log("Get rooms for the first time: ", _this.rooms.length);
      });

      // remote video added
      this.webrtc.on("videoAdded", function(video, peer) {
        console.log("video added", peer);
        _this.remoteVideoCount++;
      });

      this.webrtc.on("videoRemoved", function(video, peer) {
        console.log("video removed ", peer);
        _this.remoteVideoCount--;
      });

      // remote status changes
      this.webrtc.on("channelMessage", function(peer, label, data) {
        // console.debug(peer.id + ": " + data.type + "[" + data.volume + "]");
      });

      // local changes
      this.webrtc.on("volumeChange", function(volume, treshold) {
        // console.debug("own volume", volume);
      });
    },

    findRoomsByRoomNamelessThan(roomsInfo, roomNameLength) {
      let _this = this;
      this.rooms = [];
      Object.keys(roomsInfo).forEach(name => {
        if (name.length <= 15) {
          _this.rooms.push({ name: name, id: roomsInfo[name] });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.chatrooms {
  background-color: #fafafa;
  min-height: 85vh;
  height: 100%;
  width: 100vw;

  .rooms {
    float: left;
    background-color: #fafafa;
    height: 100%;
    padding-bottom: 5vh;
    .header {
      .search {
        width: 20vw;
        height: 5vh;
        margin: 2vh 4vw;
      }
    }
    .card {
      width: 15vw;
      height: 15vw;
      margin: 2vh 4vw;
      display: inline-block;
      vertical-align: top;
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
        0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .new {
      color: #666;
      font-size: 28px;
      text-align: center;
      line-height: 15vw;
      font-weight: 600;
      &:active {
        background: #999;
        color: #fff;
      }
    }

    .exsiting {
      text-align: center;
      &:active {
        background: rgba(84, 33, 255, 0.64);
        .room-name {
          color: #fff;
        }
        .join {
          color: #fff;
        }
      }
      .room-name {
        font-size: 28px;
        color: #666;
        height: 10vw;
        padding: 5vh 1vw;
      }

      .join {
        color: #999;
        height: 5vw;
        line-height: 5vw;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  .chatting {
    width: 100vw;
    height: 85vh;
    .no-others {
      width: 100%;
      text-align: center;
      height: 50vh;
      line-height: 50vh;
      font-size: 64px;
      font-weight: 600;
      color: #999;
    }
    .hangup {
      position: fixed;
      right: 4vw;
      bottom: 2vh;
      cursor: pointer;
      background: transparent;
      width: 160px;
      height: 48px;
      border-radius: 100px;
      border: 3px solid #5421ff;
      font-size: 20px;
      font-weight: 600;
      color: #5421ff;
      line-height: 48px;
      text-align: center;
      &:disabled {
        background: #999;
        color: #f6f9fd;
      }
      &:active {
        border: 3px solid #73abe6;
        color: #73abe6;
      }
    }
    .remote-videos {
      display: block;
      text-align: center;
      video {
        width: 40vw;
        height: 100%;
        margin: 5vh auto;
        box-shadow: 0 5px 5px -3px rgba(84, 33, 255, 0.2),
          0 8px 10px 1px rgba(84, 33, 255, 0.14),
          0 3px 14px 2px rgba(84, 33, 255, 0.12);
        border-radius: 10px;
      }
    }
    .video-wrapper {
      position: fixed;
      right: 0;
      bottom: 0;
      width: 320px;
      height: 240px;
      background: #999;
      border-radius: 10px;

      .local-video {
        width: 320px;
        height: 240px;
        box-shadow: 0 5px 5px -3px rgba(84, 33, 255, 0.2),
          0 8px 10px 1px rgba(84, 33, 255, 0.14),
          0 3px 14px 2px rgba(84, 33, 255, 0.12);
        border-radius: 10px;
      }
    }
  }
}
</style>
