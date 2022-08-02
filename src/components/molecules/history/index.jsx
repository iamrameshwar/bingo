import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { liveUpdates } from "../../../redux/appSlice";

export const History = () => {
  const { bingoHistories, socketConnection } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    socketConnection.addEventListener("message", handleMessage, false);
  }, []);
  const handleMessage = (event) => {
    const messageData = JSON.parse(event.data);
    console.log(event);
    dispatch(liveUpdates(messageData));
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Total Bingo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bingoHistories
            .slice()
            .reverse()
            .map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.userName}</TableCell>
                <TableCell align="center">{item.bingo}</TableCell>
                <TableCell align="center">{item.totalBingo}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
