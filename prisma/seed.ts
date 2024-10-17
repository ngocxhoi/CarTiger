import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

// Dữ liệu do bạn cung cấp
const cars = ["Old", "New"];
const themes = ["Light", "Dark"]; // Không được sử dụng trong các model hiện tại
const carMakes = ["Audi", "BMW", "Mercedes"];
const pricing = [4000, 8000, 10000, 20000];

const categories = [
  "Sedan",
  "SUV",
  "Truck",
  "Electric",
  "Hatchback",
  "Convertible",
  "Coupe",
];
const conditions = cars; // ["Old", "New"]
const types = ["Hybrid", "Electric", "Gasoline", "Diesel"];
const driveTypes = ["AWD", "RWD", "FWD"];
const transmissions = ["Automatic", "Manual"];
const fuelTypes = ["Electric", "Petrol", "Diesel", "Hybrid"];
const doorTypes = ["2 Doors", "4 Doors"];
const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow"];
const offerTypes = ["For Sale", "For Rent", "Lease"];

const featuresList = {
  airConditioner: false,
  leatherSeats: false,
  touchscreenDisplay: false,
  childSafetyLocks: false,
  stabilityControl: false,
  rainSensingWiper: false,
  comfortAndConvenience: false,
  bluetooth: false,
  vanityMirror: false,
  digitalOdometer: false,
  panoramicMoonroof: false,
  antiLockBraking: false,
  driverAirBag: false,
  tractionControl: false,
  rearSpoiler: false,
  androidAuto: false,
  homeLink: false,
  heater: false,
  tachometer: false,
  brakeAssist: false,
  powerDoorLocks: false,
  fogLightsFront: false,
  windowsElectric: false,
  appleCarplay: false,
  powerSteering: false,
};

async function main() {
  // Xóa dữ liệu hiện tại (tuỳ chọn)
  // await prisma.carImage.deleteMany();
  // await prisma.carListing.deleteMany();

  // Tạo dữ liệu CarListing
  const carListingsData = Array.from({ length: 10 }).map(() => {
    const make = faker.helpers.arrayElement(carMakes);
    const sellingPrice = faker.helpers.arrayElement(pricing);
    const originalPriceOptions = pricing.filter(
      (price) => price >= sellingPrice
    );
    const originalPrice = faker.helpers.arrayElement([
      null,
      ...originalPriceOptions,
    ]);

    return {
      listingTitle: `${make} ${faker.vehicle.model()}`,
      tagline: faker.lorem.sentence(),
      originalPrice: originalPrice,
      sellingPrice: sellingPrice,
      categories: faker.helpers.arrayElement(categories),
      condition: faker.helpers.arrayElement(conditions),
      type: faker.helpers.arrayElement(types),
      make: make,
      model: faker.vehicle.model(),
      year: faker.number.int({ min: 2000, max: 2024 }),
      driveType: faker.helpers.arrayElement(driveTypes),
      transmission: faker.helpers.arrayElement(transmissions),
      fuelType: faker.helpers.arrayElement(fuelTypes),
      mileage: faker.number.int({ min: 0, max: 200000 }),
      engineSize: faker.number.int({ min: 1, max: 6 }),
      cylinder: faker.number.int({ min: 3, max: 12 }),
      color: faker.helpers.arrayElement(colors),
      doorType: faker.helpers.arrayElement(doorTypes),
      vin: faker.vehicle.vin(),
      offerType: faker.helpers.arrayElement(offerTypes),
      listingDescription: faker.lorem.paragraphs(2),
      features: JSON.stringify(featuresList),
      author: "hanbangxh@gmail.com",
      // createdAt và updatedAt sẽ được tự động thiết lập
    };
  });

  // Tạo nhiều CarListing cùng lúc
  await prisma.carListing.createMany({
    data: carListingsData,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
