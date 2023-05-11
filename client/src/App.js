import "./App.css";
import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import useFetch from "./components/hooks/useFetch";
import SearchBar from "./components/SearchBar";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import { theme } from "./theme";

function App() {
  const [location, setLocation] = useState("");
  const [data, fetchData] = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location);
    console.log(data);
  };

  return (
    <main>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar
          value={location}
          handleChange={(e) => setLocation(e.target.value)}
          handleSubmit={handleSubmit}
        />
      </Box>
      <ThemeProvider theme={theme}>
        {data.main && <CurrentWeatherContainer weather={data} />}
      </ThemeProvider>
    </main>
  );
}

export default App;
