import React from "react";

import { ICustonInputProps } from "./CustonInput.types";

import "./CustonInput.scss";

const CustonInput = ({
    icon,
    className,
    value,
    onChange,
    onFocus,
    placeholder,
    type = "text"
}: ICustonInputProps): JSX.Element => {
    return (
        <div
            className={`custon-input ${className ?? ""} flex flex-align-center`}
        >
            {icon}
            <input
                className="custon-input__input"
                type={type}
                value={value}
                placeholder={placeholder}
                onFocus={onFocus}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default CustonInput;
