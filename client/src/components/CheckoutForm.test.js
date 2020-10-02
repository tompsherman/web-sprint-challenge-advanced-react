import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows
describe("test checkout form", () => {
  test("app renders without error", () => {
    render(<CheckoutForm />);
  });

  test("form header renders", async () => {
    render(<App />);

    const headerRender = screen.getByText(/react plants/i);
  });

  test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    const submitButton = screen.getByRole("button", { name: /checkout/i });

    fireEvent.change(firstNameInput, { target: { value: "tom" } });
    fireEvent.change(lastNameInput, { target: { value: "tom" } });
    fireEvent.change(addressInput, { target: { value: "tom" } });
    fireEvent.change(cityInput, { target: { value: "tom" } });
    fireEvent.change(stateInput, { target: { value: "tom" } });
    fireEvent.change(zipInput, { target: { value: "tom" } });

    fireEvent.click(submitButton);

    await screen.findByText(/woo-hoo/i);
  });
});
