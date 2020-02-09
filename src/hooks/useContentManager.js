import { useState, useEffect, useCallback } from "react";
import { spacexUrl } from "../api/api";

export function useContentManager() {
  const [selectedFilter, setFilter] = useState();
  const [applySorting, setSorting] = useState(false);
  const [listOfLaunches, setListOfLaunches] = useState([]);

  const loadData = async () => {
    await fetch(spacexUrl)
      .then(res => res.json())
      .then(data => setListOfLaunches(transform(data)))
    };

  const fetchLaunches = useCallback(loadData, []);

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  const applySortLogic = launches =>
    launches.sort((a, b) =>
      applySorting ? b.launchDate - a.launchDate : a.launchDate - b.launchDate
    );
  const applyFilterLogic = launches =>
    selectedFilter
      ? launches.filter(l => l.launchYear === selectedFilter)
      : launches;

  const transform = launches =>
    launches.map(l => ({
      flightNumber: l.flight_number,
      rocketName: l.rocket.rocket_name,
      missionName: l.mission_name,
      launchDate: new Date(l.launch_date_utc),
      launchYear: l.launch_year
    }));

  const getListOfYears = launches =>
    launches
      .map(l => l.launchYear)
      .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);

  return {
    listOfLaunches: applySortLogic(applyFilterLogic(listOfLaunches)),
    filterOptions: getListOfYears(listOfLaunches),
    selectedFilter,
    setFilter,
    applySorting,
    setSorting,
    loadData,
  };
}
