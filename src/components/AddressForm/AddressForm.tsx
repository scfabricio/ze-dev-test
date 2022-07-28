import React from "react";
import AddressSearchInput from "../AddressSearchInput";

import "./AddressForm.scss";

const AddressForm = () => (
    <form action="" className="address-form">
        <h1 className="address-form__title mb-16">
            <strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado
            na sua casa <strong>agora</strong>
        </h1>
        <AddressSearchInput />
    </form>
);

export default AddressForm;
