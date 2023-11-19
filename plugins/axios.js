import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://api.fikfuck.de'

    return {
        provide: { 
            axios: axios
        },
    }
})