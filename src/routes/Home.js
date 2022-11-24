import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";
import "../styles/styles.css";
/* 오 styles.css 에 body를 적용했는데, 가져오니까 body에 자동 적용됨. 신기 */

function Home() {
  // Home라우트는 기본적으로 기존의 App Component 전부를 가지게 됨.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              medium_cover_image={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
