exports.ids = [2];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/manager/index.vue?vue&type=template&id=f775614e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('manager')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/manager/index.vue?vue&type=template&id=f775614e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/manager/manager.vue?vue&type=template&id=3ba11be4&
var managervue_type_template_id_3ba11be4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mt-5"},[_vm._ssrNode("<div class=\"container mb-4\"><div class=\"row\"><div class=\"col-md-12\">"+((_vm.addState)?("<div class=\"card\"><div class=\"card-body\"><div class=\"card-title mb-4\"><h4>Add Music</h4></div> <form enctype=\"multipart/form-data\"><div class=\"form-group\"><label for=\"title\">Title</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.musicDetails.title)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"artist\">Artist</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.musicDetails.artist)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"artist\">Music</label> <div class=\"custom-file\"><input type=\"file\" id=\"customFile\" class=\"custom-file-input\"> <label for=\"customFile\" class=\"custom-file-label\">Choose file</label></div></div> <div class=\"form-group\"><button"+(_vm._ssrAttr("disabled",_vm.isDisabled))+" class=\"btn btn-primary\">"+((_vm.addLoading)?("<span role=\"status\" aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\"></span>"):"<!---->")+"Submit\n                </button></div></form></div></div>"):"<!---->")+"</div></div></div> <div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"card bg-light p-1 showdow-sm\"><div class=\"card-title\"><button class=\"btn btn-info m-3\">"+_vm._ssrEscape(_vm._s(_vm.addState?"Cancel":"Add New Music"))+"</button></div> <div class=\"card-body\"><table class=\"table\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">Title</th> <th scope=\"col\">Artist</th> <th scope=\"col\">Date created</th> <th scope=\"col\">Action</th></tr></thead> "+((_vm.musicLoading)?("<div role=\"status\" class=\"spinner-border\" style=\"width: 3rem; height: 3rem;\"><span class=\"sr-only\">Loading...</span></div>"):("<tbody>"+(_vm._ssrList((_vm.allmusic),function(music,index){return ("<tr><td>"+_vm._ssrEscape(_vm._s(index + 1))+"</td> <td>"+_vm._ssrEscape(_vm._s(music.title))+"</td> <td>"+_vm._ssrEscape(_vm._s(music.artist))+"</td> <td>"+_vm._ssrEscape(_vm._s(music.created))+"</td> <td><button class=\"btn btn-info\">Delete</button></td></tr>")}))+"</tbody>"))+"</table></div></div></div></div></div>")])}
var managervue_type_template_id_3ba11be4_staticRenderFns = []


// CONCATENATED MODULE: ./components/manager/manager.vue?vue&type=template&id=3ba11be4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/manager/manager.vue?vue&type=script&lang=js&
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
/* harmony default export */ var managervue_type_script_lang_js_ = ({
  data() {
    return {
      musicDetails: {
        title: '',
        artist: '',
        music: ''
      },
      allmusic: [],
      addState: false,
      addLoading: false,
      musicLoading: false,
      isValid: false
    };
  },

  computed: {
    isDisabled: function () {
      if (this.musicDetails.title === '' || this.musicDetails.artist === '' || this.musicDetails.music === '') {
        return !this.isValid;
      }
    }
  },
  methods: {
    initForm() {
      this.addState = !this.addState;
    },

    handleFileUpload() {
      this.musicDetails.music = this.$refs.file.files[0];
      console.log(this.musicDetails.music.type);
    },

    async getAllMusics() {
      this.musicLoading = true;

      try {
        let data = await this.$axios.$get('/music');
        this.allmusic = data;
        this.musicLoading = false;
      } catch (err) {
        this.musicLoading = false;
        swal('Error', 'Error Fetting Musics', 'error');
      }
    },

    addNewMusic() {
      let types = /(\.|\/)(mp3|mp4)$/i;

      if (types.test(this.musicDetails.music.type) || types.test(this.musicDetails.music.name)) {
        let formData = new FormData();
        formData.append('title', this.musicDetails.title);
        formData.append('artist', this.musicDetails.artist);
        formData.append('music', this.musicDetails.music);
        this.addLoading = true;
        this.$axios.$post('/music', formData).then(response => {
          console.log(response);
          this.addLoading = false;
          this.musicDetails = {};
          this.getAllMusics(); // we will create this function later

          swal('Success', 'New Music Added', 'success');
        }).catch(err => {
          this.addLoading = false;
          swal('Error', 'Something Went wrong', 'error');
          console.log(err);
        });
      } else {
        swal('Error', 'Invalid file type', 'error');
        return !this.isValid;
      }
    },

    deleteMusic(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this Music!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$axios.$delete('/music/' + id).then(response => {
            this.getAllMusics();
            swal('Poof! Your Music file has been deleted!', {
              icon: 'success'
            });
          }).catch(err => {
            swal('Error', 'Somethimg went wrong', 'error');
          });
        } else {
          swal('Your Music file is safe!');
        }
      });
    }

  },

  created() {
    this.getAllMusics();
  }

});
// CONCATENATED MODULE: ./components/manager/manager.vue?vue&type=script&lang=js&
 /* harmony default export */ var manager_managervue_type_script_lang_js_ = (managervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/manager/manager.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  manager_managervue_type_script_lang_js_,
  managervue_type_template_id_3ba11be4_render,
  managervue_type_template_id_3ba11be4_staticRenderFns,
  false,
  null,
  null,
  "15419b14"
  
)

/* harmony default export */ var manager = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/manager/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pages_managervue_type_script_lang_js_ = ({
  components: {
    manager: manager
  }
});
// CONCATENATED MODULE: ./pages/manager/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_managervue_type_script_lang_js_ = (lib_vue_loader_options_pages_managervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/manager/index.vue





/* normalize component */

var manager_component = Object(componentNormalizer["a" /* default */])(
  pages_managervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5adeb106"
  
)

/* harmony default export */ var pages_manager = __webpack_exports__["default"] = (manager_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map