import { useState,useEffect } from "react"

function useApplicationData(){
const [state, setState] = useState({
  photo:[],
  selectedPhoto:null,
  likedPhotos:[],
  isModalOpen:false

});

  
const updateToFavPhotoIds=(photoId) =>{
setState((prevState)=>({
  ...prevState,
  likedPhotos:prevState.likedPhotos.includes(photoId)?
  prevState.likedPhotos.filter((id)=>
  id !== photoId):[...prevState.likedPhotos,photoId],
  }));
};

const onPhotoSelect = (photo)=>{
setState((prevState)=>({
  ...prevState,
  selectedPhoto:photo

}))
}
const onClosePhotoDetailsModal=()=>{
  setState((prevState)=>({
    ...prevState,
    isModalOpen:false,
  }))
}
const closeModal = () => {
  setState((prevState)=>({
    ...prevState,
    selectedPhoto:null
  }))
  };
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
    
  };
};


 export default useApplicationData