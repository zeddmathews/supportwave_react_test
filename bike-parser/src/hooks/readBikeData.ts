
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBikes } from '../features/bikes/bikeSlice';
import data from '../data/bikes_response.json';
import { Bike } from '../features/bikes/bikeTypes';


const useBikes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBikes(data as Bike[]));
  }, [dispatch]);
};

export default useBikes;
