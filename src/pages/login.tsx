import { Link } from 'react-router-dom';
import EmailLogin from '../components/Login/EmailLogin/EmailLogin';
import GoogleLogin from '../components/Login/GoogleLogin/GoogleLogin';
import KakaoLogin from '../components/Login/KakaoLogin/KakaoLogin';

function Login(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        margin: '0 auto',
      }}
    >
      <h1 style={{ margin: '5rem 0' }}>
        <Link to="/" style={{ color: '#35E0A1', fontSize: '50px' }}>
          Route Master
        </Link>
      </h1>
      <EmailLogin />
      <GoogleLogin />
      <KakaoLogin />
    </div>
  );
}

export default Login;
