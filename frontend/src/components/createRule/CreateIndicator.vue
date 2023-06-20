<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <label>Индикаторы на чарте</label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="chartData.indicators"></textarea>

      <label>Значения индикаторов</label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="chartData.plots"></textarea>

      <label>Создайте индикатор с кодом ниже</label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="chartData.res_code"></textarea>

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
      >Индикатор создан</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateIndicator",

  data() {
    return {
      isButtonVisible: true,
    };
  },

  props: {
    chartData: Object,
  },

  methods: {
    async handleClick() {
      this.$emit('chart_created', this.responseData);
      this.hideButton()
    },

    hideButton(){
      this.isButtonVisible = false
    }

  },
}
</script>

<style scoped>

</style>