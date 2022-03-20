function reducer2(state = [], action) {
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

        data11.forEach((e) => state.push(e));
        data12.forEach((e) => state.push(e));
        data13.forEach((e) => state.push(e));
        data14.forEach((e) => state.push(e));
    };
    try {
        fetchVehicles();
    } catch (err) {
        console.error(err);
    }
    console.log("recducerVehi::state => ", state);
    return state;
}
export default reducer2;
