import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import "../css/components/Modal.css"
import {createReview} from "../http/api";
import {Fade} from "react-reveal";

const Modal = (props) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [show, setShow] = useState(false)

    const closeModal = () => {
        setShow(false)
        props.setStartModal(false)
    }

    const createRequest = () => {
        if (name && number.length === 11 && number.startsWith("7")) {
            createReview(number, name).then(() => {
                setShow(true)
            })
        }
    }

    return (
        <CSSTransition
            in={props.start}
            timeout={350}
            classNames="block"
            mountOnEnter
            unmountOnExit
        >
            <div className="back block">
                <Fade top when={show}>
                    <div className="help">
                        <div className="message">
                            <h1 className="message-text">Спасибо за отклик! Мы свяжемся с вами в ближайшее время.</h1>
                        </div>
                    </div>
                </Fade>
                <div className="modal">
                    <div className="inner">
                        <div className="up_line">
                            <h1 className="text">Оставьте заявку</h1>
                            <img onClick={closeModal} src={require("../img/close.png")} alt="" className="close"/>
                        </div>
                        <div className="input-block">
                            <input value={name} onChange={(e) => setName(e.target.value)}
                                   type="text" className="input" placeholder="Введите ваше имя"/>
                            <input value={number} onChange={(e) => setNumber(e.target.value)}
                                   type="number" className="input" placeholder="Введите номер телефона +7"/>
                            <button onClick={createRequest} className="request">Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Modal;