import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

test("Should render logo img", () => {
    render(<Footer />);
    expect(screen.getByAltText("Zé delivery logo")).toBeInTheDocument();
});

const links = [
    "https://twitter.com/ZeDelivery",
    "https://www.facebook.com/zedeliverydebebidas",
    "https://www.instagram.com/zedelivery/?hl=pt"
];

test.each(links)("should there be a link to %s", (link) => {
    render(<Footer />);
    expect(document.querySelector(`a[href="${link}"]`)).toBeInTheDocument();
});
