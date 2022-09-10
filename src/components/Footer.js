import React from 'react';
import style_css from "../css/components/Footer.module.css"
import {Fade} from "react-reveal"

const Footer = () => {
    return (
        <Fade bottom>
            <div className="container">
                <div className="row">
                    <div className={style_css.footer}>
                        <a href="tel:+79165867544" className={style_css.footer_text}>+7(916)-586-75-44</a>
                        <h2 className={style_css.footer_text}>bcrypto435@gmail.com</h2>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Footer;
