import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#f44336" }}>Id</TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Name
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Email
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Posts
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Albums
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/userPosts/${user.id}`}>View Posts</Link>
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/userAlbums/${user.id}`}>View Albums</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "32vh",
          }}
        >
          <ScaleLoader color={"#9e9e9e"} size={75} />
        </div>
      )}
    </div>
  );
};

export default Users;
