// Components
import NavBar from "./components/NavBar";
import Header from "./components/Header";

// Utils
import CustomTheme from "./theme/CustomTheme";

function App() {
  return (
    <CustomTheme>
      <NavBar />
      <Header displayText="Video Games - Analyzed" />
    </CustomTheme>
  );
}

export default App;
