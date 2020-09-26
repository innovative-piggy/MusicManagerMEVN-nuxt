exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("20d52996", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_id_611ad2c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_id_611ad2c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_id_611ad2c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_id_611ad2c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_id_611ad2c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_id_611ad2c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image[data-v-611ad2c9]{border-radius:5px!important;position:relative;height:300px;width:100%}.player_card[data-v-611ad2c9]{text-align:center;bottom:20px;margin:0 40px}.text-muted[data-v-611ad2c9]{font-size:15px}.play[data-v-611ad2c9]{font-size:40px}.control[data-v-611ad2c9]{font-size:25px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=118889b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('player')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=118889b2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/player/player.vue?vue&type=template&id=611ad2c9&scoped=true&
var playervue_type_template_id_611ad2c9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.allMusic)?_c('section',[_vm._ssrNode("<div class=\"container\" data-v-611ad2c9><div class=\"row mb-5\" data-v-611ad2c9><div class=\"col-md-12\" data-v-611ad2c9><h3 class=\"text-center\" data-v-611ad2c9>Player</h3></div></div> <div class=\"row mt-5\" data-v-611ad2c9><div class=\"col-md-6\" data-v-611ad2c9><img src=\"https://images.pexels.com/photos/3624281/pexels-photo-3624281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\" class=\"image\" data-v-611ad2c9> <div class=\"card player_card\" data-v-611ad2c9><div class=\"card-body\" data-v-611ad2c9><h6 class=\"card-title\" data-v-611ad2c9><b data-v-611ad2c9>"+_vm._ssrEscape(" "+_vm._s(this.current.title)+" - "+_vm._s(this.current.artist)+" ")+"</b></h6> <div data-v-611ad2c9><i class=\"fas fa-backward control mr-4\" data-v-611ad2c9></i> "+((!_vm.isplaying)?("<i class=\"fas fa-play play\" data-v-611ad2c9></i>"):("<i class=\"fas fa-pause play\" data-v-611ad2c9></i>"))+" <i class=\"fas fa-forward control ml-4\" data-v-611ad2c9></i></div></div></div></div> <div class=\"col-md-6\" data-v-611ad2c9><div class=\"card shadow\" data-v-611ad2c9><table class=\"table\" data-v-611ad2c9><thead data-v-611ad2c9><tr data-v-611ad2c9><th scope=\"col\" data-v-611ad2c9>#</th> <th scope=\"col\" data-v-611ad2c9>Title</th> <th scope=\"col\" data-v-611ad2c9>Artist</th> <th scope=\"col\" data-v-611ad2c9>Action</th></tr></thead> <tbody data-v-611ad2c9>"+(_vm._ssrList((_vm.allMusic),function(music,index){return ("<tr data-v-611ad2c9><th scope=\"row\" data-v-611ad2c9>"+_vm._ssrEscape(_vm._s(index+1))+"</th> <td data-v-611ad2c9>"+_vm._ssrEscape(_vm._s(music.title))+"</td> <td data-v-611ad2c9>"+_vm._ssrEscape(_vm._s(music.artist))+"</td> <td data-v-611ad2c9><button class=\"btn btn-primary\" data-v-611ad2c9>Play</button></td></tr>")}))+"</tbody></table></div></div></div></div>")]):_vm._e()}
var playervue_type_template_id_611ad2c9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/player/player.vue?vue&type=template&id=611ad2c9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/player/player.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var playervue_type_script_lang_js_ = ({
  data() {
    return {
      current: {
        title: "",
        artist: ""
      },
      song: true,
      isplaying: false,
      allMusic: null,
      index: 0,
      player: ""
    };
  },

  methods: {
    async initPlayer() {
      if (this.allMusic !== []) {
        this.current = await this.allMusic[this.index];
        this.player.src = `http://localhost:4000/${this.current.music.path}`;
      } else {
        this.song = true;
      }
    },

    async getAllSongs() {
      try {
        let response = await this.$axios.$get("/music");

        if (response === []) {
          this.song = true;
          this.current = null;
        } else {
          this.song = false;
          this.allMusic = response;
        }

        await this.initPlayer();
      } catch (err) {
        this.current = null;
        console.log(err);
      }
    },

    play(song) {
      if (song) {
        this.current = song;
        this.player.src = `http://localhost:4000/${this.current.music.path}`;
      }

      this.player.play();
      this.isplaying = true;
    },

    pause() {
      this.player.pause();
      this.isplaying = false;
    },

    next() {
      this.index++;

      if (this.index > this.allMusic.length - 1) {
        this.index = 0;
      }

      this.current = this.allMusic[this.index];
      this.play(this.current);
    },

    prev() {
      this.index--;

      if (this.index < 0) {
        this.index = this.allMusic.length - 1;
      }

      this.current = this.allMusic[this.index];
      this.play(this.current);
    }

  },

  created() {
    if (false) {}

    this.getAllSongs();
  }

});
// CONCATENATED MODULE: ./components/player/player.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_playervue_type_script_lang_js_ = (playervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/player/player.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_playervue_type_script_lang_js_,
  playervue_type_template_id_611ad2c9_scoped_true_render,
  playervue_type_template_id_611ad2c9_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "611ad2c9",
  "5475f534"
  
)

/* harmony default export */ var player = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    player: player
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "158086ec"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map