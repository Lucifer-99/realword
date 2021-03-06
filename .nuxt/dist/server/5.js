exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=0f7975f9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-0f7975f9>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0f7975f9>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-0f7975f9>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-0f7975f9>"+_vm._ssrEscape(_vm._s(_vm.islogin ? "Sign in" : "Sign up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-0f7975f9>","</p>",[(_vm.islogin)?_c('nuxt-link',{attrs:{"href":"","to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"href":"","to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-0f7975f9>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-0f7975f9>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-0f7975f9>"+((!_vm.islogin)?("<fieldset class=\"form-group\" data-v-0f7975f9><input type=\"text\" placeholder=\"Your Name\" class=\"form-control form-control-lg\" data-v-0f7975f9></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-0f7975f9><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-0f7975f9></fieldset> <fieldset class=\"form-group\" data-v-0f7975f9><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-0f7975f9></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-0f7975f9>"+_vm._ssrEscape("\n            "+_vm._s(_vm.islogin ? "Sign in" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=0f7975f9&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js
 // ????????????

const login = data => {
  return Object(request["b" /* request */])({
    method: "POST",
    url: "/api/users/login",
    data
  });
}; // ????????????

const register = data => {
  return Object(request["b" /* request */])({
    method: "POST",
    url: "/api/users",
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
 // ?????????????????? js-cookie ???

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: "notAuthenticated",
  name: "loginIndex",

  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {},
      errorsss: {
        "email or password": ["is invalid"]
      }
    };
  },

  components: {},
  computed: {
    islogin() {
      return this.$route.name === "login";
    }

  },

  mounted() {},

  methods: {
    async onSubmit() {
      try {
        // ????????????
        console.log(this.user);
        const {
          data
        } = this.islogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        }); // console.log(data);
        // ????????????

        this.$store.commit("setUser", data.user); // ????????????????????????????????????

        Cookie.set("user", data.user);
        this.$router.push("/");
      } catch (err) {
        this.errors = err.response.data.errors;
        console.log(this.errors);
        console.dir(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f7975f9",
  "a7571e52"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map