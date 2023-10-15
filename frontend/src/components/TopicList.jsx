import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const topic = sampleDataForTopicList.map((data) => {
    return(
      
        <TopicListItem 
        key = {data.id}
    id={data.id}
    slug={data.slug}
    title={data.title}
    />
    
    )
  })
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      
      {topic}
      
    </div>
  );
};

export default TopicList;
