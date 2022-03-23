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

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>All Posts:</h1>
      <br />
      {posts.length ? (
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
              {posts.map((post) => (
                <TableRow
                  key={post.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {post.id}
                  </TableCell>
                  <TableCell align="left">{post.title}</TableCell>
                  <TableCell align="left">{post.body}</TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/user/${post.userId}`}>View User</Link>
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#8624DB" }}>
                    <Link to={`/postDetail/${post.id}`}>View Comments</Link>
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

export default Posts;
