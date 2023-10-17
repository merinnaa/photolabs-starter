import React from "react";
import photos from "mocks/photos";
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

const PhotoList = ({photos, toggleFav, likedPhotos, openModal, setSelectedPhoto}) => {

    return (
      <ul className="photo-list">
        {photos.map((photo) =>
          <PhotoListItem
            key={photo.id}
            picture={photo}
            id={photo.id}
            username={photo.user.username}
            name={photo.user.name}
            profile={photo.user.profile}
            full={photo.urls.full}
            regular={photo.urls.regular}

            city={photo.location.city}
            country={photo.location.city}
            toggleFav={toggleFav} 
            isLiked={likedPhotos.includes(photo.id)} 
            openModal={openModal}
            similarPhotos={photo.similar_photos}
           setSelectedPhoto={setSelectedPhoto}
          />)}
      </ul>
    )
  }
//   )
//   return (

//       {/* {sampleDataForPhotoList.map((photoData) => ( 
//          <PhotoListItem key={photoData} data={photoData} />

//       ))} */}
//       {handle}

//   );
// };

export default PhotoList;
