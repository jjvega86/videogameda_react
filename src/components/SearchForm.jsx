import { TextField, Box } from "@mui/material";

export default function SearchForm() {
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
      }}
    >
      <TextField
        id="games"
        label="Search Games"
        variant="outlined"
        sx={{ color: "white" }}
      />
    </Box>
  );
}
