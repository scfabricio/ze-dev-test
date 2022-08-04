import React from "react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

import logo from "../../assets/logo-white-text.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex flex-direction-column flex-align-center flex-justify-center">
                <img
                    src={logo}
                    alt="Zé delivery logo"
                    className="footer__logo"
                />
                <ul className="footer__social-list flex flex-justify-between mt-16">
                    <li className="footer__social-list-item">
                        <a
                            href="https://twitter.com/ZeDelivery"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiTwitter className="icon" />
                        </a>
                    </li>
                    <li className="footer__social-list-item">
                        <a
                            href="https://www.facebook.com/zedeliverydebebidas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiFacebook className="icon" />
                        </a>
                    </li>
                    <li className="footer__social-list-item">
                        <a
                            href="https://www.instagram.com/zedelivery/?hl=pt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiInstagram className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
