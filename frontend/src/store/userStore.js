import { defineStore } from 'pinia'

import 'firebase/compat/auth';
import {firebaseApp} from "../../firebaseConfig";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getRequest} from "@/helpers/requests";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
        isPanelDataLoading: false,
        exchanges: [],
        packages: [],
    }),
    getters: {
        isLoggedIn: (state) => state.user !== null,
    },
    actions: {
        setUser(user) {
            this.user = user
            //localStorage.setItem('user', JSON.stringify(this.user))
        },
        clearUser() {
            this.user = null
            //localStorage.removeItem('user');
        },
    },
})

export async function signIn(email, password) {
    try {
        const auth = getAuth(firebaseApp);
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error) {
        console.log("Ошибка авторизации");
        throw error;
    }
}

export function logOut() {
    const userStore = useUserStore()
    const auth = getAuth(firebaseApp);
    signOut(auth)
        .then(() => {
            userStore.clearUser()
            console.log("Пользователь вышел из аккаунта");
        })
        .catch((error) => {
            console.log("Ошибка при выходе из аккаунта:", error);
            throw error;
        });
}

export async function authStateChangedHandler() {
    const userStore = useUserStore()
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, async (user) => {
        //console.log(user)
        if (user) {
            console.log("Пользователь авторизован")
            userStore.setUser(user)
            await fetchAndSaveUserPanelInfo()
            //console.log(userStore.user)
        } else {
            console.log("Пользователь не авторизован");
            userStore.clearUser()
            //console.log(userStore.user)
        }
    });
}


export async function fetchAndSaveUserPanelInfo() {
    const userStore = useUserStore()
    userStore.isPanelDataLoading = true

    try {
        let response = await getRequest('/getparamsforpanel', {})
        userStore.exchanges = response.data.exchNames
        userStore.packages = response.data.packages
    } catch (error) {
        throw error.response.status
    }

    userStore.isPanelDataLoading = false
}