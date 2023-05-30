import styles from './PlanColumn.module.css';
import PlanInfoBox from '../PlanInfoBox/PlanInfoBox';
import ActivityCard from '../ActivityCard/ActivityCard';

function PlanColumn(): JSX.Element {
  return (
    <div className={styles.body}>
      <div>here is plan-column component</div>
      <PlanInfoBox />
      <ActivityCard />
    </div>
  );
}

export default PlanColumn;
