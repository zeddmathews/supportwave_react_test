import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Bike } from '../features/bikes/bikeTypes';
import Table from './Table'; // Make sure Table is imported

const BikeList: React.FC = () => {
  const bikes = useSelector((state: RootState) => state.bikes.bikes);
  const searchTerm = useSelector((state: RootState) => state.bikes.searchTerm);

  const filteredBikes = bikes.filter((bike: Bike) =>
    bike.Make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bike.Model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: 'Make', label: 'Make' },
    { key: 'Model', label: 'Model' },
    { key: 'Year', label: 'Year' },
    { key: 'Displacement', label: 'Displacement' },
    { key: 'Price', label: 'Price' },
    { key: 'Terrain', label: 'Terrain' },
    { key: 'Description', label: 'Description' }
  ] as { key: keyof Bike; label: string }[];

  return (
    <div>
      <Table data={filteredBikes} columns={columns} />
    </div>
  );
};

export default BikeList;
