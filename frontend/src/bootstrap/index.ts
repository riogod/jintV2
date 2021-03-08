import {initAPI} from "./initAPI";
import {stores} from "../store";

export const initBootstrap = async () => {
    stores.app.setLoading(true);
    await initAPI();

}