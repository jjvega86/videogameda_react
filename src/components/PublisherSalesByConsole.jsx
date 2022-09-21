import { useState, useEffect } from "react";
import { getPublisherConsoleSalesQuery } from "../api/videoGameApi";
import GameConsoleSelector from "./GameConsoleSelector";
import { Chart } from "react-google-charts";

export default function PublisherSalesByConsole() {
  const [gameConsole, setGameConsole] = useState("DS");
  const [publisherSales, setPublisherSales] = useState([]);
  const options = {
    title: `Top 10 Publisher Sales on ${gameConsole}`,
    chartArea: { width: "50%" },
    vAxis: {
      title: "Publisher",
    },
    hAxis: {
      title: "Sales (millions)",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPublisherConsoleSalesQuery(gameConsole);
      data.unshift(["Publisher", "Global Sales (Millions)"]);
      setPublisherSales(data);
    };
    fetchData();
  }, [gameConsole]);
  return (
    <>
      {console.log("Publisher Sales: ", publisherSales)}
      <h3>Top 10 Publisher Sales for the {gameConsole}</h3>
      <GameConsoleSelector
        gameConsole={gameConsole}
        setGameConsole={setGameConsole}
      />
      <Chart
        chartType="BarChart"
        data={publisherSales}
        options={options}
        width="100%"
        height="400px"
      />
    </>
  );
}
