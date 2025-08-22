import axios from 'axios';

const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const DEEZER_BASE_URL = 'https://api.deezer.com';
//const API_KEY = '2';
const searchTracks = async (query) => {
try {
const response = await axios.get(`${CORS_PROXY_URL}${DEEZER_BASE_URL}/search?q=${query}`);
//const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/${API_KEY}/searchtrack.php?s=${query}`);

return response.data.data;
} catch (error) {
console.error("Error fetching data from Deezer API via proxy.", error);
return [];
}
};

const searchAlbums = async (query) => {
try {
const response = await axios.get(`${CORS_PROXY_URL}${DEEZER_BASE_URL}/search/album?q=${query}`);
return response.data.data;
} catch (error) {
console.error("Error fetching albums from Deezer API via proxy", error);
return [];
}
};

const searchArtists = async (query) => {
try {
const response = await axios.get(`${CORS_PROXY_URL}${DEEZER_BASE_URL}/search/artist?q=${query}`);
return response.data.data;
} catch (error) {
console.error("Error fetching artists from Deezer API via proxy", error);
return [];
}
};

export { searchTracks, searchAlbums, searchArtists };