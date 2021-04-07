<!--  -->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ islogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link href="" v-if="islogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link href="" v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!islogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                v-model="user.email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                placeholder="Password"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ islogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";
// 仅客户端加载 js-cookie 包
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "notAuthenticated",
  name: "loginIndex",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: {},
      errorsss: { "email or password": ["is invalid"] },
    };
  },

  components: {},

  computed: {
    islogin() {
      return this.$route.name === "login";
    },
  },

  mounted() {},

  methods: {
    async onSubmit() {
      try {
        // 提交表单
        console.log(this.user);
        const { data } = this.islogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });
        // console.log(data);
        // 保存状态
        this.$store.commit("setUser", data.user);
        // 为了防止刷新页面数据丢失
        Cookie.set("user", data.user);
        this.$router.push("/");
      } catch (err) {
        this.errors = err.response.data.errors;
        console.log(this.errors);
        console.dir(err);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
</style>