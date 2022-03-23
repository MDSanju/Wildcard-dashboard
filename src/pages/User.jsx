import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleViewPosts = () => {
    navigate(`/userPosts/${id}`);
  };

  const handleViewAlbums = () => {
    navigate(`/userAlbums/${id}`);
  };

  const { id, name, email, address, phone, website, company } = user;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "32vh",
          }}
        >
          <ScaleLoader color={"#9e9e9e"} size={75} />
        </div>
      ) : (
        <div className="box">
          <h1>User</h1>
          <b style={{ color: "#f44336" }}>Details:</b>
          <br />
          <br />
          <div className="summary-box__info__value">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>
              Address: {address?.street}, {address?.city}
            </p>
            <p>Contact No: {phone}</p>
            <p>Portfolio: {website}</p>
            <p>Company: {company?.name}</p>
          </div>
          <br />
          <br />
          <Button
            onClick={handleViewPosts}
            variant="outlined"
            sx={{ marginRight: "20px" }}
          >
            View Posts
          </Button>
          <Button onClick={handleViewAlbums} variant="outlined">
            View Albums
          </Button>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default User;
