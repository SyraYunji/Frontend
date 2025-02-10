# BDA Reading - Frontend

실행 경로 : `npm start`로 실행됨.

## Book Review 브랜치(윤지) - 0210
### 변경 사항
1. BookReview / Story 폴더 안에 'Pages'폴더, 'Story'폴더, 'Post' 폴더 만듦<br />

2. BookReview.js<br />
📌 역할: <br />
① 모든 컴포넌트를 관리하는 페이지<br />
② StorySection과 PostSection을 관리하며, localStorage를 통해 데이터 저장 및 불러오기 <br />
③ 책 스토리(StorySection)와 독서기록장(PostSection)으로 구성<br />
📌 기능: <br />
① 책 스토리는 **책에 대한 간단한 생각(짧은 리뷰)**을 공유 <br />
② 독서기록장은 책을 읽고 느낀 점을 길고 자세하게 기록할 수 있음 <br />
③ localStorage를 활용하여 페이지 새로고침 후에도 데이터 유지<br />
④ 삭제 기능을 지원하여 개별 항목 제거 가능<br />

3. Story 폴더(BookReview / Story / Story): 책에 대한 짧은 생각을 공유하는 공간<br />

    ① StoryItem.js<br />
        - 개별 책 스토리 항목을 표시하는 컴포넌트<br />
        - 책 제목 + 짧은 리뷰 + 삭제 버튼 포함<br />
    ② StorySection.js<br />
        - 사용자가 책 제목 + 짧은 리뷰를 입력할 수 있는 입력창 제공<br />
        - 입력 후 "공유" 버튼을 클릭하면 localStorage에 저장<br />
        - 스토리 목록을 불러와 화면에 표시<br />
        - 삭제 버튼을 눌러 개별 스토리를 삭제 가능<br />
      
4. Post 폴더(BookReview / Story / Post): 책을 읽고 긴 리뷰를 작성하는 공간<br />
    ① PostItem.js<br />
        - 개별 독서 기록 항목을 카드 뉴스 형태로 표시하는 컴포넌트<br />
        - 긴 글은 앞부분만 보이고 "더 보기" 버튼 클릭 시 전체 내용 표시<br />
        - 삭제 버튼 포함<br />
    ② PostSection.js<br />
        - 사용자가 "독서 기록 추가" 버튼을 클릭하면 /write 페이지로 이동
        - 저장된 독서 기록을 PostItem을 이용하여 카드 형태로 표시
        - 삭제 버튼을 눌러 개별 독서 기록을 삭제 가능

5. Pages 폴더(BookReview / Story / Pages): 독서 기록 추가 페이지<br />
     ① WritePost.js<br />
        - 독서 기록을 새롭게 추가하는 페이지<br />
        - 책 제목 + 긴 리뷰 입력 후 "저장" 버튼 클릭 시, localStorage에 저장 후 /BookReview로 이동<br />

   
### 현재 폴더 구조
BookReviewApp  <br />
│── src  <br />
│   ├── BookReview - Story          # 메인 폴더 <br />
│   │   ├── story           # 책 스토리 관련 컴포넌트 <br />
│   │   │   ├── StorySection.js   <br />
│   │   │   ├── StorySection.css  <br />
│   │   ├── post            # 독서 기록 관련 컴포넌트  <br />
│   │   │   ├── PostSection.js  <br />
│   │   │   ├── PostSection.css  <br />
│   │   │   ├── PostItem.js <br />
│   │   ├── Pages           # 페이지별 컴포넌트  <br />
│   │   │   ├── WritePost.js <br />
│   │   ├── BookReview.js    # 전체 관리하는 메인 컴포넌트 <br />
│   │   ├── BookReview.css <br />
│   ├── App.js               # 라우팅을 관리하는 파일 <br />
│   ├── index.js             # 리액트 엔트리 파일 <br />
│── public   <br />
│── package.json  <br />
│── README.md  <br />

### 이제 해야하는 것
1. 스토리에 책 제목끼리 자동으로 묶기
2. 전반적 css 좀 더 깔끔하게 구현
3. 더보기 눌렀을때 아예 새창에서 독서기록장 깔끔하게 뜨도록(예쁘게) 구현
