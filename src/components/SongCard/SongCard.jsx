import React from 'react';
import styles from './SongCard.module.css';

const SongCard = ({ song, onSongSelect }) => {
const handleSelect = () => {
onSongSelect(song.preview); // Assuming Deezer's API has a 'preview' URL
};

return (
<div className={styles.songCard} onClick={handleSelect}>
{song.album && song.album.cover_medium && (
<img src={song.album.cover_medium} alt={song.title} className={styles.albumCover} />
)}
<div className={styles.songInfo}>
<h3 className={styles.songTitle}>{song.title}</h3>
{song.artist && <p className={styles.artistName}>{song.artist.name}</p>}
{song.album && <p className={styles.albumName}>{song.album.title}</p>}
</div>
</div>
);
};

export default SongCard;