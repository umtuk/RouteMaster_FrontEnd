import styles from './PlanInfoBox.module.css';

function PlanInfoBox(): JSX.Element {
  return (
    <div className={styles.body}>
      here is plan-info-box component
      <div>title</div>
      <div>작성자: name</div>
      <a href="/">설명 추가</a>
    </div>
  );
}

export default PlanInfoBox;
