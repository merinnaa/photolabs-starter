import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
import TopNavigation from 'components/TopNavigationBar';
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList/>
    {/* <PhotoFavButton /> */}
    <TopicList/>
    
    </div>
  );
};

export default App;
