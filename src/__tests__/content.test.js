import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId, getAllByTestId } from "@testing-library/react";

import { AppContext } from "../context/appContext";
import { Content } from "../components/Content";

const generate = testData => render(
    <AppContext.Provider value={{ listOfLaunches: testData }}>
      <Content />
    </AppContext.Provider>
  );

it("App displays a loading spinner while waiting for data", () => {
    const { container } = generate([]);
    const spinner = getByTestId(container, 'spinner');
    expect(spinner).toBeInTheDocument();
});
it("App displays 1 entry when it is provided", () => {
  const testData = [
    {
      flightNumber: 1,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date(),
      launchYear: "launch year"
    }
  ];
  const { container } = generate(testData);
  const launchList = getByTestId(container, "launches");
  const launchListEntries = getByTestId(container, "launch-entry");
  expect(launchList.children).toHaveLength(1);
  expect(launchList.children[0]).toEqual(launchListEntries);
});

it("App displays multiple entries when it is provided", () => {
  const testData = [
    {
      flightNumber: 1,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date(),
      launchYear: "launch year"
    },
    {
      flightNumber: 2,
      rocketName: "rocket name",
      missionName: "mission name",
      launchDate: new Date(),
      launchYear: "launch year"
    }
  ];
  const { container } = generate(testData);
  const launchList = getByTestId(container, "launches");
  const launchListEntries = getAllByTestId(container, "launch-entry");
  expect(launchList.children).toHaveLength(2);
  expect(launchListEntries[0]).toHaveTextContent(`#${testData[0].flightNumber}`);
  expect(launchListEntries[1]).toHaveTextContent(`#${testData[1].flightNumber}`);
});
