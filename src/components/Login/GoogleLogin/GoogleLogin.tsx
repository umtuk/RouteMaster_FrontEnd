import styles from './GoogleLogin.module.css';

function GoogleLogin(): JSX.Element {
  return (
    <button className={styles.btn} type="submit">
      Google Login
    </button>
  );
}

export default GoogleLogin;
