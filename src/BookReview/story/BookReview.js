import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import StorySection from "./Story/StorySection";
import PostSection from "./Post/PostSection";
import WritePost from "../../BookReview/story/Pages/WritePost";
import "./BookReview.css";

const BookReview = () => {
  const navigate = useNavigate();

  // ✅ `localStorage`에서 기존 데이터 불러오기
  const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const [reviews, setReviews] = useState(storedReviews);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedData);
  }, []);

  // ✅ 새로운 리뷰 추가
  const addReview = (user, book, text, type) => {
    const newEntry = {
      id: Date.now(),
      user,
      book,
      text,
      time: "방금",
      type
    };

    const updatedReviews = [newEntry, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // ✅ localStorage 업데이트
    navigate("/book-review"); // ✅ PostSection이 있는 곳으로 이동
  };

  // ✅ 독서 기록 삭제 기능 추가
  const deleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // ✅ localStorage 업데이트
  };

  // ✅ 스토리 삭제 기능 추가
  const deleteStory = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // 
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="book-review">
            <h1>📚 나의 책 후기</h1>
            <StorySection reviews={reviews} addReview={addReview} deleteStory={deleteStory} className = "story-grid"/> 
            <PostSection reviews={reviews} deleteReview={deleteReview} />
          </div>
        }
      />
      <Route path="/write" element={<WritePost addReview={addReview} />} />
    </Routes>
  );
};

export default BookReview;