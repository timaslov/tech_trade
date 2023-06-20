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
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL" v-model="DataAlertCode"></textarea>
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
      >Алерт отправлен</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAlert",

  props: {
    alertCode: Object,
  },

  data() {
    return {
      isButtonVisible: true,
      DataAlertCode: {},
    };
  },

  created() {
    this.DataAlertCode = JSON.stringify(this.alertCode)
    console.log(this.alertCode)
    console.log(this.DataAlertCode)
  },

  methods: {
    handleClick() {
      this.$emit('alert_sent');
      this.hideButton()
    },

    hideButton(){
      this.isButtonVisible = false
    }

  },
}
</script>
