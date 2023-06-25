<template>
  <button
      :class="['logic_element',
      {'bg-green-500': label === '(' ||
                      label === ')' ||
                      label === 'AND' ||
                      label === 'OR' }]"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: "LogicElement",

  props: {
    label: String,
  },

  data() {
    return {

    }
  },

}
</script>
