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

const UserPosts = () => {
  const { postsUserId } = useParams();

  const [allPosts, setAllPosts] = useState([]);

  const userPosts = allPosts.filter((post) => post.userId == postsUserId);

  console.log(userPosts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setAllPosts(data));
  }, []);

  return (
    <div>
      <h1>{userPosts.length} Posts:</h1>
      <br />
      {userPosts.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#f44336" }}>Id</TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Title
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Body
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  User
                </TableCell>
                <TableCell sx={{ color: "#f44336" }} align="left">
                  Comments
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userPosts.map((userPost) => (
                <TableRow
                  key={userPost.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {userPost.id}
                  </TableCell>
                  <TableCell align="left">{userPost.title}</TableCell>
                  <TableCell align="left">{userPost.body}</TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/user/${userPost.userId}`}>View User</Link>
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/postDetail/${userPost.id}`}>View Comments</Link>
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

export default UserPosts;
