import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

function Movie({ id, title, medium_cover_image, summary, genres, year }) {
  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={`movie/${id}`}
      >
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={medium_cover_image} alt={title} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.hi}>
              <p className={styles.info}>{summary}</p>
            </div>
            <div className={styles.genreContainer}>
              {genres.map((genre) => (
                <span className={styles.genre} key={genre}>
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
