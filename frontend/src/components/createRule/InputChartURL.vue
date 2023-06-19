<template>
  <div class="flex flex-col justify-center items-center space-y-4 ">
    <input class="border-2" type="text" v-model="inputValue" placeholder="Введите текст">
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
    >Обработать ссылку</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleClick() {
      // Обработка нажатия кнопки
      console.log('Нажата кнопка');
    },
  },
};
</script>
