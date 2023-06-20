<template>
  <div class="mt-10 flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">

      <h1 class="text-xl"> Регистрация </h1>

      <div class="grid grid-cols-2">
        <label>email</label>
        <input type="text" v-model="email" placeholder="Username" required />
      </div>

      <div class="grid grid-cols-2">
        <label>password</label>
        <input type="password" v-model="password" placeholder="Password" required />
      </div>

      <button
          @click="register"
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
      >Зарегистрироваться</button>

      <div class="pt-5">
        <div class="grid grid-cols-2">
          <label>Есть аккаунт?</label>
          <router-link to="/signin" class="text-indigo-500 px-2">Войти</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {firebaseApp} from "../../firebaseConfig";
export default {
  name: "RegistrationView",

  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    register(event) {
      event.preventDefault();

      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Пользователь успешно зарегистрирован", user);

            sendEmailVerification(user)
                .then(() => {
                  console.log("Письмо для подтверждения отправлено");
                })
                .catch((error) => {
                  console.log("Ошибка отправки письма для подтверждения", error);
                });
          })
          .catch((error) => {
            console.log("Ошибка регистрации", error);
          });
    },
  },
}
</script>
