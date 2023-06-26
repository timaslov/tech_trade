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
import {showSpinner, hideSpinner} from "@/helpers/mySpinner";
import {postRequest} from "@/helpers/requests";
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
      this.spinner = showSpinner('spinner-target')

      try {
        let response = await postRequest('/testhook', {}, { url: this.chartLink })
        this.$emit('url_handle_success', response.data);
        this.hideButton()
      } catch (error) {
        console.log('Ошибка ', error.response.status)
      }

      hideSpinner(this.spinner);
    },

    hideButton() {
      this.isButtonVisible = false
    },

  },
};
</script>
