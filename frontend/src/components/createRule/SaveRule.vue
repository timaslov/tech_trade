<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <div id="spinner-target" class="spinner"></div>

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
  name: "SaveRule",

  data() {
    return {
      spinner: null,
    };
  },

  props: {
    slot: 0,
    plots: {type: Array, required: true,},
  },

  methods: {
    async handleClick() {
      this.spinner = showSpinner('spinner-target')

      const userStore = useUserStore()
      let response
      let body = {userid: userStore.user.uid, slotnumber: this.slot, plots: toRaw(this.plots)}
      try {
        response = await axios.post(
            "http://178.154.221.39:80/saveplots", body)
        console.log(response.data)
        this.$emit('save_rule_success');

        setTimeout(() => {
          this.$router.push('/my_life_my_rules');
        }, 1000);
      } catch(error)
      {
        console.log(response.data)
        throw error.response.status
      }

      hideSpinner(this.spinner);
    },

  },
}
</script>
