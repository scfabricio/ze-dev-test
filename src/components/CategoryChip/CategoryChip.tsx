import React from "react";

import { ICategoryChipProps } from "./CategoryChip.types";

import "./CategoryChip.scss";

const CategoryChip = ({ children, onClick, disabled }: ICategoryChipProps) => {
    return (
        <div
            className={`category-chip flex flex-align-center ${
                disabled ? "disabled" : ""
            }`}
            aria-hidden="true"
            role="button"
            onClick={disabled ? undefined : onClick}
            data-testid="category-chip-button"
        >
            <span>{children}</span>
        </div>
    );
};

export default CategoryChip;
