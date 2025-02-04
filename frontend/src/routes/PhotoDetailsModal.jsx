import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeModal, likedPhotos, toggleFav, selectedPhoto }) => {

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
 {/* Render the favorite button/icon within the modal */}
 <div className='photo-large__fav-icon'>
          <PhotoFavButton
          isLiked={likedPhotos.includes(selectedPhoto.id)}
            initialSelected={likedPhotos}
            photoId={selectedPhoto.id}
            toggleFav={handleToggleFavorite}
          />
        </div>
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

       
      </div>

      <h2 className="photo-details-modal__header">Similar Photos</h2>

      
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
