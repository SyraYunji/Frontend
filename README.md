**현재 폴더 구조(윤지) - 0210**

BookReviewApp/ <br />
│── src/<br />
│   ├── BookReview/          # 메인 폴더 <br />
│   │   ├── story/           # 책 스토리 관련 컴포넌트 <br />
│   │   │   ├── StorySection.js  
│   │   │   ├── StorySection.css
│   │   ├── post/            # 독서 기록 관련 컴포넌트
│   │   │   ├── PostSection.js  
│   │   │   ├── PostSection.css  
│   │   │   ├── PostItem.js
│   │   ├── Pages/           # 페이지별 컴포넌트
│   │   │   ├── WritePost.js
│   │   ├── BookReview.js    # 전체 관리하는 메인 컴포넌트
│   │   ├── BookReview.css
│   ├── App.js               # 라우팅을 관리하는 파일
│   ├── index.js             # 리액트 엔트리 파일
│── public/
│── package.json
│── README.md

📚 BookReview App
│── StorySection (스토리 입력 및 리스트)
│   ├── 책 제목 + 짧은 생각 입력
│   ├── 공유 버튼 클릭 시 localStorage 저장
│   ├── 저장된 스토리 목록 표시
│   ├── 삭제 버튼으로 특정 스토리 삭제
│
│── PostSection (독서 기록 관리)
│   ├── "독서 기록 추가" 버튼 → WritePost 이동
│   ├── 저장된 독서 기록 목록 카드 형태로 표시
│   ├── 삭제 버튼으로 특정 기록 삭제
│
│── WritePost (긴 독서 기록 작성)
│   ├── 책 제목 + 긴 리뷰 입력 후 저장
│   ├── localStorage에 데이터 저장
│   ├── 저장 후 PostSection으로 이동
