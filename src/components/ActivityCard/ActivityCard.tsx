import styles from './ActivityCard.module.css';

function ActivityCard(): JSX.Element {
  return (
    <div className={styles.body}>
      <div>🥰</div>
      <h3>방금 여행을 만들었습니다!</h3>
      <div>원하는 장소를 저장한 다음 계획을 저장하고 지도에서 봅시다</div>
    </div>
  );
}

export default ActivityCard;
