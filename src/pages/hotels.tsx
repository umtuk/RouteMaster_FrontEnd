import ItemList from '../components/ItemList/ItemList';
import SideFilteringBar from '../components/SideFilteringBar/SideFilteringBar';
import Header from '../components/Header/Header';

function Hotels(): JSX.Element {
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default Hotels;
