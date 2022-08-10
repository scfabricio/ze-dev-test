import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Alert from "./Alert";

test("Should render the alert component", () => {
    const callback = jest.fn();

    render(
        <Alert variant="error" callback={callback}>
            Uma mensagem de alerta
        </Alert>
    );

    expect(screen.getByText("Uma mensagem de alerta")).toBeInTheDocument();
    const element = screen.getByTestId("alert-close-button");
    expect(element).toBeInTheDocument();
    userEvent.click(element);
    expect(callback).toBeCalled();
});
