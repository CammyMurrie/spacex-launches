import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  getByTestId,
  fireEvent,
  getAllByTestId
} from "@testing-library/react";

import App from "../App";
import { AppContext } from "../context/appContext";
import { Content } from "../components/Content";

it("has a default sort value of ascending", () => {
  const { container } = render(<App />);
  const sortButton = getByTestId(container, "sort");

  expect(sortButton).toHaveTextContent("sort ascending");
});

it("has a sort value of descending when clicked", () => {
  const { container } = render(<App />);
  const sortButton = getByTestId(container, "sort");

  fireEvent["click"](sortButton);
  expect(sortButton).toHaveTextContent("sort descending");
});

it("has applied sorting in descending to data after being clicked", () => {
  const testData = [
    {
      flightNumber: 1,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date("16/11/1993"),
      launchYear: "launch year"
    },
    {
      flightNumber: 2,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date("01/07/1997"),
      launchYear: "launch year"
    }
  ];
  const { container } = render(
    <AppContext.Provider
      value={{ listOfLaunches: testData.reverse(), applySorting: true }}
    >
      <Content />
    </AppContext.Provider>
  );

  const launchList = getAllByTestId(container, "launch-entry");

  expect(launchList[0]).toHaveTextContent("#2");
  expect(launchList[1]).toHaveTextContent("#1");
});
