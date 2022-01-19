(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  Object.freeze({});
  Object.freeze([]);
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    onLoad() {
      this.checkGuide();
    },
    methods: {
      checkGuide() {
        formatAppLog("log", "at pages/guide/judge.vue:12", "\u8FDB\u5165checkGuide\u5224\u65AD\u9875");
        try {
          var launchFlag = uni.getStorageSync("launchFlag");
          formatAppLog("log", "at pages/guide/judge.vue:16", "launchFlag:" + launchFlag);
          if (launchFlag) {
            uni.redirectTo({
              url: "/pages/index/index"
            });
          } else {
            formatAppLog("log", "at pages/guide/judge.vue:22", "\u53BB\u5F15\u5BFC\u9875");
            uni.redirectTo({
              url: "/pages/guide/guide"
            });
          }
        } catch (e) {
          formatAppLog("log", "at pages/guide/judge.vue:28", e.message);
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" });
  }
  var PagesGuideJudge = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const animation = weex.requireModule("animation");
  const _sfc_main$2 = {
    data() {
      return {
        imageList: [
          {
            name: "\u6B22\u8FCE\u4F7F\u7528\u8424\u706B",
            subtitle: "\u8FD9\u662F\u4E00\u6B3E\u5DE5\u5177\u7C7B\u8F6F\u4EF6",
            src: "/static/guide/guide01.png"
          },
          {
            name: "\u8BF7\u8BB0\u4F4F\u521D\u59CB\u5BC6\u7801\u4E3A123456",
            subtitle: "The initial password is 123456",
            src: "/static/guide/guide02.png"
          },
          {
            name: "\u63A5\u4E0B\u6765\u8BF7\u5207\u6362\u4E3A\u6A2A\u5C4F\u64CD\u4F5C",
            subtitle: "Next, please switch to horizontal screen	operation",
            src: "/static/guide/guide03.png"
          }
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 1e4,
        duration: 500,
        iStatusBarHeight: "0px",
        hpx: "100%",
        cur: 0,
        dotsStyles: ""
      };
    },
    onShow() {
      plus.screen.lockOrientation("portrait-primary");
    },
    onUnload() {
      plus.screen.lockOrientation("landscape-primary");
      s;
    },
    onLoad() {
      let that = this;
      plus.navigator.closeSplashscreen();
      uni.getSystemInfo({
        success: function(res) {
          that.hpx = res.windowHeight + "px";
        }
      });
    },
    onReady() {
      this.move(0, 1);
      ei;
    },
    methods: {
      launchApp() {
        uni.setStorage({
          key: "launchFlag",
          data: true,
          success() {
            uni.redirectTo({
              url: "/pages/index/index"
            });
          }
        });
      },
      guideAction(event) {
        let that = this, index = event.detail.current;
        that.cur = index;
        if (index == 0) {
          that.move(0, 1);
          that.moveTwo(150, 0.1);
          that.moveThree(150, 0.1);
          that.lefMainAction(0);
        }
        if (index == 1) {
          that.moveTwo(0, 1);
          that.move(150, 0.1);
          that.moveThree(150, 0.1);
          that.lefMainAction(uni.upx2px(80) + "px");
        }
        if (index == 2) {
          that.moveThree(0, 1);
          that.moveTwo(150, 0.1);
          that.move(150, 0.1);
          that.lefMainAction(uni.upx2px(160) + "px");
        }
      },
      lefMainAction(mum) {
        var testLM = this.$refs.lefMain;
        animation.transition(testLM, {
          styles: {
            transform: "translate(" + mum + ",0px)"
          },
          duration: 400,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
      },
      move(tran, opa) {
        var testEl = this.$refs.box1;
        animation.transition(testEl, {
          styles: {
            transform: "translate(" + tran + "px,0px)",
            transformOrigin: "center center",
            opacity: opa
          },
          duration: 800,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
        var textE2 = this.$refs.box2;
        animation.transition(textE2, {
          styles: {
            transform: "translate(0px," + tran + "px) scale(" + opa + ")",
            transformOrigin: "center center",
            opacity: opa
          },
          duration: 800,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
      },
      moveTwo(tran, opa) {
        var testEl = this.$refs.box3;
        animation.transition(testEl, {
          styles: {
            transform: "translate(" + tran + "px,0px)",
            transformOrigin: "center center",
            opacity: opa
          },
          duration: 800,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
        var textE2 = this.$refs.box4;
        animation.transition(textE2, {
          styles: {
            transform: "translate(0px," + tran + "px) scale(" + opa + ")",
            transformOrigin: "center center",
            opacity: opa
          },
          duration: 800,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
      },
      moveThree(tran, opa) {
        var testEl = this.$refs.box5;
        animation.transition(testEl, {
          styles: {
            transform: "translate(" + tran + "px,0px)",
            transformOrigin: "center center",
            opacity: opa
          },
          duration: 800,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
        var textE2 = this.$refs.box6;
        animation.transition(textE2, {
          styles: {
            transform: "translate(0px," + tran + "px) scale(" + opa + ")",
            transformOrigin: "center center",
            opacity: opa
          },
          duration: 800,
          timingFunction: "ease",
          delay: 0
        }, function() {
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "swiper-css zqui-rel",
        style: vue.normalizeStyle({ height: $data.hpx })
      }, [
        vue.createElementVNode("swiper", {
          class: "swiper",
          style: vue.normalizeStyle({ height: $data.hpx }),
          "indicator-dots": $data.indicatorDots,
          autoplay: $data.autoplay,
          interval: $data.interval,
          duration: $data.duration,
          onChange: _cache[0] || (_cache[0] = (...args) => $options.guideAction && $options.guideAction(...args))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.imageList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              class: "flex1",
              key: index
            }, [
              vue.createElementVNode("image", {
                class: "flex-column image-size",
                mode: "widthFix",
                src: item.src
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "flex-column title-box" }, [
                vue.createElementVNode("view", { class: "guide-title" }, vue.toDisplayString(item.name), 1),
                vue.createElementVNode("view", { class: "guide-subtitle" }, vue.toDisplayString(item.subtitle), 1)
              ])
            ]);
          }), 128))
        ], 44, ["indicator-dots", "autoplay", "interval", "duration"]),
        vue.createCommentVNode(" \u6309\u94AE\u6837\u5F0F\u5207\u6362 "),
        $data.cur != 2 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "flex-column dots"
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.imageList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["dot", { "active": index == $data.cur }])
            }, null, 2);
          }), 128))
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" \u7B2C\u4E09\u5F20\u56FE\u4F7F\u7528\u6309\u94AE\u300A\u7ACB\u5373\u8FDB\u5165\u300B "),
        $data.cur == 2 ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "flex-column cu-btn footer",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.launchApp && $options.launchApp(...args))
        }, "\u521B\u5EFA\u8D26\u53F7")) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" \u53F3\u4E0A\u89D2\u8DF3\u8FC7\u6309\u94AE "),
        vue.createCommentVNode(' <view class="btn-box" @click="launchApp"><text class="passbtn">\u8DF3\u8FC7</text></view> ')
      ], 4)
    ]);
  }
  var PagesGuideGuide = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {
      outBtn: function() {
        uni.showModal({
          title: "\u6E05\u9664launchFlag\u503C",
          content: "\u786E\u5B9A\u8981\u6E05\u9664launchFlag\u503C\uFF0C\u8FDB\u884C\u91CD\u542F\u6D4B\u8BD5\uFF1F",
          success: function(res) {
            if (res.confirm) {
              formatAppLog("log", "at pages/index/index.vue:27", "\u7528\u6237\u70B9\u51FB\u786E\u5B9A");
              uni.clearStorage();
              uni.showToast({
                icon: "none",
                duration: 3e3,
                title: "\u6E05\u9664\u6210\u529F1\u79D2\u540E\u91CD\u542F"
              });
              setTimeout(function() {
                uni.hideToast();
                plus.runtime.restart();
              }, 1e3);
            } else if (res.cancel) {
              formatAppLog("log", "at pages/index/index.vue:41", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($data.title), 1)
      ]),
      vue.createElementVNode("view", {
        class: "out-btn",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.outBtn())
      }, "\u6E05\u9664launchFlag\u503C")
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/guide/judge", PagesGuideJudge);
  __definePage("pages/guide/guide", PagesGuideGuide);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      plus.screen.lockOrientation("portrait-primary");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
