import React, { useContext, useEffect, useRef, useState } from 'react';
import {AppContext} from '../../context/Context';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';

import './modal.scss'

const Modal = ({children})=>{
    
    const context = useContext(AppContext);
    const {isModalOpen, setIsModalOpen,setFormType,formType} = context;

    const modalRef = useRef();

    const renderContent=()=>{
        if(formType === 'login'){
            return (<LoginForm/>);
        }else if(formType === 'register'){
            return (<RegisterForm/>);
        }else{
            return(<p>Ups coś poszło nie tak</p>);
        }
    }

    const checkModalClick=({target})=>{
        console.log(target)
        if(target.classList.contains('modal')){
            setIsModalOpen(false);
            setFormType(null);
        }
    }
    
    const handleModalClose=()=>{
        setIsModalOpen(false);
        setFormType(null);
    }

    return(
        <div onClick={checkModalClick} className={isModalOpen ? 'modal modal--active' : 'modal'}>
            <div ref={modalRef} className="modal__content">
                <div className='modal__close' onClick={handleModalClose}>
                    <svg className="modal__close-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                    </svg>
                </div>
                {renderContent()}
            </div>
        </div>
    )
}

export default Modal;