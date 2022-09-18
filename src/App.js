// React Stuff
import { useEffect, useState } from "react";
// MUI
import Container from "@mui/material/Container";

// Components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

// Utils
import CustomTheme from "./theme/CustomTheme";

// API
import { fetchGlobalGameSales } from "./api/videoGameApi";

function App() {
  const [gameSales, setGameSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchGlobalGameSales();
      setGameSales(data);
    };
    fetchData();
  }, []);

  return (
    <CustomTheme>
      {console.log("Game Sales Data: Line 28", gameSales)}
      <NavBar />
      <Container>
        <Header displayText="Video Games - Analyzed" />
        <SearchForm />
        {gameSales &&
          gameSales.map((console) => (
            <p>
              {console[0]} - {console[1]}
            </p>
          ))}
      </Container>
    </CustomTheme>
  );
}

export default App;
