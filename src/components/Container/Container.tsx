import React from "react";

import { IContainerProps } from "./Container.types";

import "./Container.scss";

const Container = ({ children, className }: IContainerProps) => {
    return <div className={`app-container ${className ?? ""}`}>{children}</div>;
};

export default Container;
