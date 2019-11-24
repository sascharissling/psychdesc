// How to link value from searchbar?

export async function getDiscoverMusic(value) {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${value}&api_key=b3bdf0f2b851d1ff6f91dab2a0f1763b&format=json`
  );
  const data = await response.json();
  return data.topartists.artist;
}

// For When Zeit Secret Works
// http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${value}&api_key=${process.env.REACT_APP_API_KEY}&format=json
