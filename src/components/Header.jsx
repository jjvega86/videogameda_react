import { Typography } from "@mui/material";

export default function Header({ displayText }) {
  return (
    <Typography variant="h2" mt={3} textAlign="center">
      {displayText}
    </Typography>
  );
}
