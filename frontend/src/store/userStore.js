import { defineStore } from 'pinia'

import 'firebase/compat/auth';
import {firebaseApp} from "../../firebaseConfig";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {fetchUserPanelInfo} from "@/helpers/requests";

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
            //localStorage.setItem('user', JSON.stringify(this.user))
        },
        clearUser() {
            this.user = null
            //localStorage.removeItem('user');
        },
    },
})

export function signIn(email, password) {
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                try {
                    await fetchUserPanelInfo()
                }catch(error)
                {
                    console.log('Не удалось загрузить информацию для панели')
                    throw error;
                }
            } else
                console.log("Почта не подтверждена");
        })
        .catch((error) => {
            console.log("Ошибка авторизации", error);
            throw error;
        });
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

export function authStateChangedHandler() {
    const userStore = useUserStore()
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
        //console.log(user)
        if (user) {
            console.log("Пользователь авторизован")
            userStore.setUser(user)
            //console.log(userStore.user)
        } else {
            console.log("Пользователь не авторизован");
            userStore.clearUser()
            //console.log(userStore.user)
        }
    });
}