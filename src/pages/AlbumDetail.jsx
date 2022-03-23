import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { ScaleLoader } from "react-spinners";

const AlbumDetail = () => {
  const { albumDetailId } = useParams();
  const [albumDetail, setAlbumDetail] = useState({});
  const [photos, setPhotos] = useState([]);
  console.log(albumDetail);
  console.log(photos);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumDetailId}`)
      .then((res) => res.json())
      .then((data) => setAlbumDetail(data));
  }, [albumDetailId]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumDetailId}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [albumDetailId]);
  return (
    <div>
      {Object.keys(albumDetail).length === 0 ? (
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
          <h1>Album</h1>
          <b style={{ color: "#f44336" }}>Details:</b>
          <br />
          <br />
          <br />
          <h3>ID: {albumDetail.id}</h3>
          <h3>Title: {albumDetail.title}</h3>
          <br />
        </div>
      )}
      <br />
      <br />
      <br />
      <h1>Photos:</h1>
      <br />
      {photos.length ? (
        <ImageList sx={{ maxWidth: 800, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Gallery</ListSubheader>
          </ImageListItem>
          {photos.map((photo) => (
            <ImageListItem key={photo.id}>
              <img
                src={`${photo.url}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={photo.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${photo.title}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
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

export default AlbumDetail;
