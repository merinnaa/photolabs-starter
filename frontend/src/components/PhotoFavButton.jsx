import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false);
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <button onClick={() => setLike((prevLike) => !prevLike) }> {like? '❤️':'🤍'}</button>
      </div>
    </div>
  );
}

export default PhotoFavButton;