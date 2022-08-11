import React from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import Container from "../Container";
import CustonInput from "../CustonInput";

import ZeLogo from "../../assets/white-logo.png";

import "./Header.scss";

const Header = () => {
    const location = useLocation();
    const isProducts = location.pathname === "/produtos";

    return (
        <header className="header flex flex-align-center">
            <Container className="flex">
                <img
                    className="header__logo"
                    src={ZeLogo}
                    alt="Zé delivery logo"
                />
                {isProducts && (
                    <div className="search flex flex-justify-center flex-align-center">
                        <CustonInput
                            icon={<FiSearch className="search__icon" />}
                            className="search__input"
                            value="teste"
                            onChange={() => undefined}
                        />
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
