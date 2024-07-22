import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bike } from './bikeTypes';

interface BikesState {
  bikes: Bike[];
  searchTerm: string;
  sortInput: keyof Bike | '';
  sortOrder: 'asc' | 'desc';
}

const initialState: BikesState = {
  bikes: [],
  searchTerm: '',
  sortInput: '',
  sortOrder: 'asc',
};

const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setBikes: (state, action: PayloadAction<Bike[]>) => {
      state.bikes = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
    sortBikes: (state, action: PayloadAction<{ field: keyof Bike, order: 'asc' | 'desc' }>) => {
      const { field, order } = action.payload;
      state.sortInput = field;
      state.sortOrder = order;
      state.bikes.sort((a, b) => {
        const A = a[field];
        const B = b[field];
        if (order === 'asc') {
          return A < B ? -1 : A > B ? 1 : 0;
        } else {
          return A < B ? 1 : A > B ? -1 : 0;
        }
      });
    },
  },
});

export const { setBikes, setSearchTerm, clearSearchTerm, sortBikes } = bikesSlice.actions;

export default bikesSlice.reducer;
