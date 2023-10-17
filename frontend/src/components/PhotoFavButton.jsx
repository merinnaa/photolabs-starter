import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {toggleFav} = props;
  const [likedPhotos, setLikedPhotos] = useState(false);
  
  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        
      <FavIcon 
      width={22}
      height={30}
      fill={likedPhotos ? "red" : ""}
      outlineWidth={1}
      stroke={likedPhotos ? "" : "red"}
      />
      </div>
    </div>
  );
}

export default PhotoFavButton;