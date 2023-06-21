.navbar__menu {
display: flex;
align-items: center;
justify-content: center;
background-color: #555;
padding: 1rem;
color: white;
}

<template>
  <nav>
    <ul class="h-[70px] flex items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white">

      <li class="navbar__item h-full">
        <router-link to="/" class="navbar__link h-full mt-3.5">
          <button>
            Главная
          </button>
        </router-link>
      </li>

      <li class="navbar__item h-full">
        <a href="#" class="navbar__link h-full mt-3.5" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          Инструкция по настройке
          <ul v-show="dropdownOpen" class="navbar__submenu border-2 border-indigo-400">
            <li>Как подключить аккаунт биржи</li>
            <li>Как подключить существующую стратегию</li>
            <li>Как создать правило</li>
          </ul>
        </a>
      </li>

      <li class="navbar__item h-full">
        <router-link to="/" class="navbar__link h-full mt-3.5">
          <button>
            Доступные биржи
          </button>
        </router-link>
      </li>

      <li class="navbar__item h-full">
        <a href="#" class="navbar__link h-full mt-3.5" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          О нас
          <ul v-show="dropdownOpen" class="navbar__submenu border-2 border-indigo-400">
            <li>Описание</li>
            <li>Сотрудничество</li>
            <li>Техническая поддержка</li>
          </ul>
        </a>
      </li>

      <li class="navbar__item h-full">
        <a href="#" class="navbar__link h-full mt-3.5" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          Профиль
          <ul v-show="dropdownOpen" class="navbar__submenu border-2 border-indigo-400">
            <router-link to="/signin"><li>Войти</li></router-link>
            <router-link to="/register"><li>Зарегистрироваться</li></router-link>
            <li>Подключить биржу</li>
            <li>Подключить стратегию</li>
            <router-link to="/my_life_my_rules"><li>Мои правила</li></router-link>
            <router-link to="/create_rule"><li>Создать правило</li></router-link>
            <li>Управление правилами</li>
            <li>Смена пароля</li>
            <li @click="logoutButton">Выйти</li>
          </ul>
        </a>
      </li>

    </ul>
  </nav>
</template>

<script>
import {useUserStore} from "@/store/userStore";
export default {
  name: "NavBar",

  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    openDropdown() {
      this.dropdownOpen = true;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    logoutButton() {
      const userStore = useUserStore()
      userStore.clearUser()
      console.log(userStore.user)
    },
  },
};
</script>

<style>
.navbar__item {
  display: inline-block;
  position: relative;
}

.navbar__link {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
}

.navbar__submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  background-color: #ffffff;
  padding: 0.5rem;
}

.navbar__submenu li{
  padding: 0.5rem;
  color: black
}

.navbar__submenu li:hover{
  color: #002eff;
}

.navbar__link:hover .navbar__submenu {
  display: block;
}
</style>
