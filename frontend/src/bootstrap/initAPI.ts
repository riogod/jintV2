import {stores} from "../store";

export const initAPI = async () => {
    await stores.app.getFeatures();
}