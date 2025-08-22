import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
const [searchTerm, setSearchTerm] = useState('');
const [filterType, setFilterType] = useState('track');

const handleInputChange = (event) => {
setSearchTerm(event.target.value);
};

const handleFilterChange = (event) => {
setFilterType(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
onSearch(searchTerm, filterType);
};

return (
<div className={styles.searchBar}>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Search for songs, albums..."
value={searchTerm}
onChange={handleInputChange}
className={styles.searchInput}
/>
<select value={filterType} onChange={handleFilterChange} className={styles.filterSelect}>
<option value="track">Songs</option>
<option value="album">Albums</option>

</select>
<button type="submit" className={styles.searchButton}>Search</button>
</form>
</div>
);
};

export default SearchBar;