import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LogoImage from '../../assets/images/logo_green.png';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className="nav">
        <div className={styles.header__logo}>
          <Link to="/">
            <img src={LogoImage} alt="logo" />
          </Link>
          <h1>Route Master</h1>
        </div>
        <button type="button" className="go-to-planlist">
          <Link to="/plan-list">Trips</Link>
        </button>
        <div className="language">
          <button type="button">
            <Link to="/">English</Link>
          </button>
        </div>
        <button id="login-btn" type="button">
          <Link to="/login">Login</Link>
        </button>
      </div>

      <div className={styles.nav}>
        <ul>
          <li className={styles.li}>
            <button type="button">
              <Link to="/">Hotels</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button">
              <Link to="/">Flights</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button">
              <Link to="/">Activities</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button">
              <Link to="/">Rentals</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button type="button" className={styles.button}>
              <Link to="/">Restaurants</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
