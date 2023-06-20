<template>
  <div class="flex flex-col space-y-10">
    <h1 class="text-center text-xl mt-10"> Создание правила </h1>
    <input-chart-u-r-l @url_handle_success="UrlFormSuccessHandler"/>
    <CreateIndicator @chart_created="ChartCreatedHandler" v-if="UrlFormSuccess" :chart-data="UrlFormData"/>
    <CreateAlertCode @alert_code_created="AlertCodeCreatedHandler" :chart-data="UrlFormData" v-if="ChartCreated"/>
    <CreateAlert :alert-code="AlertCode" v-if="AlertCodeCreated"/>
  </div>
</template>

<script>
import InputChartURL from "@/components/createRule/InputChartURL.vue";
import CreateIndicator from "@/components/createRule/CreateIndicator.vue";
import CreateAlertCode from "@/components/createRule/CreateAlertCode.vue";
import CreateAlert from "@/components/createRule/CreateAlert.vue";
export default {
  name: "CreateRule",

  components: {InputChartURL, CreateIndicator, CreateAlertCode, CreateAlert},

  data() {
    return{
      UrlFormSuccess: false,
      UrlFormData: {},
      ChartCreated: false,
      AlertCode: {},
      AlertCodeCreated: false,
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

    AlertCodeCreatedHandler(data) {
      this.AlertCode = data
      this.AlertCodeCreated = true
    },

  },
}
</script>