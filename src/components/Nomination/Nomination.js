import styles from './Nomination.module.scss';
import { AiFillDelete } from 'react-icons/ai';

const Nomination = ({ title, year, removeNomination, id }) => {
  return (
    <div className={styles.nominationWrapper}>
      <button
        className={styles.removeButton}
        onClick={() => removeNomination(id)}
        title="Remove"
      >
        <AiFillDelete className={styles.removeIcon} />
      </button>{' '}
      <span>{title}</span> &nbsp;
      <span>({year})</span>
    </div>
  );
};

export default Nomination;
