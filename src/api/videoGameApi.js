import axios from "axios";

export const globalSalesGamesQuery = async () => {
  //TODO Dynamic fetch to power dropdown for picking year to set as inner bound
  try {
    let response = await axios.get(
      "http://localhost:8080/getTotalSalesByYear/2013"
    );
    let finalData = Object.entries(response.data);
    console.log(finalData);
    finalData.sort(function (a, b) {
      return b[1] - a[1];
    });
    return finalData;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchGamesQuery = async (query) => {
  let url =
    query === ""
      ? `http://localhost:8080/all`
      : `http://localhost:8080/searchGames/${query}`;
  try {
    let response = await axios.get(url);
    return response.data.slice(0, 5);
  } catch (error) {
    console.log(error.message);
  }
};

export const getGameConsoleSalesQuery = async (gameName) => {
  try {
    let response = await axios.get(
      `http://localhost:8080/getGameSales/${gameName}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
