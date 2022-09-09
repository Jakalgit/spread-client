import React, {useState} from 'react';
import style_css from "../css/pages/Guarantee.module.css"
import RequestButton from "../components/RequestButton";
import {Flip, Fade, Bounce} from "react-reveal"
import {useNavigate} from "react-router-dom";
import {MEETING_ROUTE} from "../utils/util";
import Modal from "../components/Modal";

const Guarantee = () => {

    document.title = 'Гарантия'

    const [startModal, setStart] = useState(false)

    const navigate = useNavigate()

    const setStartModal = (value) => {
        setStart(value)
    }

    return (
        <div>
            <Flip top>
                <h1 className={style_css.info}>Мы предоставляем гарантию на работу
                    способа <p className={style_css.mont} style={{color: "#F57F17"}}>3 недели</p> с момента покупки.
                </h1>
            </Flip>
            <div className="container">
                <div className="row">
                    <div className={style_css.block}>
                        <Fade top>
                            <h1 className={style_css.head}>Что подразумивает гарантия?</h1>
                        </Fade>
                        <Fade>
                            <h2 className={style_css.text}>Если вдруг один из сервисов, который используется в схеме, перестаёт
                                работать, то мы возвращаем всю сумму покупки независимо от того,
                                сколько вы успели заработать.
                            </h2>
                        </Fade>
                        <Fade top>
                            <h1 className={style_css.head}>Почему именно <p className={style_css.mont}>3</p> недели?</h1>
                        </Fade>
                        <Fade>
                            <h2 className={style_css.text}>За <p className={style_css.mont}>3</p> недели, имея оборотный капитал от <p
                                className={style_css.mont}>250 000 ₽</p>, можно полность окупить
                                способ и успеть выйти в прибыль. Да, если ваш оборотный капитал
                                состовляет <p className={style_css.mont}>~20 000 ₽</p>, то этот способ врятли вам подойдёт.
                            </h2>
                        </Fade>
                        <Fade top>
                            <h1 className={style_css.head}>На что распространяется гарантия?</h1>
                        </Fade>
                        <Fade>
                            <h2 className={style_css.text}>Гарантия распростоняется на случаи в которых способ перестал работать
                                независимо от вас, например сервис Korona Pay перестал работь на
                                территории РФ. Допустим у вас перестал работать интернет или вы
                                по невнимательности обернули деньги в тот момент когда доходность
                                отрицательная - на такие случаи гарантия не распространяется.
                            </h2>
                        </Fade>
                    </div>
                    <Bounce>
                        <p onClick={() => {window.scrollTo(0, 0); setTimeout(() => {navigate(MEETING_ROUTE)}, 600)}}
                            className={style_css.buy + ' col-xxl-4 offset-xxl-4 col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 ' +
                            'col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-6 offset-3'}>
                            Как проходит покупка?
                        </p>
                    </Bounce>
                    <RequestButton setStartModal={(value) => setStartModal(value)} />
                    <Modal start={startModal} setStartModal={(value) => setStartModal(value)} />
                </div>
            </div>
        </div>
    );
};

export default Guarantee;