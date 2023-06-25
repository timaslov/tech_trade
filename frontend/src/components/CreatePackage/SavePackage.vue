<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <div id="spinner-target" class="spinner"></div>

      <label> Введите название пакета </label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="Название пакета" v-model="packageName"></textarea>
      <label class="text-red-500" v-if="nameError"> Название некорректно </label>

      <button
          @click="handleClick"
          class="blue_gradient_button"
      >Сохранить значения в базу</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {useUserStore} from "@/store/userStore";
import {showSpinner, hideSpinner} from "@/helpers/mySpinner";
import {toRaw} from "vue";
export default {
  name: "SavePackage",

  data() {
    return {
      packageName: '',
      spinner: null,
      nameError: false,
    };
  },

  props: {
    slot: 0,
    plots: {type: Array, required: true,},
  },

  methods: {
    async handleClick() {
      if (this.checkName()) {
        this.spinner = showSpinner('spinner-target')

        const userStore = useUserStore()
        let response
        let body = {userid: userStore.user.uid, slotnumber: this.slot, plots: toRaw(this.plots), name: this.packageName}
        try {
          response = await axios.post(
              "http://178.154.221.39:80/saveplots", body)
          console.log(response.data)
          this.$emit('save_package_success');

          setTimeout(() => {
            this.$router.push('/control_panel');
          }, 1000);
        } catch (error) {
          console.log(response.data)
          throw error.response.status
        }
      }
      else {
        this.nameError = true
        setTimeout(() => {
          this.nameError = false
        }, 2000);
      }
      hideSpinner(this.spinner);
    },

    checkName() {
      return this.packageName !== '';
    }

  },
}
</script>
