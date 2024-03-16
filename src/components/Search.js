import React, { useState } from 'react';

export const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for recipes"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};
