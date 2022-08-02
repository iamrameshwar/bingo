import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
theme.typography.caption = {
  fontSize: "0.75rem",
  "@media (max-width:600px)": {
    fontSize: "0.50rem",
  },
};
theme.typography.body2 = {
  fontSize: "0.60rem",
  "@media (max-width:600px)": {
    fontSize: "0.40rem",
  },
};
const Tile = ({ cardNumber, cardText, isSelected, onSelect }) => (
  <Card
    sx={{
      maxWidth: 345,
      minHeight: "100%",
      backgroundColor: isSelected ? "#cbcbcb" : "#ffffff",
    }}
  >
    <CardActionArea onClick={() => onSelect(cardNumber)}>
      <CardContent sx={{ minHeight: "100%" }}>
        <ThemeProvider theme={theme}>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            sx={{ textDecoration: isSelected ? "line-through" : "none" }}
          >
            {cardText}
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ position: "absolute", top: "5px", right: "5px" }}
          >
            {cardNumber + 1}
          </Typography>
        </ThemeProvider>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default Tile;
