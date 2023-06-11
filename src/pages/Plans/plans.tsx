import MapColumn from '../../components/MapColumn/MapColumn';
import PlanColumn from '../../components/PlanColumn/PlanColumn';
import styles from './plans.module.css';

function Plans(): JSX.Element {
  return (
    <div className={styles.body}>
      <PlanColumn />
      <MapColumn />
    </div>
  );
}

export default Plans;
