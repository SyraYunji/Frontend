import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = ({ reviews }) => {
  const { id } = useParams();
  const post = reviews.find((r) => r.id === parseInt(id));

  return (
    <div className="post-detail">
      <h2>{post.book}</h2>
      <p>{post.text}</p>
      <button onClick={() => window.history.back()}>뒤로 가기</button>
    </div>
  );
};

export default PostDetail;
