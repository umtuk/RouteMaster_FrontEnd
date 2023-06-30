import ItemList from '../components/ItemList/ItemList';
import SideFilteringBar from '../components/SideFilteringBar/SideFilteringBar';
import MainHeader from '../components/MainHeader/MainHeader';

function Hotels(): JSX.Element {
  return (
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '90%',
          margin: '0 auto',
          paddingTop: '5rem',
        }}
    >
      <SideFilteringBar />
      <ItemList />
    </div>
  );
}

export default Hotels;
