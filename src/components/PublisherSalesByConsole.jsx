// React
import { useState, useEffect } from "react";

// API Call
import { getPublisherConsoleSalesQuery } from "../api/videoGameApi";

// Packages
import { Chart } from "react-google-charts";
import CircularProgress from "@mui/material/CircularProgress";

// Components
import GameConsoleSelector from "./GameConsoleSelector";

export default function PublisherSalesByConsole() {
  const [gameConsole, setGameConsole] = useState("DS");
  const [publisherSales, setPublisherSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    chart: {
      title: `Top 10 Publishers for the ${gameConsole}`,
      subtitle: "Based on total global sales",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data = await getPublisherConsoleSalesQuery(gameConsole);
      data.unshift(["Publisher", "Global Sales (Millions)"]);
      setPublisherSales(data);
      setLoading(false);
    };
    fetchData();
  }, [gameConsole]);
  return (
    <>
      <h3>Top 10 Publisher Sales for the {gameConsole}</h3>
      <GameConsoleSelector
        gameConsole={gameConsole}
        setGameConsole={setGameConsole}
      />{" "}
      <div
        style={{
          width: "100%",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Chart
            chartType="Bar"
            data={publisherSales}
            options={options}
            width="100%"
            height="400px"
          />
        )}{" "}
      </div>
    </>
  );
}
