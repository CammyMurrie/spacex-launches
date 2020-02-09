import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  getByTestId,
  fireEvent,
} from "@testing-library/react";

import { AppContext } from "../context/appContext";
import { Header } from "../components/Header";

it("calls a function to reload data when button is clicked", () => {
    const loadData = jest.fn();
    const { container } = render(
        <AppContext.Provider
        value={{ listOfLaunches: [], loadData }}
      >
        <Header />
      </AppContext.Provider>
    );
    const reload = getByTestId(container, 'data-reload');
    fireEvent["click"](reload);
    expect(loadData).toHaveBeenCalledTimes(1);
});