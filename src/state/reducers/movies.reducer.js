const reducer3 =  (state = [], action) => {

  const moviesUrl = "https://swapi.dev/api/films/";
  
  const feedState = async () => {
  const response = await fetch(moviesUrl);
  const movieUrls = await response.json();
  const data = movieUrls.results;

  data.forEach((e) => {
          state.push(e.title);
    });
  };
  try {
    feedState();
  } catch (e) {
    console.error(e);
  }
  return state;
};
export default reducer3;
