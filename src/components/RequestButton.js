import React from 'react';
import style_css from "../css/components/RequestButton.module.css"
import {Fade} from "react-reveal"

const RequestButton = (props) => {

    const clickRequest = () => {
        props.setStartModal(true)
    }

    return (
        <Fade bottom>
            <button onClick={clickRequest}
                    className={style_css.request + ' col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 ' +
                        'col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-6 offset-3'}>
                Оставить заявку
            </button>
        </Fade>
    );
};

export default RequestButton;