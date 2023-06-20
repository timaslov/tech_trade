<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <label>ID пользователя</label>
      <input class="border-2 w-2/3 rounded-md" placeholder="User ID" v-model="userID">

      <label>Выберите слот</label>
      <select class="border-2 w-2/3 rounded-md" v-model="selectedSlot">
        <option v-for="slot in this.slots" :key="slot" :value="slot">
          {{ slot }}
        </option>
      </select>

      <button
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
import {useUserStore} from "@/store/userStore";
export default {
  name: "CreateAlertCode",

  data() {
    return {
      userID : "",
      slots : [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedSlot: Number,
      alertData: {},

    };
  },

  props: {
    chartData: Object,
  },

  created() {
    const userStore = useUserStore()
    console.log('user: ', userStore.user)
    this.userID = userStore.user.uid
    this.selectedSlot = this.slots[0]
  },

  methods: {
    handleClick() {
      this.alertData = {
        userid: this.userID,
        slotnumber: this.selectedSlot,
        code: this.chartData.res_code,
        plots: this.chartData.plots,
      }
      this.$emit('alert_code_created', this.alertData);
    },
  },

}
</script>

<style scoped>

</style>