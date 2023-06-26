<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <label>ID пользователя</label>
      <input readonly class="border-2 w-2/3 rounded-md" placeholder="User ID" v-model="userID">

      <label>Выберите слот</label>
      <select class="border-2 w-2/3 rounded-md" v-model="selectedSlot">
        <option v-for="slot in this.slots" :key="slot" :value="slot">
          {{ slot }}
        </option>
      </select>

      <div id="spinner-target" class="spinner"></div>

      <button
          v-if="isButtonVisible"
          @click="handleClick"
          class="blue_gradient_button"
      >Создать код алерта</button>
    </div>
  </div>
</template>

<script>
import {useUserStore} from "@/store/userStore";
import {showSpinner, hideSpinner} from "@/helpers/mySpinner";
import {postRequest} from "@/helpers/requests";
export default {
  name: "CreateAlertCode",

  data() {
    return {
      userID : "",
      slots : [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedSlot: Number,
      alertData: {},
      isButtonVisible: true,
      spinner: null,
    };
  },

  props: {
    chartData: Object,
  },

  created() {
    const userStore = useUserStore()
    this.userID = userStore.user.uid
    this.selectedSlot = this.slots[0]
  },

  methods: {
    async handleClick() {
      this.spinner = showSpinner('spinner-target')

      try {
        let body = {
          slotnumber: this.selectedSlot,
          code: this.chartData.res_code,
          plots: this.chartData.plots.toString(),
        }
        let response = await postRequest('/createalert', {}, body)
        this.$emit('alert_code_created', response.data, this.selectedSlot);
        this.hideButton()
      } catch (error) {
        console.log('Ошибка ', error.response.status)
      }

      hideSpinner(this.spinner);
    },

    hideButton(){
      this.isButtonVisible = false
    },

  },

}
</script>

<style scoped>

</style>