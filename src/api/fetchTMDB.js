const baseUrl = 'https://api.themoviedb.org/4';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export async function fetchMoviesBySearchText(searchText, pageNumber) {
  const endpoint = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=${pageNumber}&include_adult=false`;
  const data = await fetch(endpoint);
  return await data.json();
}

export async function fetchMovieDetailById(id) {
  const endpoint = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
  const data = await fetch(endpoint);
  return await data.json();
}