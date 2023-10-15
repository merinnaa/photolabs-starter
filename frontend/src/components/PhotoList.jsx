import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  const handle = sampleDataForPhotoList.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          username={photo.user.username}
          name={photo.user.name}
          profile={photo.user.profile}
          full={photo.urls.full}
          regular={photo.urls.regular}

          city={photo.location.city}
          country={photo.location.city}


        />
      </li>
    )
  }
  )
  return (
    <ul className="photo-list">
      {/* {sampleDataForPhotoList.map((photoData) => ( 
         <PhotoListItem key={photoData} data={photoData} />
        
      ))} */}
      {handle}
    </ul>
  );
};

export default PhotoList;
