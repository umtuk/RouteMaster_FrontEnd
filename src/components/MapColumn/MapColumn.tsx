import KakaoMaps from '../KakaoMaps/KakaoMaps';
import styles from './MapColumn.module.css';
import SearchBar from '../SearchBar/SearchBar';

function MapColumn(): JSX.Element {
  return (
    <div className={styles.body}>
      <KakaoMaps />
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default MapColumn;
