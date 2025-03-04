import React, { useState } from "react";
import "./PostSection.css";

const PostItem = ({ post, deleteReview }) => {
  const [expanded, setExpanded] = useState(false);

  const previewText = post.text.split("\n").slice(0, 5).join("\n"); // 5줄만 미리보기

  return (
    <div className="post-item">
      <div className = "post-intro">
      <h3>{post.book}</h3>
      <button className="delete-btn" onClick={() => deleteReview(post.id)}>삭제</button>
      </div>
      <p>{expanded ? post.text : previewText}</p>
      {!expanded && post.text.split("\n").length > 5 && (
        <button onClick={() => setExpanded(true)}>더 보기</button>
      )}
      {expanded && <button onClick={() => setExpanded(false)}>접기</button>}
      <span>{post.time}</span>
    </div>
  );
};

export default PostItem;
