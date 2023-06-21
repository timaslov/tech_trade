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
      <label> Создайте алерт с кодом ниже</label>
      <textarea readonly class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="DataAlertCode"></textarea>
      <button
          v-if="isButtonVisible"
          @click="handleClick"
          class="blue_gradient_button"
      >Алерт отправлен</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {useUserStore} from "@/store/userStore";
import {showSpinner, hideSpinner} from "@/helpers/mySpinner";
export default {
  name: "CreateAlert",

  props: {
    alertCode: "",
    slot: 0,
  },

  data() {
    return {
      isButtonVisible: true,
      DataAlertCode: "",
      spinner: null,
    };
  },

  created() {
    this.DataAlertCode = this.alertCode
  },

  methods: {
    async handleClick() {
      this.spinner = showSpinner('spinner-target')
      this.hideButton()

      const userStore = useUserStore()

      setTimeout(async () => {
        let response = await axios
            .get("http://178.154.221.39:80/getinds?userId=" + userStore.user.uid + "&slot=" + this.slot)

        console.log(response.data)

        if (response.data.plots === null)
          this.$emit('alert_sent_error');
        else
          this.$emit('alert_sent', response.data.plots.split(","));
        hideSpinner(this.spinner);
      }, 1000);
    },

    hideButton(){
      this.isButtonVisible = false
    },

  },
}
</script>
