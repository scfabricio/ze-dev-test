import React, { useState } from "react";
import AddressSearchInput from "../AddressSearchInput";

import "./AddressForm.scss";
import { IAddressFormProps } from "./AddressForm.types";

const AddressForm = ({ onSubmit }: IAddressFormProps) => {
    const [address, setAddress] = useState("");

    return (
        <form onSubmit={(e) => onSubmit(e, address)} className="address-form">
            <h1 className="address-form__title mb-16">
                <strong>Bebidas geladas</strong> a <strong>preço</strong> de
                mercado na sua casa <strong>agora</strong>
            </h1>
            <AddressSearchInput value={address} onChange={setAddress} />
        </form>
    );
};

export default AddressForm;
