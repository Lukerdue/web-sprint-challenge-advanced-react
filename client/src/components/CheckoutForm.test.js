import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const first = screen.getByLabelText(/first name:/i);
    const last = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const submit = screen.getByText("Checkout");

    fireEvent.change(first, "Jamie");
    fireEvent.change(last, "Jenks");
    fireEvent.change(address, "321 Gooding St.");
    fireEvent.change(city, "Boise");
    fireEvent.change(state, "Idaho");
    fireEvent.change(zip, "84432");
    fireEvent.click(submit);

    screen.getByTestId('successMessage');
});
