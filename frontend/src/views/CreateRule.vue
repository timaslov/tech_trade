<template>
  <div class="flex flex-col space-y-10">
    <h1 class="text-center text-xl mt-10"> Создание правила </h1>
    <input-chart-u-r-l
        @url_handle_success="UrlFormSuccessHandler"
    />
    <CreateIndicator
        @chart_created="ChartCreatedHandler"
        v-if="UrlFormSuccess"
        :chart-data="UrlFormData"
    />
    <CreateAlertCode
        @alert_code_created="AlertCodeCreatedHandler"
        :chart-data="UrlFormData"
        v-if="ChartCreated"
    />
    <CreateAlert
        @alert_sent="AlertSentHandler"
        @alert_sent_error="AlertSentErrorHandler"
        :alert-code="AlertCode"
        :slot="SelectedSlot"
        v-if="AlertCodeCreated"
    />
    <SaveRule
        v-if="AlertSent"
        :slot="SelectedSlot"
        :plots="Plots"
    />
  </div>
</template>

<script>
import InputChartURL from "@/components/createRule/InputChartURL.vue";
import CreateIndicator from "@/components/createRule/CreateIndicator.vue";
import CreateAlertCode from "@/components/createRule/CreateAlertCode.vue";
import CreateAlert from "@/components/createRule/CreateAlert.vue";
import SaveRule from "@/components/createRule/SaveRule.vue";
export default {
  name: "CreateRule",

  components: {InputChartURL, CreateIndicator, CreateAlertCode, CreateAlert, SaveRule},

  data() {
    return{
      UrlFormSuccess: false,
      UrlFormData: {},
      ChartCreated: false,
      AlertCode: "",
      AlertCodeCreated: false,
      AlertSent: false,
      SelectedSlot: 0,
      Plots: [],

    }
  },

  methods:{
    UrlFormSuccessHandler(data) {
      this.UrlFormSuccess = true
      this.UrlFormData = data
      console.log(this.UrlFormData)
    },

    ChartCreatedHandler() {
      this.ChartCreated = true
    },

    AlertCodeCreatedHandler(data, slot) {
      console.log(JSON.stringify(data))
      console.log(slot)
      this.AlertCode = JSON.stringify(data)
      this.AlertCodeCreated = true
      this.SelectedSlot = slot
    },

    AlertSentHandler(data) {
      this.AlertSent = true
      this.Plots = data
      console.log('Алерт действительно отправлен')
    },

    AlertSentErrorHandler() {
      console.log('Ошибка: plots = null. Либо алерт не создан, либо uid неверный, либо slot, либо там нет plots! ')
    },

  },
}
</script>