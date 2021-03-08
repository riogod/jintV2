import {api} from "../api";


export const getAppSettings = () => {
    return api.get('/app').then( res => res.data.body)
}