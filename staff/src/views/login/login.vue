<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        password: "",
        type: "",
      },
    };
  },
};
</script>

<style scoped>
.login-wrap {
  height: 100%;
  background-color: #324153;
  /* 弹性盒子布局 水平垂直居中*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 30%;
  background-color: #fff;
  border-radius: 5px;
  padding: 1%;
}

.login-btn {
  width: 100%;
  padding: 3%;
  margin-top: 3%;
}
h2 {
  text-align: center;
}
</style>