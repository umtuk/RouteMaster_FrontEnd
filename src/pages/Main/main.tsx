import MainHeader from 'components/MainHeader/MainHeader';
import Calendar from '../../components/Calendar/Calendar';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './main.module.css';

function Main(): JSX.Element {
  return (
    <div className={styles.body}>
      <MainHeader />
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      <div
        style={{
          width: '50%',
          aspectRatio: '1/1',
          margin: '0 auto',
          marginTop: '5%',
        }}
      >
        <Calendar />
      </div>
    </div>
  );
}

export default Main;
