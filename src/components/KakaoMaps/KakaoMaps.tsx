import { useEffect, useRef } from 'react';
import styles from './KakaoMaps.module.css';

interface Props {
  mycenter: { lat: number; lng: number };
  mylevel: number;
}

function KakaoMaps({ mycenter, mylevel }: Props): JSX.Element {
  // const mapRef = useRef(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(mycenter.lat, mycenter.lng),
      level: mylevel,
    };
    mapRef.current = new window.kakao.maps.Map(container, options);
  }, []);

  useEffect(() => {
    // Update the map center when the center prop changes
    if (mapRef.current) {
      const newCenter = new window.kakao.maps.LatLng(mycenter.lat, mycenter.lng);
      mapRef.current.setCenter(newCenter);
    }
  }, [mycenter]);

  useEffect(() => {
    // Update the map level when the level prop changes
    if (mapRef.current) {
      mapRef.current.setLevel(mylevel);
    }
  }, [mylevel]);

  return (
    <div id="map" ref={mapRef} className={styles.body}> </div>
  );
}

export default KakaoMaps;
