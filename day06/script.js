const movie = {
  id: 101,
  title: "Inception",
  voteAverage: 8.4,
  isAdult: false,
};

console.log(movie);

const movieJson = JSON.stringify(movie);

console.log(movieJson);
console.log(typeof movieJson);

// 04. JSON 문자열을 JavaScript 값으로 변환하기
const parsedMovie = JSON.parse(movieJson);

console.log(parsedMovie);
console.log(typeof parsedMovie);
