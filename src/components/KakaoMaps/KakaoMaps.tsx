import { useEffect, useRef } from 'react';
import styles from './KakaoMaps.module.css';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function KakaoMaps(): JSX.Element {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new kakao.maps.Map(mapRef.current, {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 3,
    });
  }, []);

  return (
    <div id="map" ref={mapRef} className={styles.body}> </div>
  );
}

export default KakaoMaps;
