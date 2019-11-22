// export async function getDiscoverMusic() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
//   );
//   const data = await response.json();
//   return data.results;
// }

export async function getDiscoverMusic(value) {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${value}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
  );
  const data = await response.json();
  return data.topartists.artist;
}
