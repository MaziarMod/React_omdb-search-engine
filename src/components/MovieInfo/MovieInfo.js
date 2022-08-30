import styles from './MovieInfo.module.scss';
import { MdClose } from 'react-icons/md';

const MovieInfo = ({ info, loading }) => {
  return (
    <div className={styles.infoWrapper}>
      <MdClose className={styles.closeIcon} />
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        <div>
          <p>
            <span>Title:</span> {info.Title}
          </p>
          <p>
            <span>Year:</span> {info.Year}
          </p>
          <p>
            <span>Rated:</span> {info.Rated}
          </p>
          <p>
            <span>Released:</span> {info.Released}
          </p>
          <p>
            <span>Genre:</span> {info.Genre}
          </p>
          <p>
            <span>Director:</span> {info.Director}
          </p>
          <p>
            <span>IMDB rating:</span> {info.imdbRating}
          </p>
          <p>
            <span>Plot:</span> {info.Plot}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
