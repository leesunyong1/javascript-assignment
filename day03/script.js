// 02. 영화 정보 함수 만들기
const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

// 03. 첫 번째 영화 정보 생성 및 콘솔 출력
const message = getMovieMessage("인셉션", 8.4);
console.log(message);

// 04. 제목 변경하기
const titleElement = document.querySelector(".title");
titleElement.textContent = "오늘의 추천 영화";

// 05. 설명 영역 강조하기 (부트스트랩 클래스 추가)
const descriptionElement = document.querySelector(".description");
descriptionElement.classList.add("text-primary", "fw-bold");

// 06. 첫 번째 영화 카드 만들어 추가하기
const movieList = document.querySelector("#movie-list");

const movieCard1 = document.createElement("div");
movieCard1.textContent = message;
movieCard1.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movieCard1);

// 07. 두 번째 영화 카드 만들어 추가하기
const message2 = getMovieMessage("인터스텔라", 8.7);

const movieCard2 = document.createElement("div");
movieCard2.textContent = message2;
movieCard2.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movieCard2);

// // 08. 요소 삭제하기
// movieCard2.remove();
