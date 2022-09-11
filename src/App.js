// MUI
import Container from "@mui/material/Container";
// Components
import NavBar from "./components/NavBar";
import Header from "./components/Header";

// Utils
import CustomTheme from "./theme/CustomTheme";

function App() {
  return (
    <CustomTheme>
      <NavBar />
      <Container>
        <Header displayText="Video Games - Analyzed" />
      </Container>
    </CustomTheme>
  );
}

export default App;
