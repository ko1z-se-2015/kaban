import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import AuthorizationStore from '../stores/AuthorizationStore'
import {observer} from "mobx-react-lite";
import '../styles/Auth.css';
import Input from "../components/Input";

const Authorization = observer(() => {
    const state = useLocation();
    let {isReg} = state.state;

    useEffect(()=>{
        AuthorizationStore.editModel({isReg:isReg})
    },[])

    const inputs = ()=>{
        if(AuthorizationStore.model.isReg){
             return(
                 <div className="reg-model">
                     <Input label="Введите имя" />
                     <Input label="Введите фамилию"/>
                     <Input label="Введите отчество"/>
                     <Input label="Введите электронную почту"/>
                     <Input label="Введите номер телефона" />
                     <Input label="Введите пароль" />
                     <Input label="Введите подвердите пароль" />
                 </div>
             )
        }else{
            return(
                <div className="sign-model">
                       dsada
                </div>
            )
        }
    }

    return (
        <div className="to-model-win">
            {inputs()}
        </div>
    );
});

export default Authorization;