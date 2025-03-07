import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/rain.jpg",
    "/rain2.jpg"
  ];
  const texts = [
    "비오는 날 읽기 좋은 책",
    "감성 충만한 우울한 날의 추천 도서"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home">
      {/* 캐러셀 */}
      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>&lt;</button>
        <img src={images[currentIndex]} alt="슬라이드" className="rain" />
        <div className="overlay-text">{texts[currentIndex]}</div> {/* 이미지에 맞는 텍스트 출력 */}

        <button className="arrow right" onClick={nextSlide}>&gt;</button>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} />
          ))}
        </div>
      </div>

      {/* 책 차트 섹션 */}
      <div className="book-chart">
        <h2>Book Chart &gt;</h2>
        <div className="book-list">
        <div>
          <img src = "/해리포터.jpg" alt = "해리포터 책" className = "harry"/>
          <div className="book-item"> 해리포터</div>
        </div>

        <div>
          <img src = "/해리포터2.jpg" alt = "해리포터 책" className = "harry"/>
          <div className="book-item"> 해리포터</div>
        </div>

        <div>
          <img src = "/해리포터2.jpg" alt = "해리포터 책" className = "harry"/>
          <div className="book-item"> 해리포터</div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
