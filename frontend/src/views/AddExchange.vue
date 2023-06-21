<template>
  <div class="mt-10 flex flex-col justify-center items-center">
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
      <label> Выберите биржу</label>
      <select class="border-2 w-2/3 rounded-md" v-model="selectedExchange">
        <option v-for="exchange in this.Exchanges" :key="exchange" :value="exchange">
          {{ exchange.name }}
        </option>
      </select>

      <label> Укажите API key </label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="API key" v-model="apiKey"></textarea>

      <label> Укажите secret key </label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="API key" v-model="secretKey"></textarea>

      <button
          @click="handleClick"
          class="blue_gradient_button"
      >Привязать аккаунт</button>
    </div>
  </div>
</template>

<script>
import {hideSpinner, showSpinner} from "@/helpers/mySpinner";
import {useUserStore} from "@/store/userStore";
import axios from "axios";

export default {
  name: "AddExchange",

  data() {
    return {
      selectedExchange: {},
      Exchanges: [{name:'Binance', id:1}, {name:'Bybit'}, {name:'Bitget'}, {name:'Mexc'}, {name:'Kucoin'}, {name:'Huobi'}],
      apiKey: '',
      secretKey: '',
    };
  },

  methods: {
    async handleClick() {
      this.spinner = showSpinner('spinner-target')

      const userStore = useUserStore()

      let response
      //exchanges хранить в базе и сначала получать доступные, потом выводить не подключенные и передавать id
      let body = {
        userid: userStore.user.uid,
        exchange: this.selectedExchange.name,
        key: this.apiKey,
        secret: this.secretKey
      }
      console.log(body)
      try {
        response = await axios.post(
            "http://178.154.221.39:80/exchange_connect", body)

      } catch(error)
      {
        throw error.response.status
      }

      hideSpinner(this.spinner);
    },


  },
}
</script>
