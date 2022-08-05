import React from "react";

import { ICategoryChipProps } from "./CategoryChip.types";

import "./CategoryChip.scss";

const CategoryChip = ({ children, onClick, disable }: ICategoryChipProps) => {
    return (
        <div
            className={`category-chip flex flex-align-center ${
                disable ? "disable" : ""
            }`}
            aria-hidden="true"
            role="button"
            onClick={onClick}
        >
            <span>{children}</span>
        </div>
    );
};

export default CategoryChip;
