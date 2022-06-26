const faker = require("faker");
faker.setLocale("fr");
const fs = require("fs");
const generateEventsData = (number) => {
  const events = [];
  while (number >= 0) {
    events.push({
      id: number,
      title: faker.company.bsAdjective(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(100, 200, 0, "€"),
      picture: faker.image.nature(150, 150, true),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      month_date: faker.date.month(true),
      day_date: faker.datatype.number({ min: 1, max: 31 }),
      year_date: faker.datatype.number({ min: 2021, max: 2023 }),
    });
    number--;
  }
  return events;
};
fs.writeFileSync(
  "./data/db.json",
  JSON.stringify({ events: generateEventsData(20) })
);
