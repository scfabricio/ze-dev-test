import React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import CategoryChip from "./CategoryChip";

test.each([false, true])(
    "Should render the category chip component with disabled equal '%s'",
    (disabled) => {
        const callback = jest.fn();

        render(
            <CategoryChip onClick={callback} disabled={disabled}>
                Nova categoria
            </CategoryChip>
        );

        expect(screen.getByText("Nova categoria")).toBeInTheDocument();
        const element = screen.getByTestId("category-chip-button");
        expect(element).toBeInTheDocument();
        userEvent.click(element);
        if (disabled) {
            expect(callback).not.toBeCalled();
        } else {
            expect(callback).toBeCalled();
        }
    }
);
