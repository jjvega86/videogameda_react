import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getGameConsoleSalesQuery } from "../api/videoGameApi";
import GameSalesByConsole from "./GameSalesByConsole";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  backgroundColor: "black",
  boxShadow: 24,
  p: 4,
};

export default function GameDetail({ game }) {
  const [consoleInfo, setConsoleInfo] = useState({});

  useEffect(() => {
    const fetchConsoleSales = async (gameName) => {
      try {
        let data = await getGameConsoleSalesQuery(gameName);
        setConsoleInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConsoleSales(game.name);
  }, [game.name]);
  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {game.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {consoleInfo && <GameSalesByConsole consoleInfo={consoleInfo} />}
        </Typography>
      </Box>
    </div>
  );
}
