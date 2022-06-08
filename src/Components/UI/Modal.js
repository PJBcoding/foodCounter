import React from 'react'
import styles from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    const backdropstyle = props.anim === true ? styles.backdropClose : '';
    return (<div className={`${styles.backdrop} ${backdropstyle}`} onClick={props.onClose}> </div>)
}

const ModalOverlay = (props) => {
    const modalcloseStyle = props.anim === true ? styles.modalclose : '';
    return (
        <div className={`${styles.modal} ${modalcloseStyle}`} >
            <div className={styles.content}>{props.children}</div>
        </div >
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} anim={props.anim} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay anim={props.anim}> {props.children} </ModalOverlay>, portalElement)}
        </Fragment>
    )
};

export default Modal;