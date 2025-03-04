import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

const WritePost = ({ addReview }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = () => {
        if (title.trim() === "" || content.trim() === "") return;
      
        const newEntry = {
          id: Date.now(),
          user: "나",
          book: title,
          text: content,
          time: "방금",
          type: "post"
        };
      
        // ✅ 기존 데이터 불러와서 새 데이터 추가 후 저장
        const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        const updatedReviews = [newEntry, ...storedReviews];
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
      
        navigate("/book-review"); // ✅ PostSection이 있는 곳으로 이동
      };

      
    return (
      <div className="write-post">
        <h2>독서 기록 추가</h2>
        <input
          type="text"
          placeholder="책 제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="긴 리뷰 작성"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>저장</button>
      </div>
    );
  };
  
  export default WritePost;