import React, {useState} from 'react';
import RequestButton from "../components/RequestButton";
import style_css from "../css/pages/Meeting.module.css"
import Modal from "../components/Modal";
import {Fade} from "react-reveal"

const Meeting = () => {

    document.title = 'Встреча'

    const [startModal, setStart] = useState(false)

    const setStartModal = (value) => {
        setStart(value)
    }

    return (
        <div className={style_css.work + ' container'}>
            <div className="row">
                <div className={style_css.block}>
                    <Fade top>
                        <h1 className={style_css.head}>Встреча</h1>
                    </Fade>
                    <Fade>
                        <h2 className={style_css.text}>Встреча проходит в бизнес-центре в нашем помещении, находится в г. Москва,
                            более
                            точный адрес будет если вы действительно заинтересованны в покупке. Мы расскажем
                            как пользоваться схемой и при вас сделаем один оборот. Если вас всё устраивает, то вы
                            оплачиваете схему. Все вопросы по использованию, если они останутся, вы сможете задать и после
                            покупки.
                        </h2>
                    </Fade>
                </div>
                <RequestButton setStartModal={(value) => setStartModal(value)} />
                <Modal start={startModal} setStartModal={(value) => setStartModal(value)} />
            </div>
        </div>
    );
};

export default Meeting;