<template>
  <div class="mt-10 flex flex-col justify-center items-center">
    <div class=" w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">

      <h1 class="text-center text-xl"> Создание атомарного правила </h1>

      <div class="grid grid-cols-4 gap-4">
        <select class="border-2 rounded-md" v-model="selectedPlot1">
          <option v-for="plot in this.plots" :key="plot" :value="plot">
            {{ plot }}
          </option>
        </select>

        <select class="border-2 rounded-md" v-model="selectedOperator">
          <option v-for="operator in this.operators" :key="operator" :value="operator">
            {{ operator }}
          </option>
        </select>

        <select class="border-2 rounded-md" v-model="selectedPlot2">
          <option v-for="plot in this.plots" :key="plot" :value="plot">
            {{ plot }}
          </option>
          <option> {{myValueName}} </option>
        </select>

        <button @click="handleClick" class="blue_gradient_button"> Добавить </button>
      </div>

      <div v-if="selectedPlot2 === myValueName" class="grid grid-cols-4 gap-4">
        <div></div>
        <div></div>
        <input v-model="myValueInput">
        <div></div>
      </div>

      <label v-if="isErrorShown" class="text-red-500"> Некорректные значения </label>

    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAtomicRule",

  data() {
    return {
      plots: ['plot1', 'plot2', 'plot3', 'plot4', 'plot5', 'plot6'],
      operators: ['>', '<', '=', '!=', '>=', '<='],
      selectedPlot1: '',
      selectedPlot2: '',
      selectedOperator: '',
      resExp: '',
      isErrorShown: false,
      myValueName: 'Свое значение',
      myValueInput: '',
    };
  },

  methods: {
    handleClick() {
      if (this.selectedPlot1 === '' || this.selectedPlot2 === '' || this.selectedOperator === ''
          || this.selectedPlot1 === this.selectedPlot2) {
        this.showError()
      }
      else {
        if (this.selectedPlot2 === this.myValueName) {
          if (!isNaN(this.myValueInput) && this.myValueInput !== '') {
            this.resExp = this.selectedPlot1 + this.selectedOperator + this.myValueInput
            this.$emit('atomic_rule_created', this.resExp);
          }
          else
            this.showError()
        }
        else {
          this.resExp = this.selectedPlot1 + this.selectedOperator + this.selectedPlot2
          this.$emit('atomic_rule_created', this.resExp);
        }
      }
    },

    showError() {
      this.isErrorShown = true
      setTimeout(() => {
        this.isErrorShown = false
      }, 2000);
    }

  },
}
</script>
