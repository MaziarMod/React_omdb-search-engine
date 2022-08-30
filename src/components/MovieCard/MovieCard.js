import { BiDetail } from 'react-icons/bi';
import NominateButton from '../NominateButton/NominateButton';
import noPicAvailable from '../../assets/svg/noPicAvailable.svg';
import styles from './MovieCard.module.scss';

const MovieCard = ({
  title,
  year,
  imgsrc,
  nominate,
  id,
  nominated,
  disableNominate,
  setShowModal,
  loadMovieData,
}) => {
  if (imgsrc === 'N/A') imgsrc = noPicAvailable;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img src={imgsrc} className={styles.image} alt="movie banner"></img>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.cardInfoWrapper}>
          <p className={`${styles.cardInfoItem} mb-05`}>
            <span className={styles.cardInfoCategory}>Title:</span>{' '}
            <span className={styles.cardInfo}>{title}</span>
          </p>
          <p className={styles.cardInfoItem}>
            <span className={styles.cardInfoCategory}>Year: </span>
            <span className={styles.cardInfo}>{year}</span>
          </p>
        </div>
        <div className={styles.cardButtonsWrapper}>
          <NominateButton
            nominate={nominate}
            title={title}
            year={year}
            id={id}
            nominated={nominated}
            disableNominate={disableNominate}
            setShowModal={setShowModal}
          />
          <button className={styles.moreInfo} onClick={() => loadMovieData(id)}>
            <BiDetail className={styles.detailIcon} />
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
