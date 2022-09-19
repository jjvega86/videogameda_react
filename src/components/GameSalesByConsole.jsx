import { Chart } from "react-google-charts";

const createData = (originalData) => {
  return [["Console", "Sales (millions)"], ...Object.entries(originalData)];
};

const options = {
  title: "Total Sales by Console",
  chartArea: { width: "50%" },
  vAxis: {
    title: "Consoles",
  },
  hAxis: {
    title: "Sales (in millions)",
  },
};

export default function GameSalesByConsole({ consoleInfo }) {
  return (
    <>
      {consoleInfo ? (
        <Chart
          chartType="BarChart"
          data={createData(consoleInfo)}
          options={options}
          width="100%"
          height="400px"
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
