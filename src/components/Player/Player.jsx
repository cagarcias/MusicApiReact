import React, { useState, useEffect, useRef } from 'react';
import styles from './Player.module.css';

const Player = ({ currentSongUrl }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    
    // Event listeners
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const setAudioEnd = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', setAudioEnd);

    if (currentSongUrl) {
      audio.pause();
      audio.src = currentSongUrl;
      audio.load();
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        if (error.name !== 'AbortError') {
          console.error("Audio playback failed:", error);
        }
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }

    // Cleanup function
    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', setAudioEnd);
      audio.pause();
    };
  }, [currentSongUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = e.target.value;
    audio.volume = newVolume;
    setVolume(newVolume);
  };
  
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.player}>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <div className={styles.controls}>
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className={styles.progressBar}
        />
        <span>{formatTime(duration)}</span>
      </div>
      <div className={styles.volumeControl}>
        <span>Volume:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeSlider}
        />
      </div>
     
    </div>
  );
};

export default Player;