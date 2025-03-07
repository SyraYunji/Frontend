
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import StorySection from "./BookReview/story/Story/StorySection";
import PostSection from "./BookReview/story/Post/PostSection";
import BookReview from "./BookReview/story/BookReview";
import WritePost from "./BookReview/story/Pages/WritePost";
import Login from "./Login/login";

const App = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: "Alice", book: "해리포터", text: "정말 감명 깊었어!", time: "2시간 전", type: "story" },
    { id: 2, user: "Bob", book: "원피스", text: "흥미로운 내용이 많았어요.", time: "5시간 전", type: "story" }
  ]);

  // 새로운 리뷰 추가 (스토리 또는 독서기록)
  const addReview = (user, book, text, type) => {
    const newEntry = {
      id: reviews.length + 1,
      user,
      book,
      text,
      time: "방금",
      type
    };
    setReviews([newEntry, ...reviews]);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/story-section", element: <StorySection reviews={reviews} addReview={addReview} /> },
    { path: "/post-section", element: <PostSection reviews={reviews} addReview={addReview} /> },
    { path: "/book-review", element: <BookReview reviews={reviews} addReview={addReview} /> }, // ✅ 상태 전달
    { path: "/write", element: <WritePost addReview={addReview} /> }, // ✅ 상태 전달
    {path: "/login", element: <Login />},
  ]);

  return <RouterProvider router={router} />;
};

export default App;
