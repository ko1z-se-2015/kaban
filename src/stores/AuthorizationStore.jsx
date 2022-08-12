import {action, makeAutoObservable} from "mobx";


class AuthorizationStore{
    model;

    editModel=(obj)=>{
        console.log("пытаюсь")
        this.model = {...this.model,...obj}
    }

    constructor() {
        this.model = {
            isReg: null,
            firstName: "",
            secondName:"",
            mail:"",
            phone:"",
            password:"",
        }
        makeAutoObservable(this,{
            editModel:action
        })
    }
}

export default new AuthorizationStore();