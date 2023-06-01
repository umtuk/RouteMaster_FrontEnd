import React from 'react';
import Header from '../components/Header/Header';
import Calendar from '../components/Calendar/Calendar';
import SearchBar from '../components/SearchBar/SearchBar';

function Main(): JSX.Element {
  return (
    <div>
      <Header />
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '900px',
          height: '300px',
          padding: '100px auto',
          margin: '5rem auto',
          backgroundColor: '#C0FFBA', }}
      >
        <SearchBar />
      </div>
      <div
        style={{
          width: '50%',
          aspectRatio: '1/1',
          margin: '0 auto',
          marginTop: '5%',
        }}
      >
        <Calendar />
      </div>
    </div>
  );
}

export default Main;
