import React from "react";

import { ILoadingProps } from "./Loading.types";

import "./Loading.scss";

const Loading = ({ size = 120 }: ILoadingProps) => {
    return (
        <div
            className="loader"
            style={{ width: `${size}px`, height: `${size}px` }}
        />
    );
};

export default Loading;
