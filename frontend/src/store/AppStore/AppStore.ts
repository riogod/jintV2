import {action, makeObservable, observable} from "mobx";
import {IAppStore} from "./interfaces";
import BaseStore from "../BaseStore/BaseStore";

export default class AppStore extends BaseStore implements IAppStore {
    loading = false;

    get isLoading() {
        return this.loading
    }


    constructor() {
        super();
        makeObservable(this, {
            loading: observable,
            setLoading: action.bound
        });
    }

    setLoading(value: boolean) {
        this.loading = value;
    }
}

