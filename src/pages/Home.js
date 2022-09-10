import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import style_css from "../css/pages/Home.module.css"
import RequestButton from "../components/RequestButton";
import {Fade, Bounce, Zoom} from "react-reveal"
import {useNavigate} from "react-router-dom";
import {GUARANTEE_ROUTE} from "../utils/util";
import Modal from "../components/Modal";

const Home = () => {

    document.title = 'Описание'

    const [startModal, setStart] = useState(false)

    const navigate = useNavigate()

    const setStartModal = (value) => {
        setStart(value)
    }

    return (
        <div>
            <div className={style_css.image_block}>

            </div>
            <div className={style_css.text_block}>
                <div className="container">
                    <Row>
                        <div className="col-xxl-12 offset-xxl-0 col-xl-12 offset-xl-0 col-lg-12 offset-lg-0
                        col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-10 offset-1">
                            <Fade top>
                                <h1 className={style_css.head}>Описание способа</h1>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Большинство тех, кто находится на этом сайте знакомы со схемой,
                                    которую мы продаём. Способ набрал популярность запоследнее
                                    время. Если же вы всё-таки не осведомлены, сделать это можно
                                    на видеохостинге Youtube.
                                </h2>
                            </Fade>
                            <Fade>
                                <a href="https://www.youtube.com/watch?v=Wnp6s9mLkMk" target="_blank" className={style_css.href}>
                                    Способ с Золотой короной</a>
                            </Fade>
                            <Fade top>
                                <h1 className={style_css.head}>В чём же отличие?</h1>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Наш вариант отличается тем, что вам не придётся искать физ. лицо в
                                    Турции для сервиса Korona Pay, вам не придётся искать другие паспорта,
                                    вам понадобятся только сим-карты, достать их проще простого.
                                </h2>
                            </Fade>
                            <Fade top>
                                <h1 className={style_css.head}>Какие преимущества?</h1>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Первое преимущество - ваши риски потерять деньги за
                                    границей сильно снижаются так как вам не понадобиться искать физ лицо.
                                </h2>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Второе преимущество - так как вам не придётся использовать
                                    одно и того же человека, время оборота денег снижается.
                                    Так же количество операций с Korona Pay увеличивается.
                                </h2>
                            </Fade>
                            <Fade top>
                                <h1 className={style_css.head}>Почему мы это продаём?</h1>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Подобные занятия подходят для тех, кто много времени уделяет
                                    меж-биржевому арбитражу. Мы на постоянной основе не
                                    занимаемся этим, но у нас более классный способ!
                                </h2>
                            </Fade>
                            <Fade top>
                                <h1 className={style_css.head}>Какова доходность?</h1>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Большую часть времени доходность <p className={style_css.mont}>1-1.5%</p> от
                                    оборотной суммы,
                                    редко бывает такое что доходность отрицательная, когда рубль
                                    укрепляется доходность может составлять до <p className={style_css.mont}>3%</p>.
                                </h2>
                            </Fade>
                            <Fade top>
                                <h1 className={style_css.head}>Остались вопросы?</h1>
                            </Fade>
                            <Fade>
                                <h2 className={style_css.text}>Если у вас остались вопросы, то вы можете позвонить по
                                    номеру <a href="tel:+79859532696" className={style_css.phone_number}>+7(916)-586-75-44</a> и
                                    задать их.
                                </h2>
                            </Fade>
                        </div>
                        <Bounce>
                            <h1 onClick={() => {window.scrollTo(0, 0); setTimeout(() => {navigate(GUARANTEE_ROUTE)}, 600)}}
                                className={style_css.garant + ' col-xxl-4 offset-xxl-4 col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 ' +
                                'col-md-4 offset-md-4 col-sm-6 offset-sm-3'}>
                                Прочтите о гарантии
                            </h1>
                        </Bounce>
                        <Zoom cascade>
                            <h2 className={style_css.price_text}>Стоимость:</h2>
                            <h2 className={style_css.price}>300 000 ₽</h2>
                        </Zoom>
                        <RequestButton setStartModal={(value) => setStartModal(value)} />
                        <Modal start={startModal} setStartModal={(value) => setStartModal(value)} />
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;
