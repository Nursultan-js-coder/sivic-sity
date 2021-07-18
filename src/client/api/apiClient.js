import axios from "axios";

const BASE_URL = "https://api.citydata.kg/api";
const local_url = "http://localhost:8080"

const localRequest = axios.create({
    baseURL:local_url,
    responseType:"json"
})

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
    get:()=>request.get("/health-page"),
    coordinates:()=>request.get("/health-page/coordinates"),
    coordinatesLocal:async ()=>localRequest.get("/coordinates"),
    occasions:()=>request.get("/health-page/fin-occasions")
}
const ecologyPage = {
    get:()=>request.get("/ecology-page"),
    coordinates:()=>request.get("/ecology-page/coordinates"),
    coordinatesLocal:async ()=> {
        let response = localRequest.get("/ecology-page-coordinates");
        console.log("response from localrequest: ",response);
        return response;
    }

}

const administration = {
    get:()=>request.get("/administration-page"),
    coordinates:()=>request.get("/administration-page/coordinates"),
    institutionTypes:()=>request.get("/administration-page/institution-types")
}
export const apiClient = {
    common ,
    safetyPage,
    healthPage,
    ecologyPage,
    administration
}