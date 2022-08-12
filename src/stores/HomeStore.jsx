import {makeAutoObservable} from "mobx";


class HomeStore{
    constructor() {
        makeAutoObservable(this)
    }
}