import React from "react";
import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";
import { IAlertProps } from "./Alert.types";

import "./Alert.scss";

const Alert = ({ variant, children, className, callback }: IAlertProps) => {
    const variantData = {
        error: {
            icon: <FiAlertCircle className="alert__icon" />,
            className: "alert--error"
        },
        info: {
            icon: <FiAlertCircle />,
            className: "alert--info"
        },
        success: {
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
                    data-testid="alert-close-button"
                >
                    <FiX />
                </button>
            )}
        </div>
    );
};

export default Alert;
