import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://fikfuck.de:8000/'

    return {
        provide: { 
            axios: axios
        },
    }
})