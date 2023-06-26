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
import {showSpinner, hideSpinner} from "@/helpers/mySpinner";
import {getRequest} from "@/helpers/requests";
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

      setTimeout(async () => {
        try {
          let parameters = {
            slot: this.slot
          }
          let response = await getRequest('/getinds', parameters)

          if (response.data.plots === null)
            this.$emit('alert_sent_error');
          else
            this.$emit('alert_sent', response.data.plots.split(","));

        } catch (error) {
          console.log('Ошибка ', error.response.status)
          this.showButton()
        }
        hideSpinner(this.spinner);
      }, 1000);
    },

    hideButton(){
      this.isButtonVisible = false
    },

    showButton(){
      this.isButtonVisible = true
    },

  },
}
</script>
