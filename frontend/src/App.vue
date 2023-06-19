<template>
  <nav-bar/>

  <div class="pb-[80px]">
    <router-view/>
  </div>
</template>

<script>
import navBar from "@/components/NavBar.vue";
import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {NavBar}
})

</script>