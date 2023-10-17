import React from "react";
import topics from "mocks/topics";
import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({topic, id, slug, title}) => {
   //const { id, slug, title} = topic;
  return (
    <div className="topic-list__item" >
      {/* Insert React */}
      <span className="topic-list__item span"> 
      <p> {title}</p>
      </span>
    </div>
  );
};
TopicListItem.defaultProps = {
  label: 'Nature'
  // TODO: We don't need a link.
  //link: 'insert link' 
}

export default TopicListItem;
