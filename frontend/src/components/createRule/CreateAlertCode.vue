<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <label>ID пользователя</label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL"></textarea>

      <label>Выберите слот</label>
      <textarea class="border-2 w-2/3 rounded-md" placeholder="URL"></textarea>

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
export default {
  name: "CreateAlertCode"
}
</script>

<style scoped>

</style>