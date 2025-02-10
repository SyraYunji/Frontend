import React, { useState } from "react";
import "./StorySection.css";

const StorySection = ({ reviews, addReview, deleteStory }) => {
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
              <div className="story-title">{story.book}</div> {/* ✅ 책 제목을 별도로 표시 */}
              <div className="story-content">
                <div className="story-text">
                  <span>{story.user}</span>: {story.text} 
                  <small className="story-time">({story.time})</small>
                </div>
                <button className="delete-btn" onClick={() => deleteStory(story.id)}>삭제</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StorySection;
