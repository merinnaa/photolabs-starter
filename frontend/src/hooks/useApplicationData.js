import { useReducer, useEffect } from "react";
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      
      return {
        ...state,
        likedPhotos: [...state.likedPhotos,
        action.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
     
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter((id) => id !== action.photoId),
      };

    case ACTIONS.SELECT_PHOTO:
      
      return {
        ...state,
        showModal: true,
        clickedPhoto: action.photo,
      };

 
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        clickedPhoto:null
      };


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, {
    showModal: false,
    clickedPhoto: null,
    likedPhotos: [],
    photoData: [],
    topicData: [],
    photosByTopic: [],

  });

  //Functions for dispatching actions

  useEffect(() => {
    // Fetch Photo data
   
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
     
   // Fetch topic data
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));


  }, []);

  // Fetch photos by categories or topics
  const fetchPhotosByTopic = (topicId) => {
    return fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {

        return dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });

      })
      .catch((error) => console.error('Error:', error));
  };

  
  const onPhotoSelect = (photo) => {
    
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };
  const closeModal = () => {
    
    dispatch({ type: ACTIONS.CLOSE_MODAL });
    
  };

  
  const updateToFavPhotoIds = (photoId) => {
    
    dispatch({
      type: state.likedPhotos.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      photoId,
    });
  };

  

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    closeModal,
    

  };
};



export default useApplicationData;