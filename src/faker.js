const faker = require("faker");
faker.setLocale("fr");
const fs = require("fs");
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      title: faker.company.bsAdjective(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(100, 200, 0, "€"),
      picture: faker.image.sports(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      joining_date: faker.date.soon(30, "2020-01-01T00:00"),
    });
    number--;
  }
  return persons;
};
fs.writeFileSync(
  "./data/db.json",
  JSON.stringify({ users: generatePersonsData(20) })
);
