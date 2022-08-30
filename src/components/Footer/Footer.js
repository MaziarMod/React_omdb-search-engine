import styles from './Footer.module.scss';

const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>
        <div className={styles.copyrightWrapper}>
          <span> &copy; OMDB Search Engine, {date.getFullYear()} </span>
        </div>
        <p> Created by Maziar </p>
      </div>
    </footer>
  );
};

export default Footer;
