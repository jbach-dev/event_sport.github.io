// import fake from 'ts-faker';
import { faker } from '@faker-js/faker';
// faker.setLocale('fr');

import fs from 'fs';

// function Faker_fct() {

//   var faker = require('faker');
//   // const fs = require('fs').promises;
//   // var fs = require('fs');
//   var str: Array = {};
  
//   for (var i=0;i<100;i++)
//     str += faker.name.firstName() + '\t' + faker.name.lastName() + '\t' + faker.internet.email() + '\t' + faker.name.jobTitle() + '\t' + faker.random.locale() +"\r\n";
  
//   // str.push();
//   // const read = async () => {
//   //   const data = await fs.readFile("monolitic.txt", "binary");
//   //   return data;
//   // }
  
//   // console.log(str);
//   fs.writeFileSync('db.json', str);
//     return (<p></p>);
// }
// export default Faker_fct

function Faker_fct() {

  const createUser = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
    };
  };

  const createUsers = (numUsers = 5) => {
    return Array(numUsers)
        .fill(null)
        .map(createUser);
}
  let fakeUsers = createUsers(5);
  // console.log(fakeUsers);
  fs.readFile('file.txt', function(err, data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for(let i of arr) {
        console.log(i);
    }
});
  // fs.writeFileSync("db.json", JSON.stringify(fakeUsers));
  return (<p></p>)
}
export default Faker_fct
// 	// return {
// 	// 	userId: faker.datatype.uuid(),
// 	// 	console.log(userId);
// 	// };
// 	let city = faker.address.cityName();
// 	let country = faker.address.country();
// 	let street = faker.address.street();
// 	let zipcode = faker.address.zipCode();
// 	let img = faker.image.sports();
// 	let name = faker.commerce.product();
// 	let date = faker.date.soon(10, '2020-01-01T00:00:00');
// 	let description = faker.commerce.productDescription();
// 	console.log(cf
// 	return (
// 		<p>word</p>
// 	);
//   }

// import { useEffect, useState } from "react";

// export default function generatePersonsData() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("/api/customers", {
//         method: "POST",
//         body: JSON.stringify({
//           limit: 100,
//         }),
//       });

//       return response.json();
//     };

//     fetchData().then((data) => {
//       setData(data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Hello, Vercel!</h1>
//       {!data ? "...loading" : <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }