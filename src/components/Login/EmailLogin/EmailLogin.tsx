import styles from './EmailLogin.module.css';

function EmailLogin(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.input_container}>
        <label htmlFor="useremail">
          <b> Useremail </b>
        </label>
        <input
          className={styles.input}
          id="useremail"
          type="text"
          placeholder="Enter email"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="userpwd">
          <b> Password </b>
        </label>
        <input
          className={styles.input}
          id="userpwd"
          type="text"
          placeholder="Enter password"
        />
      </div>
      <button className={styles.login_btn} type="submit">
        Login
      </button>
    </div>
  );
}

export default EmailLogin;
