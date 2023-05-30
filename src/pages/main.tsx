import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

function Main() {
  return (
    <>
      <Header />
      <Link to="/plan-list">go to plan list page</Link>
    </>
  );
}

export default Main;
