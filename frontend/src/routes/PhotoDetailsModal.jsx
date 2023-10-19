import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import useApplicationData from 'hooks/useApplicationData';
const PhotoDetailsModal = ({ closeModal, likedPhotos, toggleFav, photos, selectedPhoto }) => {

  const { full, profile, username, city, country, similarPhotos } = selectedPhoto;

  const handleToggleFavorite = () => {
    toggleFav(selectedPhoto.id);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" >
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>
      <div className="photo-details-modal__images">
        <img
          src={full}
          alt={`Photo by ${profile}`}
          className="photo-details-modal__image"
        />
      </div>
      <div className="photo-list__user-details">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-list__user-profile"
            src={profile}
            alt={username}
          />
          <span className="photo-list__user-info">
            {username}
            <p className="photo-list__user-location">
              {city}, {country}
            </p>
          </span>
        </div>

        {/* Render the favorite button/icon within the modal */}
        <div className='photo-large__fav-icon'>
          <PhotoFavButton
            initialSelected={likedPhotos}
            photoId={selectedPhoto.id}
            toggleFav={handleToggleFavorite}
          />
        </div>
      </div>

      <h2 className="photo-details-modal__header">Similar Photos</h2>

      {/* Display similar photos */}
      <ul className="photo-list">
        <PhotoList
          photos={Object.values(similarPhotos)}
          setSelectedPhoto={() => { }}
          openModal={() => { }}
          toggleFav={toggleFav}
          likedPhotos={likedPhotos}
        />
      </ul>
    </div>
  )
};

export default PhotoDetailsModal;
