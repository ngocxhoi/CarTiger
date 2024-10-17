import { faker } from "@faker-js/faker";
type Car = {
  name: string;
  fuelType: string;
  model: string;
  type: string;
  image: string;
  miles: number;
  gearType: string;
  color: string;
  price: string;
};

function createRandomCarList(): Car {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://th.bing.com/th/id/OIP.PNnqhL3qR4nZGOyjA9P6dQHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
    miles: 1000,
    gearType: "Automatic",
    color: faker.vehicle.color(),
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(createRandomCarList, {
  count: 7,
});

export default carList;
export type { Car };
