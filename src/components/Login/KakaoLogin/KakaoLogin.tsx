import styles from './KakaoLogin.module.css';

function KakaoLogin(): JSX.Element {
  return (
    <button className={styles.btn} type="submit">
      Kakao Login
    </button>
  );
}

export default KakaoLogin;
