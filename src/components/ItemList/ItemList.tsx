import LikeButton from 'components/LikeButton/LikeButton';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo_green.png';
import styles from './ItemList.module.css';

function ItemList(): JSX.Element {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const lists = Array.from({ length: 10 }, (_, i) => (
    <Link to={`/restaurant/details/${ids[i]}`} key={i}>
      <li key={i} className={styles.li}>
        <div className={styles.thumb_container}>
          <img src={LogoImg} alt="" className={styles.thumb} />
          <div className={styles.likebtn}>
            <LikeButton />
          </div>
        </div>
        <div className={styles.hotel_info}>
          <h1>{i}. HOTEL</h1>
          <h3>Price</h3>
        </div>
      </li>
    </Link>
  ));
  return <ul className={styles.container}>{lists}</ul>;
}

export default ItemList;
