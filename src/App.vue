<template>
  <div>
    <div id="player"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    //监听三维交互的返回事件
    onLoad() {
      // onResize();
      this.init(true, true);
    },
    onResize() {
      let player = document.getElementById("player");
      player.style.height = window.innerHeight + "px";
      player.style.width = window.innerWidth + "px";
    },
    onReady() {
      //此时可以调用接口了
    },
    onEvent(e) {
      console.log(e);
    },
    log() {},
    initWebSocket() {
      //初始化weosocket
      const wsuri = "127.0.0.1:4322";
      this.websock = new AirCityAPI(wsuri, this.onReady, this.log);
      this.websock.setEventCallback(this.onEvent);
    },
    getMatchServerConfig(host, fn, callbackIndex) {
      if ("WebSocket" in window) {
        var url = `ws://${host}`;
        let __fn = fn;

        var ws = new WebSocket(url);
        ws.onopen = function() {
          this.send(
            JSON.stringify({
              command: 6,
              callbackIndex: callbackIndex,
            })
          );
        };
        ws.onmessage = function(event) {
          var o = JSON.parse(event.data);
          __fn(o);
        };
        ws.onclose = function() {};
        ws.onerror = function(event) {};
      } else {
        this.log("Not Support WebSocket!");
      }
    },
    initInterface(withPlayer, withApi) {
      //AirCityPlayer
      if (withPlayer) {
        let options = {
          domId: "player",
          token: HostConfig.Token,
          showMarker: true,
          showStartupInfo: true,
        };
        let aircityPlayer = new AirCityPlayer(
          HostConfig.instanceId || HostConfig.AirCityPlayer,
          options
        );

        // let p_bitrate = getQueryVariable("bitrate"); //2021.04.16 Add 从参数中解析码率
        // p_bitrate && aircityPlayer.setBitrate(p_bitrate);
      }

      //AirCityAPI
      if (withApi) {
        let _this = this;
        let aircityApi = new AirCityAPI(
          HostConfig.instanceId || HostConfig.AirCityAPI,
          {
            onReady: () => {
              //此时可以调用接口了
              __g.camera.get((r) => {
                this.log(
                  `Camera: ${r.x}, ${r.y}, ${r.z}, ${r.pitch}, ${r.yaw}`
                );
              });
            },
            onEvent: (e) => {
              this.onEvent(e);
            },
            onLog: this.log,
            useColorLog: false, //仅用于SDK测试页面，二次开发请设置为false
          }
        );
      }
    },
    init(withPlayer, withInterface) {
      let _this = this;
      _this.getMatchServerConfig(HostConfig.MatchServer, function(o) {
        if (o.result == 0) {
          HostConfig.instanceId = o.instanceId;
          _this.initInterface(withPlayer, withInterface);
        } else {
          // alert('云渲染资源已满，请稍候再试')
          _this.initInterface(withPlayer, withInterface);
        }
      });
    },
  },
  created() {},
  mounted() {
    window.addEventListener("load", this.onLoad, true);
    window.addEventListener("resize", this.onResize, true);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
#player {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
</style>
