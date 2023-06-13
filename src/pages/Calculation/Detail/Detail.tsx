import PriceList from 'components/PriceList/PriceList';
import PersonList from 'components/PersonList/PersonList';
import CalButton from 'components/CalButton/CalButton';
import styles from './Detail.module.css';

function CalculationDetail(): JSX.Element {
  return (
    <div className={styles.container}>
      <PersonList />
      <div>
        내야될 돈
        <PriceList />
      </div>
      <div>
        받아야될 돈
        <PriceList />
      </div>
      <CalButton />
    </div>
  );
}

export default CalculationDetail;
