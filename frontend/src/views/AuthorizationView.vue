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
import {firebaseApp} from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useUserStore} from "@/store/userStore";
import {fetchUserPanelInfo} from "@/helpers/requests";
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

      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
              console.log("Успешная авторизация", user);
              const userStore = useUserStore()
              userStore.setUser(user)

              try {
                await fetchUserPanelInfo()
              }catch(error)
              {
                console.log('Не удалось загрузить информацию для панели')
              }

            } else
              console.log("Почта не подтверждена");
          })
          .catch((error) => {
            console.log("Ошибка авторизации", error);
          });
    },
  },
}
</script>
