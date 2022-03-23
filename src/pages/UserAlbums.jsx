import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const UserAlbums = () => {
  const { albumsUserId } = useParams();
  const [allAlbums, setAllAlbums] = useState([]);

  const userAlbums = allAlbums.filter((album) => album.userId == albumsUserId);

  console.log(userAlbums);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAllAlbums(data));
  }, []);
  return (
    <div>
      <h1>{userAlbums.length} Albums:</h1>
      <br />
      {userAlbums.length ? (
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
              {userAlbums.map((userAlbum) => (
                <TableRow
                  key={userAlbum.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {userAlbum.id}
                  </TableCell>
                  <TableCell align="left">{userAlbum.title}</TableCell>

                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/user/${userAlbum.userId}`}>View User</Link>
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/albumDetail/${userAlbum.id}`}>View Photos</Link>
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

export default UserAlbums;
