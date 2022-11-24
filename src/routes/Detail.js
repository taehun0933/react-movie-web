import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";
import "../styles/styles.css";

function Detail() {
  const { id } = useParams(); // {} 작성을 통해서, 기존 useParams가 넘겨주는 object 인자 속 원소를 바로 가져옴.
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movie);
        setLoading(false);
      });
  }, []);
  console.log(movie);
  return (
    <div className={styles.bg}>
      {loading ? (
        <div className={styles.loader}>loading...</div>
      ) : (
        <div>
          <div className={styles.bgImgContainer}>
            <img src={movie.background_image} alt="backgroundImg_movie"></img>
          </div>
          <div className={styles.detailContainer}>
            <div>
              <img
                className={styles.img}
                src={movie.medium_cover_image}
                alt={movie.title}
              ></img>
            </div>
            <div className={styles.describeContainer}>
              <div>
                <h1>{movie.title}</h1>
              </div>
              <div>
                <span>{`ratings : ${movie.rating}      `}</span>
                <span>{`downloads : ${movie.download_count}`}</span>
              </div>
              <div>
                <span>{`${movie.year} ‧ `}</span>
                <span>
                  {movie.genres.map((genre) => {
                    return `${genre}/`;
                  })}
                </span>
                <span>
                  {movie.runtime === 0
                    ? ` ‧ Unknown Runtime`
                    : ` ‧ ${movie.runtime}min`}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            {movie.description_full !== "" ? (
              <div>
                <hr></hr>
                <span>{movie.description_full}</span>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
