import React from 'react';
import './App.css';
import BikeList from './components/BikeList';
import useBikes from './hooks/readBikeData';
import SearchBike from './components/SearchBike';

const App: React.FC = () => {
  useBikes();

  return (
    <div className="App">
      <SearchBike />
      <BikeList />
    </div>
  );
};

export default App;
