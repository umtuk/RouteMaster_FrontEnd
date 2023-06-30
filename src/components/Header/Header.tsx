import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LogoImage from '../../assets/images/logo_green.png';

function Header(): JSX.Element {
  return (
    <header className={styles.body}>
      <div className={styles.headerTop}>
        <div className={styles.headerLogo}>
          <div className={styles.img_container}>
            <Link to="/">
              <img src={LogoImage} alt="logo" />
            </Link>
          </div>
          <div className={styles.headerName}>
            <h1>Route Master</h1>
          </div>
        </div>
        <div className={styles.headerBtnContainer}>
          <button type="button" className={styles.headerBtn}>
            <Link to="/plan-list">Trips</Link>
          </button>
          <button type="button" className={styles.headerBtn}>
            <Link to="/">Language</Link>
          </button>
          <button id="login-btn" type="button" className={styles.headerBtn}>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>

      <div className={styles.headerBottom}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <button type="button" className={styles.navBtn}>
              <Link to="/hotels">Hotels</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.navBtn}>
              <Link to="/">Flights</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.navBtn}>
              <Link to="/">Activities</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.navBtn}>
              <Link to="/">Rentals</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.navBtn}>
              <Link to="/">Restaurants</Link>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
