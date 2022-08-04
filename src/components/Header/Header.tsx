import React from "react";
import ZeLogo from "../../assets/white-logo.png";

import Container from "../Container";

import "./Header.scss";

const Header = () => (
    <header className="header flex flex-align-center">
        <Container>
            <img className="header__logo" src={ZeLogo} alt="Zé delivery logo" />
        </Container>
    </header>
);

export default Header;
