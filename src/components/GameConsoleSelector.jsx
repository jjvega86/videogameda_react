import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

// For ease of user experience, limiting selection options to consoles since 2010
export default function GameConsoleSelector(props) {
  const handleChange = (e) => {
    props.setGameConsole(e.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel>Console</InputLabel>
      <Select value={props.gameConsole} onChange={handleChange}>
        <MenuItem value="3DS">3DS</MenuItem>
        <MenuItem value="DS">DS</MenuItem>
        <MenuItem value="PC">PC</MenuItem>
        <MenuItem value="PS2">PlayStation 2</MenuItem>
        <MenuItem value="PS3">PlayStation 3</MenuItem>
        <MenuItem value="PS4">PlayStation 4</MenuItem>
        <MenuItem value="PSP">PSP</MenuItem>
        <MenuItem value="PSV">PlayStation Vita</MenuItem>
        <MenuItem value="Wii">Wii</MenuItem>
        <MenuItem value="WiiU">Wii U</MenuItem>
        <MenuItem value="X360">Xbox 360</MenuItem>
        <MenuItem value="XOne">Xbox One</MenuItem>
      </Select>
    </FormControl>
  );
}
