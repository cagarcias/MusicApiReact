import React from 'react';
import SongCard from '../SongCard/SongCard';
import styles from './SongList.module.css';

const SongList = ({ songs, onSongSelect }) => {
if (!songs || songs.length === 0) {
return <p>No results found. <br></br><a href="https://cors-anywhere.herokuapp.com/corsdemo">To temporarily unlock access to the demo, click demo serve</a></p>;
}

return (
<div className={styles.songList}>
{songs.map((song) => (
<SongCard key={song.id} song={song} onSongSelect={onSongSelect} />
))}
</div>
);
};

export default SongList;