import LocationContainer from "./LocationContainer";
import TempContainer from "./TempContainer";
import WeatherContainer from "./WeatherContainer";
import { Box } from "@mui/material";

const CurrentWeatherContainer = ({ weather }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        backgroundColor: "theme.palette.secondary.main",
      }}
    >
      <LocationContainer
        country={weather.sys.country}
        location={weather.name}
      />
      <TempContainer temp={weather.main} variant="subtitle1" />
      <WeatherContainer weather={weather.weather[0].main} />
    </Box>
  );
};

export default CurrentWeatherContainer;
