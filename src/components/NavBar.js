import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import style_css from "../css/components/Navbar.module.css"
import {GUARANTEE_ROUTE, HOME_ROUTE, MEETING_ROUTE} from "../utils/util";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    return (
        <Navbar className={style_css.header} variant="dark" expand="lg">
            <Container className={style_css.line}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "center"}}>
                    <Nav>
                        <Nav.Link className={style_css.page} href={HOME_ROUTE}>Главная</Nav.Link>
                        <Nav.Link className={style_css.page} href={GUARANTEE_ROUTE}>Гарантия</Nav.Link>
                        <Nav.Link className={style_css.page} href={MEETING_ROUTE}>Встреча</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;