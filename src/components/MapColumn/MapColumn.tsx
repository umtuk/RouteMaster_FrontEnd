import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setLevel } from 'store/Slices/mapSlice';

import KakaoMaps from '../KakaoMaps/KakaoMaps';
import MapColumnLevelController from './LevelController/LevelController';
import styles from './MapColumn.module.css';

function MapColumn(): JSX.Element {
  const dispatch = useDispatch();
  const center = useSelector((state: RootState) => state.map.center);
  const level = useSelector((state: RootState) => state.map.level);

  const zoomIn = () => {
    if (level > 1 && level < 15) dispatch(setLevel(level - 1));
  };

  const zoomOut = () => {
    if (level > 0 && level < 14) dispatch(setLevel(level + 1));
  };

  return (
    <div className={styles.body}>
      <KakaoMaps mycenter={center} mylevel={level} />
      <MapColumnLevelController zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  );
}

export default MapColumn;
