import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
    }),
    getters: {
        isLoggedIn: (state) => state.user !== null,
    },
    actions: {
        setUser(user) {
            this.user = user
            localStorage.setItem('user', JSON.stringify(this.user))
        },
        clearUser() {
            this.user = null
            localStorage.removeItem('user');
        },
    },
})