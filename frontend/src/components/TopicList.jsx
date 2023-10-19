import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  const topicArray = topics.map((data) => {
    return(
      
        <TopicListItem 
        key = {data.id}
        topic={data}
    id={data.id}
    slug={data.slug}
    title={data.title}
    />
    
    )
  })
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicArray}
      </div>
  );
};

export default TopicList;
