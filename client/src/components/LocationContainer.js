import { Container, Typography, Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
}));

const LocationContainer = ({ location, country }) => {
  return (
    <StyledBox marginBottom={2} className="location-container">
      <Container>
        <Typography align="left">
          <Typography variant="h2">{location}</Typography>
          <Typography variant="h3">{country}</Typography>
        </Typography>
      </Container>
    </StyledBox>
  );
};

export { StyledBox };

export default LocationContainer;
