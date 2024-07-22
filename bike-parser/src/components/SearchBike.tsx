import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearchTerm, setSearchTerm, sortBikes } from "../features/bikes/bikeSlice";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { Bike } from "../features/bikes/bikeTypes";

const SearchBike: React.FC = () => {
    const dispatch = useDispatch();
    const [searchParam, setSearchParam] = useState('');
    const [sortParam, setSortParam] = useState<keyof Bike>('Make');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParam(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchParam));
    };

    const handleClear = () => {
        setSearchParam('');
        dispatch(clearSearchTerm());
    };

    const handleSort = (value: keyof Bike) => {
        setSortParam(value);
        dispatch(sortBikes({field: value, order: sortOrder}));
    };

    const handleOrder = (order: 'asc' | 'desc') => {
        setSortOrder(order);
        dispatch(sortBikes({ field: sortParam, order}));
    };

    const sortList = [
        { value: 'Make', label: 'Make' },
        { value: 'Model', label: 'Model' },
        { value: 'Year', label: 'Year' },
        { value: 'Price', label: 'Price' },
        { value: 'Terrain', label: 'Terrain' }
    ] as { value: keyof Bike; label: string }[];

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchParam} onChange={handleChange} placeholder="Find Bikes" />
            <br />
            <Button type="submit">Search</Button>
            <Button type="button" onClick={handleClear}>Clear</Button>
          </form>
          <Dropdown options={sortList} onChange={handleSort} value={sortParam} />
            <div>
                <Button type="button" onClick={() => handleOrder('asc')}>Asc</Button>
                <Button type="button" onClick={() => handleOrder('desc')}>Desc</Button>
            </div>
        </div>
    );
};

export default SearchBike;
