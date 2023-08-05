import AttractionList from '../components/AttractionList/AttractionList';
import SideFilteringBar from '../components/SideFilteringBar/SideFilteringBar';

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
      <SideFilteringBar type="hotels" />
      <AttractionList />
    </div>
  );
}

export default Hotels;
