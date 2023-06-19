<template>
  <h1 class="text-center text-xl m-10"> Создание правила </h1>
  <input-chart-u-r-l/>
</template>

<script>
import InputChartURL from "@/components/createRule/InputChartURL.vue";
export default {
  name: "CreateRule",
  components: {InputChartURL}
}
</script>