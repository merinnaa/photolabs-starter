import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  const { sampleDataForTopicListItem} = props;
  return (
    <div className="topic-list__item" key = {props.key}>
      {/* Insert React */}
      <span className="topic-list__item span"> 
      <p> {props.title}</p>
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
