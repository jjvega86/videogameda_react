import { TextField, Box } from "@mui/material";

export default function SearchForm({ setSearch }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      mt={4}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch", color: "white" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 3,
      }}
    >
      <TextField
        id="games"
        label="Search Games"
        variant="outlined"
        sx={{ color: "white" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}
