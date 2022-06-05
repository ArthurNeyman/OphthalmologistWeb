<template>
  <div class="authentication">
    <div class="auth-login">
      <div class="auth-login-title">Введите логин:</div>
      <div class="auth-login-email">
        <input v-model="login">
      </div>
    </div>
    <div class="auth-pass">
      <div class="auth-pass-title">Введите пароль:</div>
      <div class="auth-pass-password">
        <input type="password" v-model="password">
      </div>
    </div>
    <input type="button" value="Войти" class="authentication-button" @click.stop="authenticate">

  </div>
</template>

<script>
export default {
  name: 'Authentication',
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    async authenticate() {
      try {
        const req = await fetch('http://82.179.9.51:8080/api/user/login', {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login: this.login,
            password: this.password,
          }),
        })

        const responseData = await req.json()

        localStorage.setItem('token', responseData.accessToken)
        sessionStorage.setItem('token', responseData.accessToken)
        this.$router.push({path: '/admin/services'})
      } catch (e) {
        console.log(e)
      }
    },

  },
}
</script>

<style scoped lang="scss">
.authentication {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.2);

  &-button {
    height: 49px;
    width: 75%;
    color: #fff;
    margin-top: 50px;
    background: #00ADA8;
    border: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
  }
}

.auth {
  &-login {
    width: 80%;
    margin-bottom: 60px;

    &-title {
      text-align: left;
      margin-bottom: 15px;
    }

    &-email {
      input {
        border: none;
        border-radius: 4px;
        height: 32px;
        width: 100%;
        padding-left: 8px;
        background: lightblue;
      }

      input:focus {
        outline: 2px solid #00ADA8;
      }
    }
  }

  &-pass {
    width: 80%;

    &-title {
      text-align: left;
      margin-bottom: 15px;
    }

    &-password {
      input {
        border: none;
        border-radius: 4px;
        height: 32px;
        width: 100%;
        padding-left: 8px;
        background: lightblue;
      }

      input:focus {
        outline: 2px solid #00ADA8;
      }
    }
  }
}
</style>