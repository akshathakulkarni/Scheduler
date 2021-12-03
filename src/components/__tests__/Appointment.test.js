/*
  We are rendering `<Appointment />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Appointment from "components/Appointment";
import Header from "components/Appointment/Header";
import Status from "components/Appointment/Status";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("renders a Header component with time", () => {
    const { getByText } = render(<Header time="12pm" />);
    expect(getByText("12pm")).toBeInTheDocument();
  });

  it("renders a Status component with a message", () => {
    const { getByText } = render(<Status message="Saving.."/>);
    expect(getByText("Saving..")).toBeInTheDocument();
  });
});