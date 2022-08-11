import React, { MouseEvent, useState } from "react";
import { FiArrowLeft, FiMapPin } from "react-icons/fi";
import { FaSearchLocation } from "react-icons/fa";

import CustonInput from "../CustonInput";

import { IAddressFormProps } from "./AddressForm.types";
import "./AddressForm.scss";

const AddressForm = ({ onSubmit, onGetLocation }: IAddressFormProps) => {
    const [address, setAddress] = useState("");
    const [active, setActive] = useState(false);

    const closerBackdrop = () => {
        setActive(false);
        setAddress("");
    };

    const handleLocation = (e: MouseEvent) => {
        closerBackdrop();
        onGetLocation(e);
    };

    return (
        <form onSubmit={(e) => onSubmit(e, address)} className="address-form">
            <h1 className="address-form__title mb-16">
                <strong>Bebidas geladas</strong> a <strong>preço</strong> de
                mercado na sua casa <strong>agora</strong>
            </h1>

            <div>
                <CustonInput
                    value={address}
                    onChange={setAddress}
                    placeholder="Insira o endereço com número"
                    onFocus={() => setActive(true)}
                    className="address-search-input flex flex-align-center mb-8"
                    icon={
                        active ? (
                            <FiArrowLeft
                                className="address-search-input__icon click"
                                aria-hidden="true"
                                onClick={closerBackdrop}
                            />
                        ) : (
                            <FiMapPin className="address-search-input__icon" />
                        )
                    }
                />
                {active && (
                    <button
                        type="button"
                        className="address-search-location-button  flex flex-align-center"
                        onClick={handleLocation}
                    >
                        <FaSearchLocation className="address-search-location-button__icon" />{" "}
                        Usar minha localização
                    </button>
                )}
                <div
                    className={`address-search-input__backdrop ${
                        active ? "active" : ""
                    }`}
                    aria-hidden="true"
                    onClick={closerBackdrop}
                />
            </div>
        </form>
    );
};

export default AddressForm;
