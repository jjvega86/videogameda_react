// React Stuff
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

// API Call
import { globalSalesGamesQuery } from "../api/videoGameApi";

const options = {
  title: "Total Millions of Global Sales by Console since 2013",
  chartArea: { width: "50%" },
  vAxis: {
    title: "Consoles",
  },
  hAxis: {
    title: "Sales (in millions)",
  },
};

export default function GlobalGameSales() {
  const [gameSales, setGameSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await globalSalesGamesQuery();
      // Unshift zero index in format ["Y Axis", X Axis]
      data.unshift(["Console", "Global Sales (Millions)"]);
      setGameSales(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Chart
        chartType="BarChart"
        data={gameSales}
        options={options}
        width="100%"
        height="400px"
      />
    </>
  );
}
