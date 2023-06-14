import KakaoMaps from '../KakaoMaps/KakaoMaps';
import styles from './MapColumn.module.css';

function MapColumn(): JSX.Element {
  return (
    <div className={styles.body}>
      <KakaoMaps />
    </div>
  );
}

export default MapColumn;
