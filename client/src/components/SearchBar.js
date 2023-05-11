import { TextField, Button, Container, Box, styled } from "@mui/material";

const SearchBar = ({ handleSubmit, handleChange, value }) => {
  return (
    <Box marginBottom={3}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={handleChange}
          value={value}
          sx={{ m: 2, minWidth: "350px" }}
          required
        />
        <Button variant="outlined" onClick={handleSubmit} size="small">
          Search
        </Button>
      </Container>
    </Box>
  );
};

export default SearchBar;
