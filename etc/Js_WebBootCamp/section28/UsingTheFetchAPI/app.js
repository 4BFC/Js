// fetch('https://swapi.dev/api/people/1')
//   .then(res => {
//     console.log("RESOLVED!", res);
//     res.json().then(data => console.log("JSON DONE", data));
//     //JSON.parse()와는 다르다.
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(e => {
//     console.log("ERROR!", e);
//   })

// fetch('https://swapi.dev/api/people/1')
//   .then(res => {
//     console.log("RESOLVED!", res);
//     return res.json();
//     //JSON.parse()와는 다르다.
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch('https://swapi.dev/api/people/2');
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch('https://swapi.dev/api/people/3');
//   })
//   .then((res) => {
//     console.log("THIRD REQUEST RESOLVED!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(e => {
//     console.log("ERROR!", e);
//   })

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1');
    const data = await res.json();
    console.log(data);
    const res2 = await fetch('https://swapi.dev/api/people/2');
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!", e);
  }
}

loadStarWarsPeople();