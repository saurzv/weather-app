import { Box, Typography, Container } from "@mui/material";

export default function WeatherContainer({ weather }) {
  return (
    <Box
      sx={{
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography variant="h3">{weather}</Typography>
      </Container>
    </Box>
  );
}
