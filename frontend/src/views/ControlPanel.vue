<template>
  <div class="mt-10 flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">

      <h1 class="text-center text-xl"> Панель управления </h1>

      <div>
        <h1 class="text-center text-xl"> Подключенные биржи </h1>
        <ul class="ml-2">
          <li v-for="exchange in exchanges" :key="exchange"> {{exchange.name}} </li>
        </ul>
        <router-link to="/add_exchange">
          <button class="blue_gradient_button"> Добавить </button>
        </router-link>
      </div>

      <div>
        <h1 class="text-center text-xl"> Сохраненные пакеты </h1>
        <ul class="ml-2">
          <li v-for="pack in packages" :key="pack"> {{pack.name}} </li>
        </ul>
        <router-link to="/create_package">
          <button class="blue_gradient_button"> Добавить </button>
        </router-link>
      </div>

      <div>
        <h1 class="text-center text-xl"> Сформированная логика </h1>
        <ul class="ml-2">
          <li v-for="logic in logics" :key="logic"> {{logic.name}} </li>
        </ul>
        <router-link to="/create_logic">
        <button class="blue_gradient_button"> Добавить </button>
        </router-link>
      </div>

      <div>
        <h1 class="text-center text-xl"> Торговые правила </h1>
        <ul class="ml-2">
          <li v-for="tradingRule in tradingRules" :key="tradingRule"> {{tradingRule.name}} </li>
        </ul>
        <button class="blue_gradient_button"> Добавить </button>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "ControlPanel",

  data() {
    return {
      exchanges: [{name: 'Binance'}, {name: 'Bybit'}, {name: 'Exmo'}],
      packages: [{name: 'Мега-пакет'}, {name: 'Лютый'}, {name: 'Парадный'}],
      logics: [{name: 'Победная'}, {name: 'Убийственная'}, ],
      tradingRules: [],
    };
  },

  components: {},


}
</script>
