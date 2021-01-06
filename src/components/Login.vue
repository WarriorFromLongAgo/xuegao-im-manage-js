<template>
  <el-form
    :rules="rules"
    class="login-container"
    label-position="left"
    label-width="0px"
    v-loading="loading"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="account">
      <el-input
        type="text"
        v-model="loginForm.username"
        auto-complete="off"
        placeholder="账号"
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input
        type="password"
        v-model="loginForm.password"
        auto-complete="off"
        placeholder="密码"
      ></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left"
      >记住密码</el-checkbox
    >
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        @click.native.prevent="Login"
        style="width: 100%"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import Axios from "axios";

export default {
  data() {
    return {
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: true,
      loginForm: {
        username: "sang",
        password: "123",
      },
      loading: false,
    };
  },
  methods: {
    Login() {
      let baseUrl = "http://127.0.0.1:12000/";
      let prefixUrl = "/post1";
      let userInfo = {
        id: 11,
        name: "post1",
        username: "post1",
        password: "post1",
        createTime: new Date().getTime(),
      };
      Axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then(
          (res) => {
            console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
            this.loading = false;
            if (res.status === 200) {
              //成功
              var json = res.data;
              if (json.code === 200) {
                this.$router.replace({ path: "/home" });
              } else {
                this.$alert("登录失败!", "失败!");
              }
            } else {
              //失败
              this.$alert("登录失败!", "失败!");
            }
          },
          () => {
            this.loading = false;
            this.$alert("找不到服务器⊙﹏⊙∥!", "失败!");
          }
        )
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
  },
};
</script>
<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
