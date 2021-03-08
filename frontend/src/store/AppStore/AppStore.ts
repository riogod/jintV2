import {action, makeObservable, observable} from "mobx";
import {IAppStore} from "./interfaces";
import BaseStore from "../BaseStore/BaseStore";
import {getAppSettings} from "../../services/app";

export default class AppStore extends BaseStore implements IAppStore {
    loading = false;
    features = {};

    get isLoading() {
        return this.loading
    }


    constructor() {
        super();
        makeObservable(this, {
            loading: observable,
            setLoading: action.bound,
            getFeatures: action.bound

        });
    }

    setLoading(value: boolean) {
        this.loading = value;
    }

    async getFeatures() {
       const settings = await getAppSettings();
       this.features = settings.featureToggles;

    }
}

