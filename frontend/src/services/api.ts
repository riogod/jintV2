import axios from "axios";
import {API_PREFIX} from "../bootstrap/config/constants";


const api = axios.create({
    baseURL: API_PREFIX,
});

api.interceptors.request.use((req) => {
    return {
        ...req,
        baseURL: API_PREFIX,
    };
});

export { api };