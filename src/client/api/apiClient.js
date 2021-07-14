import axios from "axios";

const BASE_URL = "https://api.citydata.kg/api";

const request = axios.create({
    baseURL:BASE_URL,
    responseType:"json"
})

const common = {
    indicators:()=>request.get('/dashboard-pages/indicators'),
}

const safetyPage= {
    get:()=>request.get("/safety-page")
}
const healthPage = {
    get:()=>request.get("/health-page")
}
const ecologyPage = {
    get:()=>request.get("/ecology-page")
}

const administration = {
    get:()=>request.get("/administration-page")
}
export const apiClient = {
    common ,
    safetyPage,
    healthPage,
    ecologyPage,
    administration
}