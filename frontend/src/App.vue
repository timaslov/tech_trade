<template>
  <nav-bar/>

  <div class="pb-[80px]">
    <router-view/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";
import {authStateChangedHandler} from "@/store/userStore";

export default defineComponent({
  components: {NavBar},

  mounted() {
    authStateChangedHandler()
  }
})

</script>