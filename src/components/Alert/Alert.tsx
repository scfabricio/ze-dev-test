import React from "react";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { IAlertProps, EVariantAlert } from "./Alert.types";

import "./Alert.scss";

const Alert = ({ variant, children, className }: IAlertProps) => {
    const variantData = {
        [EVariantAlert.ERROR]: {
            icon: <FiAlertCircle className="alert__icon" />,
            className: "alert--error"
        },
        [EVariantAlert.INFO]: {
            icon: <FiAlertCircle />,
            className: "alert--info"
        },
        [EVariantAlert.SUCCESS]: {
            icon: <FiCheckCircle />,
            className: "alert--success"
        }
    };

    return (
        <div
            className={`alert ${variantData[variant].className} ${
                className ?? ""
            }`}
        >
            {variantData[variant].icon} {children}
        </div>
    );
};

export default Alert;
