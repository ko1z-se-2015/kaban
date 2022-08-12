import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import AuthorizationStore from '../stores/AuthorizationStore'
import {observer} from "mobx-react-lite";
import '../styles/Auth.css';
import Input from "../components/Input";
import Button from "../components/Button";

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
                     <Input type="password" label="Введите пароль" />
                     <Input type="password" label="Введите подвердите пароль" />
                     <Button label="Регистрация"/>
                     <div className="to-sign-in">
                         <div className="text-acc">У вас уже есть аккаунт?</div>
                         <div className="text-sign-in" onClick={()=>{AuthorizationStore.editModel({isReg:false})}}>Войти</div>
                     </div>
                 </div>
             )
        }else{
            return(
                <div className="sign-model">
                    <Input label="Введите электронную почту"/>
                    <Input type="password" label="Введите пароль" />
                    <Button label="Войти"/>
                    <div className="to-sign-in">
                        <div className="text-acc">У вас нет аккаунта?</div>
                        <div className="text-sign-in" onClick={()=>{AuthorizationStore.editModel({isReg:true})}}>Регистрация</div>
                    </div>
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