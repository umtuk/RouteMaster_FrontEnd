import PersonList from 'components/PersonList/PersonList';
import PriceList from 'components/PriceList/PriceList';
import TotalPrice from 'components/TotalPrice/TotalPrice';
import CalButton from 'components/CalButton/CalButton';
import styles from './Calculation.module.css';

function Calculation(): JSX.Element {
  return (
    <div className={styles.container}>
      <PersonList />
      <TotalPrice />
      <PriceList />
      <CalButton />
    </div>
  );
}

export default Calculation;
