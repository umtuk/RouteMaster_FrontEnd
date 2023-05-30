import React from 'react';
import Header from '../components/Header/Header';
import Calendar from '../components/Calendar/Calendar';

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <div
        style={{
          width: '50%',
          aspectRatio: '1/1',
          marginLeft: '27%',
          marginTop: '5%',
        }}
      >
        <Calendar />
      </div>
    </>
  );
}

export default Main;
