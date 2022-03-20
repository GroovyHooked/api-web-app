const reducer3 =  (state = [], action) => {
    let data = []
  const moviesUrl = "https://swapi.dev/api/films/";
  
  const feedState = async () => {
  const response = await fetch(moviesUrl);
  const movieUrls = await response.json();
  const data = movieUrls.results;
  //console.log(typeof data)
  data.forEach((e) => {
          state.push(e);
        });
        console.log(data)
    }
    feedState();
  if(data.length > 6){
      try {
        feedState();
      } catch (e) {
        console.error(e);
      }
    }
    return state;
};
export default reducer3;
