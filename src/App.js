// React Stuff
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

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

const options = {
  title: "Total Millions of Global Sales by Console since 2013",
  chartArea: { width: "50%" },
  vAxis: {
    title: "Consoles",
  },
  hAxis: {
    title: "Sales (in millions)",
  },
};

function App() {
  const [gameSales, setGameSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchGlobalGameSales();
      // Unshift zero index in format ["Y Axis", X Axis]
      data.unshift(["Console", "Global Sales (Millions)"]);
      setGameSales(data);
    };
    fetchData();
  }, []);

  return (
    <CustomTheme>
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
        <Chart
          chartType="BarChart"
          data={gameSales}
          options={options}
          width="100%"
          height="400px"
        />
        ;
      </Container>
    </CustomTheme>
  );
}

export default App;
