// MUI
import Container from "@mui/material/Container";

// Components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import GlobalGameSales from "./components/GlobalGameSales";
import GameTableWrapper from "./components/GameTableWrapper";

// Utils
import CustomTheme from "./theme/CustomTheme";

function App() {
  return (
    <CustomTheme>
      <NavBar />
      <Container>
        <Header displayText="Video Games - Analyzed" />
        <GameTableWrapper />
        <GlobalGameSales />
      </Container>
    </CustomTheme>
  );
}

export default App;
