import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { setUserName } from "../../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Registration() {
  const [open, setOpen] = React.useState(true);
  const { userName } = useSelector((state) => state.app);
  const [formUserName, setFormUserName] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    setFormUserName(userName);
  }, [userName]);
  const saveUserName = () => {
    dispatch(setUserName(formUserName));
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formUserName}
            onChange={(event) => setFormUserName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveUserName}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
