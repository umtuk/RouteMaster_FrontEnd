import styles from './PriceList.module.css';

function PriceList(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.person}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/10751/10751887.png"
            alt="person"
          />
        </div>
        <div className={styles.price}>₩ 000,000</div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.person}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4440/4440953.png"
            alt="person"
          />
        </div>
        <div className={styles.price}>₩ 000,000</div>
      </div>
      <div>
        <button type="submit">정산하기</button>
      </div>
    </div>
  );
}

export default PriceList;
