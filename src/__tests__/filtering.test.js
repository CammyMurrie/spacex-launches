import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  getByTestId,
  fireEvent,
  getAllByTestId
} from "@testing-library/react";

import { AppContext } from "../context/appContext";
import { Content } from "../components/Content";

it("opens the filtering menu when button is clicked", () => {
  const testData = [
    {
      flightNumber: 1,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date("16/11/1993"),
      launchYear: "1993"
    },
    {
      flightNumber: 2,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date("01/07/1997"),
      launchYear: "1997"
    }
  ];
  const { container } = render(
    <AppContext.Provider
      value={{ listOfLaunches: testData, filterOptions: testData.map(d => d.launchYear) }}
    >
      <Content />
    </AppContext.Provider>
  );

  const filterButton = getByTestId(container, 'filter');
  fireEvent["click"](filterButton);
  const optionsList = getByTestId(container, 'options');
  expect(optionsList).toBeInTheDocument();
});
