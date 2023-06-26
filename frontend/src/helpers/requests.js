import axios from "axios";
import {useUserStore} from "@/store/userStore";

export async function fetchUserPanelInfo() {
    try {
        let response = await getRequest('/getparamsforpanel', {})
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

    try {
        return await axios.get(url, config)
    } catch(error) {
        throw error
    }
}

export async function postRequest(path, parameters, body) {
    const userStore = useUserStore()
    const url = import.meta.env.VITE_BASE_URL + path
    const token = userStore.user ? userStore.user.stsTokenManager.accessToken : ''
    const config = {
        headers: {Authorization: `Bearer ${token}`},
        params: parameters}

    try {
        return await axios.post(url, body, config)
    } catch(error) {
        throw error
    }
}