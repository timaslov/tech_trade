<template>
  <div class="mt-10 flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <h1 class="text-center text-xl"> Мои правила </h1>

    </div>
  </div>
</template>

<script>
import RuleLI from "@/components/RuleLI.vue";
export default {
  name: "MyRules",

  components: {RuleLI},

  created() {

  },
}
</script>
