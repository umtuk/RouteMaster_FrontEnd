import styles from './TotalPrice.module.css';

function TotalPrice(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>Title</div>

      <div className={styles.wrap}>
        <div>총 비용</div>
        <div>₩ 000,000</div>
      </div>
    </div>
  );
}

export default TotalPrice;
