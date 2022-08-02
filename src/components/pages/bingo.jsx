import * as React from "react";
import { History } from "../molecules/history";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { PlayArea } from "../molecules/playArea";

export const Bingo = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", position: "relative" }}>
          <PlayArea />
          <History />
        </Box>
      </Container>
    </>
  );
};

export default Bingo;
