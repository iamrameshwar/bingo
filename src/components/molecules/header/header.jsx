import * as React from "react";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { reset } from "../../../redux/appSlice";
import ConfirmDialog from "../../atoms/confirmDialog";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});
export const Header = () => {
  const { userName, bingos } = useSelector((state) => state.app);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const onReset = () => {
    dispatch(reset());
    handleClose();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography gutterBottom variant="h6" component="div" color="inherit">
            {userName}
          </Typography>
          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={() => handleClickOpen()}
          >
            Reset
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <Typography gutterBottom variant="h6" component="div" color="inherit">
            Bingos: {bingos?.length === 12 ? "Full Bingo" : bingos?.length}
          </Typography>
        </Toolbar>
      </AppBar>
      <ConfirmDialog
        header={"Do you really want to reset the game?"}
        body={"If you reset the game you will lose your current state."}
        handleClose={handleClose}
        handler={onReset}
        open={open}
      />
    </>
  );
};
