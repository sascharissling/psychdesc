// How to link value from searchbar?

export async function getDiscoverMusic(value) {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${value}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
  );
  const data = await response.json();
  return data.topartists.artist;
}
