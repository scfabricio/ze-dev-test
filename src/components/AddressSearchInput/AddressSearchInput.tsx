import React, { useState } from "react";
import { FiArrowLeft, FiMapPin } from "react-icons/fi";

import "./AddressSearchInput.scss";

const AddressSearchInput = () => {
    const [active, setActive] = useState(false);
    const [address, setAddress] = useState("");

    const closerBackdrop = () => {
        setActive(false);
        setAddress("");
    };

    return (
        <div>
            <div className="address-search-input flex flex-align-center">
                {active ? (
                    <FiArrowLeft
                        className="address-search-input__icon click"
                        aria-hidden="true"
                        onClick={closerBackdrop}
                    />
                ) : (
                    <FiMapPin className="address-search-input__icon" />
                )}
                <input
                    type="text"
                    name="address-search"
                    value={address}
                    onChange={(event) => setAddress(event.currentTarget.value)}
                    className="address-search-input__input"
                    placeholder="Insira o endereço com número"
                    onFocus={() => setActive(true)}
                />
            </div>
            <div
                className={`address-search-input__backdrop ${
                    active ? "active" : ""
                }`}
                aria-hidden="true"
                onClick={closerBackdrop}
            />
        </div>
    );
};

export default AddressSearchInput;
