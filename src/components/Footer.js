import React from 'react';
import style_css from "../css/components/Footer.module.css"
import {Fade} from "react-reveal"

const Footer = () => {
    return (
        <Fade bottom>
            <div className="container">
                <div className="row">
                    <div className={style_css.footer}>
                        <a href="tel:+79859532696" className={style_css.footer_text}>+7(985)-953-26-96</a>
                        <h2 className={style_css.footer_text}>example@mail.ru</h2>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Footer;