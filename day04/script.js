///02. 추천 버튼 Click Event 처리하기

const recommendButton = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendButton.addEventListener("click", () => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});

///03. Form 제출 처리하기

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

// searchForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const movieTitle = searchInput.value;

//   searchResult.textContent = `검색한 영화: ${movieTitle}`;
// });

///04. 공백 막기 & 05. 인풋 비우기

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const movieTitle = searchInput.value.trim();

  if (movieTitle === "") {
    return;
  }

  searchResult.textContent = `검색한 영화: ${movieTitle}`;

  searchInput.value = "";
});

/// 06. forEach()로 영화 목록 Console에 출력하기

const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
];

movies.forEach((movie) => {
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}점입니다.`);
});

/// 07. 영화 목록을 화면에 출력하기

const movieList = document.querySelector("#movie-list");

movies.forEach((movie) => {
  const li = document.createElement("li");

  li.textContent = movie.title;

  movieList.append(li);
});


