import LogoImg from '../../assets/images/logo_green.png';
import styles from './ItemList.module.css';

function ItemList(): JSX.Element {
  const lists = Array.from({ length: 10 }, (_, i) => (
    <li key={i} className={styles.body}>
      <img src={LogoImg} alt="" />
      <div className={styles.hotel_info}>
        <h1>{i}. HOTEL</h1>
        <h3>Price</h3>
      </div>
    </li>
  ));
  return <ul>{lists}</ul>;
}

export default ItemList;
