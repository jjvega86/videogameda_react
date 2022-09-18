import axios from "axios";

//TODO: Fetch number of games sold globally in 2013
//! Dynamic fetch to power dropdown for picking year to set as inner bound

export const fetchGlobalGameSales = async () => {
  try {
    let response = await axios.get(
      "http://localhost:8080/getTotalSalesByYear/2013"
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
