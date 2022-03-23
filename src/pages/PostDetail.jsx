import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ScaleLoader } from "react-spinners";

const PostDetail = () => {
  const { postDetailId } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [userComments, setUserComments] = useState([]);
  console.log(postDetail);
  console.log(userComments);

  const navigate = useNavigate();

  const handleViewUser = () => {
    navigate(`/user/${userId}`);
  };

  const { title, body, userId } = postDetail;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postDetailId}`)
      .then((res) => res.json())
      .then((data) => setPostDetail(data));
  }, [postDetailId]);

  useState(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postDetailId}/comments`)
      .then((res) => res.json())
      .then((data) => setUserComments(data));
  }, [postDetailId]);

  return (
    <div>
      {Object.keys(postDetail).length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25vh",
          }}
        >
          <ScaleLoader color={"#9e9e9e"} size={75} />
        </div>
      ) : (
        <div className="box">
          <h1>Post</h1>
          <b style={{ color: "#f44336" }}>Details:</b>
          <div style={{ textAlign: "right", marginTop: "-64px" }}>
            <Button onClick={handleViewUser} variant="outlined">
              View User
            </Button>
          </div>
          <br />
          <br />
          <br />
          <div>
            <p>Title: {title}</p>
            <br />
            <p>Post: {body}.</p>
          </div>
          <br />
        </div>
      )}
      <br />
      <br />
      <br />
      {userComments.length ? (
        <div>
          <h1>{userComments.length} Comments:</h1>
          {userComments.map((userComment) => (
            <div key={userComment.id}>
              <br />
              <div className="box">
                <h3>Name: {userComment.name}</h3>
                <h3>Email: {userComment.email}</h3>
                <br />
                <p>{userComment.body}.</p>
              </div>
            </div>
          ))}
        </div>
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

export default PostDetail;
