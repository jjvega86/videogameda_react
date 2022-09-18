import { useEffect, useState } from "react";
import { searchGamesQuery } from "../api/videoGameApi";

import GameTable from "./GameTable";
import SearchForm from "../components/SearchForm";

export default function GameTableWrapper() {
  const [games, setGames] = useState([]);
  const [queryParam, setQueryParam] = useState("");

  useEffect(() => {
    const fetchGames = async (query) => {
      try {
        let data = await searchGamesQuery(query);
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames(queryParam);
  }, [queryParam]);

  return (
    <>
      <SearchForm setSearch={setQueryParam} />
      <GameTable games={games} />
    </>
  );
}
