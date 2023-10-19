import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({title}) => {
   
  return (
    <div className="topic-list__item" >
     <span className="topic-list__item span"> 
      <p> {title}</p>
      </span>
    </div>
  );
};


export default TopicListItem;
