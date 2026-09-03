const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 1,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

const { title, vote_average } = movie;
console.log(`영화 제목:${title}`);
console.log(`평점:${vote_average}`);

const { title: tt, vote_average: vag } = movie;

// console.log(`영화 제목:${tt}`);
// console.log(`평점:${vag}`);

// const [firstGenre, secondGenre] = genres;

// console.log(firstGenre);
// console.log(secondGenre);

// movie.detail 뒤에 ?.을 붙여 안전하게 접근

// const director = movie.detail?.director;

// console.log(director);

// const undifined = director ?? "감독 정보 없음";
// console.log(undifined);

const { vote_count, detail } = movie;

console.log(vote_count || 100);
console.log(vote_count ?? 0);
