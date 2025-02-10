import React from "react";
import PostItem from "./PostItem";
import "./PostSection.css";

const PostSection = ({ reviews, deleteReview }) => {
  return (
    <div className="post-section">
      <h2>📔 독서 기록장</h2>
      <div className="post-list">
        {reviews
          .filter((r) => r.type === "post") // ✅ 독서 기록만 필터링
          .map((post) => (
            <PostItem key={post.id} post={post} deleteReview={deleteReview} />
          ))}
      </div>
      <button className="add-post-btn" onClick={() => window.location.href = "/write"}>
        독서 기록 추가
      </button>
    </div>
  );
};

export default PostSection;
