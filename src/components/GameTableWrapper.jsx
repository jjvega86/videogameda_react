import { useEffect, useState } from "react";
import { searchGamesQuery } from "../api/videoGameApi";
import GameTable from "./GameTable";

export default function GameTableWrapper() {
  const [games, setGames] = useState([]);
  // TODO: Wire search input form to searchGamesQuery parameter for refetch

  useEffect(() => {
    const fetchGames = async () => {
      try {
        let data = await searchGamesQuery("Call of Duty");
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  });

  return (
    <>
      <GameTable games={games} />
    </>
  );
}
