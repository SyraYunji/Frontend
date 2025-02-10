import React, { useState } from "react";
import "./StorySection.css";

const StorySection = ({ reviews, addReview, deleteStory }) => { // ✅ deleteStory 추가
  const [bookTitle, setBookTitle] = useState("");
  const [shortReview, setShortReview] = useState("");

  const handleSubmit = () => {
    if (bookTitle.trim() === "" || shortReview.trim() === "") return;

    addReview("나", bookTitle, shortReview, "story");

    setBookTitle("");
    setShortReview("");
  };

  return (
    <div className="story-section">
      <h2>📖 책 스토리</h2>
      <div className="story-input">
        <input
          type="text"
          placeholder="책 제목 입력..."
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="짧은 생각 입력..."
          value={shortReview}
          onChange={(e) => setShortReview(e.target.value)}
        />
        <button onClick={handleSubmit}>공유</button>
      </div>
      <div className="story-list">
        {reviews
          .filter((r) => r.type === "story")
          .map((story) => (
            <div key={story.id} className="story-item">
              <strong>{story.book}</strong> - <span>{story.user}</span>: {story.text} 
              <small>({story.time})</small>
              <button className="delete-btn" onClick={() => deleteStory(story.id)}>삭제</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StorySection;
