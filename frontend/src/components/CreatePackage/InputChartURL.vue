<template>
  <div class="flex flex-col justify-center items-center">
    <div class="
      w-2/3
      p-5
      flex
      flex-col
      space-y-4
      justify-center
      items-center
      bg-gradient-to-r from-purple-100 to-blue-100
      rounded-lg
      border-2
      border-indigo-300
    "
    >
      <label> Введите ссылку на чарт </label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="chartLink"></textarea>
      <div id="spinner-target" class="spinner"></div>
      <button
          v-if="isButtonVisible"
          @click="handleClick"
          class="blue_gradient_button"
      >Обработать ссылку</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {showSpinner, hideSpinner} from "@/helpers/mySpinner";
import {useUserStore} from "@/store/userStore";
export default {
  data() {
    return {
      chartLink: 'https://www.tradingview.com/chart/Y0qHLrDY/?symbol=BINANCE%3ABNBUSDT.P',
      isButtonVisible: true,
      spinner: null,
    };
  },

  methods: {
    async handleClick() {
      const userStore = useUserStore()
      this.spinner = showSpinner('spinner-target')
      console.log(userStore.user.stsTokenManager.accessToken)
      let response
      let body = {url: this.chartLink}
      let token = userStore.user.stsTokenManager.accessToken
      let config = {headers: {Authorization: `Bearer ${token}`}}
      try {
        response = await axios.post(
            "http://178.154.221.39:80/testhook", body, config)
        this.$emit('url_handle_success', response.data);
        this.hideButton()
      } catch(error)
      {
        throw error.response.status
      }

      hideSpinner(this.spinner);
    },

    hideButton() {
      this.isButtonVisible = false
    },

  },
};
</script>
