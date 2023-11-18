import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://api-xxxfap.ddns.net'

    return {
        provide: { 
            axios: axios
        },
    }
})