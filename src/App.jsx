import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SongList from './components/SongList/SongList';
import Player from './components/Player/Player';
import { searchTracks, searchAlbums, searchArtists } from './api/musicApi';
import styles from './styles/layout.module.css';

function App() {
const [searchResults, setSearchResults] = useState([]);
const [currentSongUrl, setCurrentSongUrl] = useState(null);
// https://cors-anywhere.herokuapp.com/corsdemo 
const handleSearch = async (searchTerm, filterType) => {
setSearchResults([]);
if (searchTerm) {
let results = [];
switch (filterType) {
case 'album':
results = await searchAlbums(searchTerm);
break;
case 'artist':
results = await searchArtists(searchTerm);
break;
default:
results = await searchTracks(searchTerm);
break;
}
setSearchResults(results);
}
};

const handleSongSelect = (previewUrl) => {
setCurrentSongUrl(previewUrl);
};

return (
   
<div className={styles.container}>
 
<SearchBar onSearch={handleSearch} />
<SongList songs={searchResults} onSongSelect={handleSongSelect} />
{currentSongUrl && <Player currentSongUrl={currentSongUrl} />}
</div>

);
}

export default App;
