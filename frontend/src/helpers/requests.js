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
