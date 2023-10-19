import { useState, useEffect } from "react"
import { useReducer } from "react";
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
      // Logic for adding a favorited photo
      return {
        ...state,
        likedPhotos: [...state.likedPhotos,
        action.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      // Logic for removing a favorited photo
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter((id) => id !== action.photoId),
      };

    case ACTIONS.SELECT_PHOTO:
      console.log("abcd")
      // Logic  for selecting a photo
      return {
        ...state,
        showModal: true,
        clickedPhoto: action.photo,
      };

    // case ACTIONS.DISPLAY_PHOTO_DETAILS:
    //   // Logic  for displaying photo details
    //   return {
    //     ...state,
    //     showModal: false,
    //     clickedPhoto: null
    //   };
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




// Custom hook to manage application data state
const useApplicationData = () => {

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    showModal: false,
    clickedPhoto: null,
    likedPhotos: [],
    photoData: [],
    topicData: [],
    photosByTopic: [],

  });

  // Functions for dispatching actions

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

  // Function to set a photo as selected
  const onPhotoSelect = (photo) => {
    //console.log("abc",photo)
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  // Function to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };
  const closeModal = () => {
    
    dispatch({ type: ACTIONS.CLOSE_MODAL });
    
  };

  //Function to update the list of favorited photos
  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: state.likedPhotos.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      photoId,
    });
  };

  // const [state, setState] = useState({
  //   photo:[],
  //   selectedPhoto:null,
  //   likedPhotos:[],
  //   isModalOpen:false

  // });


  // const updateToFavPhotoIds=(photoId) =>{
  // setState((prevState)=>({
  //   ...prevState,
  //   likedPhotos:prevState.likedPhotos.includes(photoId)?
  //   prevState.likedPhotos.filter((id)=>
  //   id !== photoId):[...prevState.likedPhotos,photoId],
  //   }));
  // };

  // const onPhotoSelect = (photo)=>{
  // setState((prevState)=>({
  //   ...prevState,
  //   selectedPhoto:photo

  // }))
  // }
  // const onClosePhotoDetailsModal=()=>{
  //   setState((prevState)=>({
  //     ...prevState,
  //     isModalOpen:false,
  //   }))
  // }
  // const closeModal = () => {
  //   setState((prevState)=>({
  //     ...prevState,
  //     selectedPhoto:null
  //   }))
  //   };
  // const toggleFav = (photoId) => {
  //   if (likedPhotos.includes(photoId)) {

  //     setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
  //   } else {

  //     setLikedPhotos([...likedPhotos, photoId]);
  //   }
  // };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    closeModal,
    fetchPhotosByTopic

  };
};


export default useApplicationData;