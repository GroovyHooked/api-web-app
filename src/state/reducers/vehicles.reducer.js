const reducer2 = (state = [], action) => {
  const vehiculeUrl1 = "https://swapi.dev/api/vehicles/?page=1";
  const vehiculeUrl2 = "https://swapi.dev/api/vehicles/?page=2";
  const vehiculeUrl3 = "https://swapi.dev/api/vehicles/?page=3";
  const vehiculeUrl4 = "https://swapi.dev/api/vehicles/?page=4";

  const fetchVehicules = async () => {
    const response1 = await fetch(vehiculeUrl1);
    const data1 = await response1.json();
    const data11 = data1.results;

    const response2 = await fetch(vehiculeUrl2);
    const data2 = await response2.json();
    const data12 = data2.results;

    const response3 = await fetch(vehiculeUrl3);
    const data3 = await response3.json();
    const data13 = data3.results;

    const response4 = await fetch(vehiculeUrl4);
    const data4 = await response4.json();
    const data14 = data4.results;

    data11.forEach((e) => state.push(e.name));
    data12.forEach((e) => state.push(e.name));
    data13.forEach((e) => state.push(e.name));
    data14.forEach((e) => state.push(e.name));
  };
  try {
    fetchVehicules();
  } catch (err) {
    console.error(err);
  }

  return state;
};
export default reducer2;
