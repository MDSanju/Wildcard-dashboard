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

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    <div>
      <h1>All Albums:</h1>
      <br />
      {albums.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#f44336" }}>Id</TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Title
                </TableCell>

                <TableCell sx={{ color: "#f44336" }} align="left">
                  User
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Photos
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {albums.map((album) => (
                <TableRow
                  key={album.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {album.id}
                  </TableCell>
                  <TableCell align="left">{album.title}</TableCell>

                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/user/${album.userId}`}>View User</Link>
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/albumDetail/${album.id}`}>View Photos</Link>
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

export default Albums;
