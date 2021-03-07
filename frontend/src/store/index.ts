import {createContext} from "react";
import AppStore from "./AppStore/AppStore";


export const stores = Object.freeze({
    app: new AppStore()

});
export const storesContext = createContext(stores);

export const StoresProvider = storesContext.Provider;