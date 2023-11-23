import React, { useContext, useEffect, useRef, useState } from 'react';
import {AppContext} from '../../context/Context';
import './modal.scss'




const Modal = ({children})=>{
    
    const context = useContext(AppContext);
    const {isModalOpen, setIsModalOpen} = context;

    const modalRef = useRef();

    const checkModalClick=()=>{
        console.log(modalRef.current);
    }

    console.log('W modalu' + isModalOpen);
    
    return(
        <div ref={modalRef} onClick={checkModalClick} className={isModalOpen ? 'modal modal--active' : 'modal'}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}


export default Modal;