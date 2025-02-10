import React from "react";

const StoryItem = ({ story }) => {
  return (
    <div className="story-item">
      <strong>{story.user}</strong>: {story.text} <span>({story.time})</span>
    </div>
  );
};

export default StoryItem;
