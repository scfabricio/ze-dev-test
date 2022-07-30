import React, { useState } from "react";
import { FiArrowLeft, FiMapPin } from "react-icons/fi";

import { IAddressSearchInputProps } from "./AddressSearchInput.types";

import "./AddressSearchInput.scss";

const AddressSearchInput = ({ value, onChange }: IAddressSearchInputProps) => {
    const [active, setActive] = useState(false);

    const closerBackdrop = () => {
        setActive(false);
        onChange("");
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
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
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
