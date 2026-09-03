const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

async function getNowPlaying() {
  // 03. fetch로 서버에 Request 보내고 Response 대기
  const response = await fetch(URL, options);

  // 04. Response 데이터를 JSON 객체로 파싱
  const data = await response.json();

  // 05. 첫 번째 영화 가져오기
  const firstMovie = data.results[0];

  // 06. 구조 분해 할당으로 제목과 평점 꺼내서 콘솔 출력
  const { title, vote_average } = firstMovie;

  console.log(`제목: ${title}`);
  console.log(`평점: ${vote_average}`);
}

getNowPlaying();
