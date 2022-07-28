import React from "react";
import ZeLogo from "../../assets/white-logo.png";

import "./Header.scss";

const Header = () => (
    <header className="header flex flex-align-center">
        <div className="header__container">
            <img className="header__logo" src={ZeLogo} alt="Zé delivery logo" />
        </div>
    </header>
);

export default Header;
