import React from "react";
import "./App.css";
import { Table,TableContainer,TableCell,TableBody,TableHead,TableRow,Paper} from "@mui/material";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";


const TableHeadCell = styled(TableCell)({
  backgroundColor: "blue",
  color: "white",
  border: "1px solid #002333",
  paddingTop: "15px",
  paddingBottom: "15px",
});

const TableBodyCell = styled(TableCell)({
  backgroundColor: "white",
  color: "#002333",
  border: "1px solid #002333",
  paddingTop: "5px",
  paddingBottom: "5px",
});

const TableFinalRow = styled(TableRow)({
  backgroundColor: "white",
  color: "#002333",
});

const App = () => {
  const [data, setData] = useState([]);
  const [MaleCount, setMaleCount] = useState(0);
  const [FemaleCount, setFemaleCount] = useState(0);

  const API = "https://gorest.co.in/public/v2/users";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        var MaleCount = 0;
        var FemaleCount = 0;
        res.forEach((ele) => {
          if (ele.gender === "male") MaleCount++;
          else if(ele.gender === "female") FemaleCount++;
        });
        setMaleCount(MaleCount);
        setFemaleCount(FemaleCount);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <div className="my_table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableHeadCell align="center">Id</TableHeadCell>
                <TableHeadCell align="center">Name</TableHeadCell>
                <TableHeadCell align="center">Email</TableHeadCell>
                <TableHeadCell align="center">Gender</TableHeadCell>
                <TableHeadCell align="center">Status</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} align="center">
                  <TableBodyCell component="th" scope="row">
                    {row.id}
                  </TableBodyCell>
                  <TableBodyCell align="center">{row.name}</TableBodyCell>
                  <TableBodyCell align="center">{row.email}</TableBodyCell>
                  <TableBodyCell align="center">{row.gender}</TableBodyCell>
                  <TableBodyCell>
                    <div
                      align="center"
                    >
                      {row.status}
                    </div>
                  </TableBodyCell>
                </TableRow>
              ))}
              <TableFinalRow>
                <TableCell align="left" colSpan={5}>
                  <div style={{ padding: "4px 10px" }}>
                    <b> Male Count:</b> {MaleCount}
                  </div>
                  <div style={{ padding: "4px 10px"}}>
                    <b> Female Count:</b> {FemaleCount}
                  </div>
                </TableCell>
              </TableFinalRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default App;
