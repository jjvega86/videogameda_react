import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import GameModal from "./GameModal";
import GameDetail from "./GameDetail";

export default function GameTable({ games }) {
  return (
    <TableContainer component={Paper} sx={{ mb: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Platform</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game) => (
            <TableRow
              key={game.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {game.name}
              </TableCell>
              <TableCell align="right">{game.platform}</TableCell>
              <TableCell align="right">{game.genre}</TableCell>
              <TableCell align="right">{game.year}</TableCell>
              <TableCell align="right">{game.publisher}</TableCell>
              <TableCell align="right">
                <GameModal buttonTitle="DETAILS">
                  <GameDetail game={game} />
                </GameModal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
