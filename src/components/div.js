
  const residentsUrl1 = "https://swapi.dev/api/people/?page=1";
  const residentsUrl2 = "https://swapi.dev/api/people/?page=2";
  const residentsUrl3 = "https://swapi.dev/api/people/?page=3";
  const residentsUrl4 = "https://swapi.dev/api/people/?page=4";
  const residentsUrl5 = "https://swapi.dev/api/people/?page=5";
  const residentsUrl6 = "https://swapi.dev/api/people/?page=6";

  const url = "https://swapi.dev/api/people/?page="
  let count = 1;
  
  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      fetch(url + i)
       .then(res => res.json())
       .then(res => {
         setData1([...data1,res.results]);
       })
       .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    //debugger
    fetch(residentsUrl1)
      .then((res) => res.json())
      .then((res) => {
        setData1(res.results);
      })
      .catch((err) => console.log(err));

    fetch(residentsUrl2)
      .then((res) => res.json())
      .then((res) => {
        setData2(res.results);
      })
      .catch((err) => console.log(err));

    fetch(residentsUrl3)
      .then((res) => res.json())
      .then((res) => {
        setData3(res.results);
      })
      .catch((err) => console.log(err));

    fetch(residentsUrl4)
      .then((res) => res.json())
      .then((res) => {
        setData4(res.results);
      })
      .catch((err) => console.log(err));

    fetch(residentsUrl5)
      .then((res) => res.json())
      .then((res) => {
        setData5(res.results);
      })
      .catch((err) => console.log(err));

    fetch(residentsUrl6)
      .then((res) => res.json())
      .then((res) => {
        setData6(res.results);
        setBoolean(true);
      })
      .catch((err) => console.log(err));
  }, []);