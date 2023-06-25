import axios from "axios";
import {useUserStore} from "@/store/userStore";

export async function fetchUserPanelInfo() {
    const userStore = useUserStore()
    try {
        const response = await axios.get('http://178.154.221.39:80/getparamsforpanel', {
            params: {
                userId: userStore.user.uid,
            }
        })
        return response.data
    } catch (error) {
        throw error.response.status
    }
}

export async function getRequest(path, parameters) {
    const userStore = useUserStore()
    const token = userStore.user ? userStore.user.stsTokenManager.accessToken : ''
    const url = import.meta.env.VITE_BASE_URL + path
    const config = {headers: {Authorization: `Bearer ${token}`},
                    params: parameters}

    axios.get(url, config)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
            throw error
        })
}

export async function postRequest(path, parameters, body) {
    const userStore = useUserStore()
    const token = userStore.user ? userStore.user.stsTokenManager.accessToken : ''
    const url = import.meta.env.VITE_BASE_URL + path
    const config = {headers: {Authorization: `Bearer ${token}`},
        params: parameters}

    axios.post(url, body, config)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
            throw error
        })
}