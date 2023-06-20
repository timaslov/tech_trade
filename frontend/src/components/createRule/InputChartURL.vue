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
      <label> https://www.tradingview.com/chart/Y0qHLrDY/?symbol=BINANCE%3ABNBUSDT.P </label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="chartLink"></textarea>
      <button
          v-if="isButtonVisible"
          @click="handleClick"
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
      >Обработать ссылку</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      chartLink: '',
      responseData: {},
      isButtonVisible: true,
    };
  },
  methods: {
    async handleClick() {
      let response
      let body = {url: this.chartLink}
      try {
        response = await axios.post(
            "http://178.154.221.39:80/testhook", body)
        this.responseData = response.data
        this.$emit('url_handle_success', this.responseData);
        this.hideButton()
      } catch(error)
      {
        throw error.response.status
      }
      console.log(this.responseData)
    },

    hideButton() {
      this.isButtonVisible = false
    }

  },
};
</script>
