import React from "react";
import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";
import { IAlertProps, EVariantAlert } from "./Alert.types";

import "./Alert.scss";

const Alert = ({ variant, children, className, callback }: IAlertProps) => {
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
            {variantData[variant].icon} {children}{" "}
            {callback && (
                <button
                    type="button"
                    className="alert-close__icon"
                    onClick={callback}
                >
                    <FiX />
                </button>
            )}
        </div>
    );
};

export default Alert;
