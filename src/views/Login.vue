<template>
  <div>
    <div>
      <p>
        用户名:
        <input type="text" name="username" id="username" v-model="username" />
      </p>
      <p>
        密码:
        <input type="password" name="pw" id="pw" v-model="password" />
      </p>
    </div>
    <button @click="handleQueryData">发请求</button>
    <button @click="handleLogData">打印store数据</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    let username = '';
    let password = '';
    return { username, password };
  },
  methods: {
    handleQueryData: function name() {
      axios
        .post('/api/login/userlogin', {
          username: this.username,
          pw: this.password,
        })
        .then((res) => {
          if (res.data.code === 200) {
            const {
            data: {
              data: { token },
            },
          } = res;
          console.log(token);
          this.$store.dispatch({
            type: 'asyncSetToken',
            token,
          });
          } else {
      //          console.log(
      //   `%c 接口失败 %c ${res.data.code} %c`,
      //   'background:#ff2e63 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      //   'background:#252a34 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      //   'background:transparent'
      // )
      console.log(`接口失败  ${res.data.code}`);
      }
          // console.log(this.$store.state.token);
          console.log(this.username, this.password);
        });
    },
    handleLogData: function () {
      console.log(this.$store.state.token);
    },
  },
};
</script>

<style>
</style>