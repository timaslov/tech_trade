<template>
  <div class="mt-10 flex flex-col justify-center items-center">
    <div class="w-2/3 p-5 flex flex-col space-y-4 justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-indigo-300">
      <h1 class="text-xl"> Email успешно подтвержден </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailApproved",

  mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 3000); //
  },
}
</script>