export const categories = [
  {
    icon: "i-heroicons-truck",
    title: "SUV",
  },
  {
    icon: "i-heroicons-truck",
    title: "Sedan",
  },
  {
    icon: "i-heroicons-truck",
    title: "Hatchback",
  },
  {
    icon: "i-heroicons-truck",
    title: "Coupe",
  },
  {
    icon: "i-heroicons-truck",
    title: "Hybrid",
  },
  {
    icon: "i-heroicons-truck",
    title: "Convertible",
  },
  {
    icon: "i-heroicons-truck",
    title: "Van",
  },
  {
    icon: "i-heroicons-truck",
    title: "Truck",
  },
  {
    icon: "i-heroicons-truck",
    title: "Electric",
  },
];

export const cars = ["New", "Old"];
export const themes = ["Light", "Dark"];
export const carMakes = ["Chevrolet", "Audi", "BMW", "Mercedes"];
export const pricing = ["4000", "8000", "10000", "20000"];

export const listingDetails = [
  {
    label: "Listing Title",
    name: "listingTitle",
    fieldType: "text",
    required: true,
    column: 2,
    icon: "clipboard-list",
  },
  {
    label: "Tagline",
    name: "tagline",
    fieldType: "text",
    column: 2,
    icon: "tag",
  },
  {
    label: "Original Price",
    name: "originalPrice",
    fieldType: "number",
    column: 2,
    icon: "dollar-sign",
  },
  {
    label: "Selling Price",
    name: "sellingPrice",
    fieldType: "number",
    required: true,
    column: 2,
    icon: "dollar-sign",
  },
  {
    label: "Category",
    name: "categories",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "list",
    options: [
      "Sedan",
      "SUV",
      "Truck",
      "Electric",
      "Hatchback",
      "Convertible",
      "Coupe",
    ],
  },
  {
    label: "Condition",
    name: "condition",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "thermometer",
    options: ["New", "Used", "Certified Pre-Owned"],
  },
  {
    label: "Type",
    name: "type",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "settings",
    options: ["Hybrid", "Electric", "Gasoline", "Diesel"],
  },
  {
    label: "Make",
    name: "make",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "car",
    options: ["Chevrolet", "BMW", "Mercedes-Benz"],
  },
  {
    label: "Model",
    name: "model",
    fieldType: "text",
    required: true,
    column: 2,
    icon: "truck",
  },
  {
    label: "Year",
    name: "year",
    fieldType: "number",
    required: true,
    column: 2,
    icon: "calendar",
  },
  {
    label: "Drive Type",
    name: "driveType",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "settings",
    options: ["AWD", "RWD", "FWD"],
  },
  {
    label: "Transmission",
    name: "transmission",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "settings",
    options: ["Automatic", "Manual"],
  },
  {
    label: "Fuel Type",
    name: "fuelType",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "droplet",
    options: ["Electric", "Petrol", "Diesel", "Hybrid"],
  },
  {
    label: "Mileage",
    name: "mileage",
    fieldType: "number",
    required: true,
    column: 2,
    icon: "trending-up",
  },
  {
    label: "Engine Size",
    name: "engineSize",
    fieldType: "number",
    column: 2,
    icon: "settings",
  },
  {
    label: "Cylinder",
    name: "cylinder",
    fieldType: "number",
    column: 2,
    icon: "settings",
  },
  {
    label: "Color",
    name: "color",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "palette",
    options: ["Black", "White", "Red", "Blue", "Green", "Yellow"],
  },
  {
    label: "Door Type",
    name: "doorType",
    fieldType: "select",
    required: true,
    column: 2,
    icon: "door-open",
    options: ["2 Doors", "4 Doors"],
  },
  {
    label: "VIN",
    name: "vin",
    fieldType: "text",
    column: 2,
    icon: "hash",
  },
  {
    label: "Offer Type",
    name: "offerType",
    fieldType: "text",
    column: 2,
    icon: "gift",
  },
  {
    label: "Listing Description",
    name: "listingDescription",
    fieldType: "textarea",
    required: true,
    column: 2,
    icon: "edit-3",
  },
];

export const features = [
  {
    label: "Air Conditioner",
    name: "airConditioner",
    fieldType: "checkbox",
  },
  {
    label: "Leather Seats",
    name: "leatherSeats",
    fieldType: "checkbox",
  },
  {
    label: "Touchscreen Display",
    name: "touchscreenDisplay",
    fieldType: "checkbox",
  },
  {
    label: "Child Safety Locks",
    name: "childSafetyLocks",
    fieldType: "checkbox",
  },
  {
    label: "Stability Control",
    name: "stabilityControl",
    fieldType: "checkbox",
  },
  {
    label: "Rain Sensing Wiper",
    name: "rainSensingWiper",
    fieldType: "checkbox",
  },
  {
    label: "Comfort & Convenience",
    name: "comfortAndConvenience",
    fieldType: "checkbox",
  },
  {
    label: "Bluetooth",
    name: "bluetooth",
    fieldType: "checkbox",
  },
  {
    label: "Vanity Mirror",
    name: "vanityMirror",
    fieldType: "checkbox",
  },
  {
    label: "Digital Odometer",
    name: "digitalOdometer",
    fieldType: "checkbox",
  },
  {
    label: "Panoramic Moonroof",
    name: "panoramicMoonroof",
    fieldType: "checkbox",
  },
  {
    label: "Anti-lock Braking",
    name: "antiLockBraking",
    fieldType: "checkbox",
  },
  {
    label: "Driver Air Bag",
    name: "driverAirBag",
    fieldType: "checkbox",
  },
  {
    label: "Traction Control",
    name: "tractionControl",
    fieldType: "checkbox",
  },
  {
    label: "Rear Spoiler",
    name: "rearSpoiler",
    fieldType: "checkbox",
  },
  {
    label: "Android Auto",
    name: "androidAuto",
    fieldType: "checkbox",
  },
  {
    label: "HomeLink",
    name: "homeLink",
    fieldType: "checkbox",
  },
  {
    label: "Heater",
    name: "heater",
    fieldType: "checkbox",
  },
  {
    label: "Tachometer",
    name: "tachometer",
    fieldType: "checkbox",
  },
  {
    label: "Brake Assist",
    name: "brakeAssist",
    fieldType: "checkbox",
  },
  {
    label: "Power Door Locks",
    name: "powerDoorLocks",
    fieldType: "checkbox",
  },
  {
    label: "Fog Lights Front",
    name: "fogLightsFront",
    fieldType: "checkbox",
  },
  {
    label: "Windows - Electric",
    name: "windowsElectric",
    fieldType: "checkbox",
  },
  {
    label: "Apple CarPlay",
    name: "appleCarplay",
    fieldType: "checkbox",
  },
  {
    label: "Power Steering",
    name: "powerSteering",
    fieldType: "checkbox",
  },
];