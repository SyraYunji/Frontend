import React, { useState } from "react";
import "./StorySection.css";

const StorySection = ({ reviews, addReview, deleteStory }) => {
  const [bookTitle, setBookTitle] = useState("");
  const [shortReview, setShortReview] = useState("");
  const maxReviewLength = 20; // 글자 수 제한 (20자)

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > maxReviewLength) {
      alert("⚠️ 글자 수가 초과되었습니다! (최대 20자)");
      return; // 추가 입력을 막음
    }
    setShortReview(value);
  };

  const handleSubmit = () => {
    if (bookTitle.trim() === "") {
      alert("⚠️ 책 제목을 입력해주세요!");
      return;
    }

    if (shortReview.trim() === "") {
      alert("⚠️ 짧은 생각을 입력해주세요!");
      return;
    }

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
          placeholder={`짧은 생각 입력... (최대 ${maxReviewLength}자)`}
          value={shortReview}
          onChange={handleChange} // ✅ 글자 수 초과 시 alert 발생
        />
        <small className="char-counter">
          {shortReview.length} / {maxReviewLength}
        </small>
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
