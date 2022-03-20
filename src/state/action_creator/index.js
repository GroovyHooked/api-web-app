export const refreshMovies = () => {
  const moviesUrl = "https://swapi.dev/api/films/";
  let payload = [];

  const feedState = async () => {
    const response = await fetch(moviesUrl);
    const movieUrls = await response.json();
    const data = movieUrls.results;
    data.forEach((e) => {
      payload.push(e);
    });
  };

  try {
    feedState();
  } catch (e) {
    console.error(e);
  }

  return (dispatch) => {
    dispatch({
      type: "refreshMovies",
      payload: payload,
    });
  };
};

export const refreshVehicules = () => {
  let payload = [];
  const vehicleUrl1 = "https://swapi.dev/api/vehicles/?page=1";
  const vehicleUrl2 = "https://swapi.dev/api/vehicles/?page=2";
  const vehicleUrl3 = "https://swapi.dev/api/vehicles/?page=3";
  const vehicleUrl4 = "https://swapi.dev/api/vehicles/?page=4";

  const fetchVehicles = async () => {
    const response1 = await fetch(vehicleUrl1);
    const data1 = await response1.json();
    const data11 = data1.results;

    const response2 = await fetch(vehicleUrl2);
    const data2 = await response2.json();
    const data12 = data2.results;

    const response3 = await fetch(vehicleUrl3);
    const data3 = await response3.json();
    const data13 = data3.results;

    const response4 = await fetch(vehicleUrl4);
    const data4 = await response4.json();
    const data14 = data4.results;

    data11.forEach((e) => payload.push(e));
    data12.forEach((e) => payload.push(e));
    data13.forEach((e) => payload.push(e));
    data14.forEach((e) => payload.push(e));
  };
  try {
    fetchVehicles();
  } catch (err) {
    console.error(err);
  }

  return (dispatch) => {
    dispatch({
      type: "refreshVehicules",
      payload: payload,
    });
  };
};

export const refreshResidents = () => {
  let data = [];
  let payload = {}
  const url1 = "https://swapi.dev/api/people/?page=1";
  const url2 = "https://swapi.dev/api/people/?page=2";
  const url3 = "https://swapi.dev/api/people/?page=3";
  const url4 = "https://swapi.dev/api/people/?page=4";
  const url5 = "https://swapi.dev/api/people/?page=5";
  const url6 = "https://swapi.dev/api/people/?page=6";
  const url7 = "https://swapi.dev/api/people/?page=7";
  const url8 = "https://swapi.dev/api/people/?page=8";
  const url9 = "https://swapi.dev/api/people/?page=9";

  const fetchResidents = async () => {
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    const data11 = data1.results;

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    const data12 = data2.results;

    const response3 = await fetch(url3);
    const data3 = await response3.json();
    const data13 = data3.results;

    const response4 = await fetch(url4);
    const data4 = await response4.json();
    const data14 = data4.results;

    const response5 = await fetch(url5);
    const data5 = await response5.json();
    const data15 = data5.results;

    const response6 = await fetch(url6);
    const data6 = await response6.json();
    const data16 = data6.results;

    const response7 = await fetch(url7);
    const data7 = await response7.json();
    const data17 = data7.results;

    const response8 = await fetch(url8);
    const data8 = await response8.json();
    const data18 = data8.results;

    const response9 = await fetch(url9);
    const data9 = await response9.json();
    const data19 = data9.results;
    data11.forEach((e) => {
      data.push(e.name);
    });
    data12.forEach((e) => {
      data.push(e.name);
    });
    data13.forEach((e) => {
      data.push(e.name);
    });
    data14.forEach((e) => {
      data.push(e.name);
    });
    data15.forEach((e) => {
      data.push(e.name);
    });
    data16.forEach((e) => {
      data.push(e.name);
    });
    data17.forEach((e) => {
      data.push(e.name);
    });
    data18.forEach((e) => {
      data.push(e.name);
    });
    data19.forEach((e) => {
      data.push(e.name);
    });
  };

  data.map((element, index) => {
        return payload[index] = element
  })

  try {
    fetchResidents();
} catch (err) {
    console.error(err);
}
return (dispatch) => {
  dispatch({
    type: "refreshResidents",
    payload: payload,
  });
};
  
};
