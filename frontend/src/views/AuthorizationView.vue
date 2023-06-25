<template>
  <div class="mt-10 flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">

      <h1 class="text-xl"> Вход </h1>

      <div class="grid grid-cols-2">
        <label>email</label>
        <input type="text" v-model="email" placeholder="Username" required />
      </div>

      <div class="grid grid-cols-2">
        <label>password</label>
        <input type="password" v-model="password" placeholder="Password" required />
      </div>

      <button
          @click="login"
          class="
                  text-white
                  bg-gradient-to-r from-indigo-500 to-cyan-500
                  hover:from-indigo-600 hover:to-cyan-600
                  duration-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                "
      >Войти</button>

      <div class="pt-5">
        <div class="grid grid-cols-2">
          <label>Нет аккаунта?</label>
          <router-link to="/register" class="text-indigo-500">Зарегистрироваться</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'firebase/compat/auth';
import {signIn} from "@/store/userStore";
export default {
  name: "AuthorizationView",

  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    async login(event) {
      event.preventDefault();
      try{
        signIn(this.email, this.password)
        this.$router.push('/');
      } catch (error){
        console.log(error)
      }

    },
  },
}
</script>
