import { Link } from 'react-router-dom';
import styles from './MainHeader.module.css';
import LogoImage from '../../assets/images/logo_green.png';

function MainHeader(): JSX.Element {
  return (
    <header className={styles.body}>
      <div className={styles.header_top}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img src={LogoImage} alt="logo" />
          </Link>
          <h1>Route Master</h1>
        </div>
        <div className={styles.header_btn_container}>
          <button type="button" className={styles.header_btn}>
            <Link to="/plan-list">Trips</Link>
          </button>
          <button type="button" className={styles.header_btn}>
            <Link to="/">Language</Link>
          </button>
          <button id="login-btn" type="button" className={styles.header_btn}>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>

      <div className={styles.header_bottom}>
        <ul>
          <li className={styles.li}>
            <button type="button" className={styles.nav_btn}>
              <Link to="/hotels">Hotels</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.nav_btn}>
              <Link to="/">Flights</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.nav_btn}>
              <Link to="/">Activities</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.nav_btn}>
              <Link to="/">Rentals</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.nav_btn}>
              <Link to="/">Restaurants</Link>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainHeader;
