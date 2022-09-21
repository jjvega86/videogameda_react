import { useState, useEffect } from "react";
import { getPublisherConsoleSalesQuery } from "../api/videoGameApi";
import GameConsoleSelector from "./GameConsoleSelector";
export default function PublisherSalesByConsole() {
  const [gameConsole, setGameConsole] = useState("DS");
  const [publisherSales, setPublisherSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPublisherConsoleSalesQuery(gameConsole);
      setPublisherSales(data);
    };
    fetchData();
  }, [gameConsole]);
  return (
    <>
      {console.log("Publisher Sales: ", publisherSales)}
      <h3>Top 10 Publisher Sales for the {gameConsole}</h3>
      <GameConsoleSelector />
    </>
  );
}
