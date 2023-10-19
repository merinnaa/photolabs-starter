import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {toggleFav} = props;
  //const [likedPhotos, setLikedPhotos] = useState(false);
  // const handleToggleLike = () => {
  //   //setLikedPhotos(!likedPhotos);
  //   toggleFav();
  // };
  return (
    <div className="photo-list__fav-icon" onClick={props.toggleFav}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        
      <FavIcon 
      // width={22}
      // height={30}
      selected={props.isLiked}
       //fill={props.isLiked ? "red" : ""}
      //outlineWidth={1}
       //stroke={props.isLiked ? "" : "red"}

      />
      </div>
    </div>
  );
}

export default PhotoFavButton;
