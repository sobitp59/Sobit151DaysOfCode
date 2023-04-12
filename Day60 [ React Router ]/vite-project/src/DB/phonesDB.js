import { v4 as uuid } from "uuid";

const phonesDB = {
  data: [
    {
      id: uuid(),
      name: "iPhone 11",
      price: 51000,
      memory: 64,
      currency: "INR",
      details: `
        64 GB ROM
        15.49 cm (6.1 inch) Liquid Retina HD Display
        12MP + 12MP | 12MP Front Camera
        A13 Bionic Chip Processor`
    },
    {
      id: uuid(),
      name: "iPhone XR",
      price: 41000,
      memory: 64,
      currency: "INR",
      details: `
        64 GB ROM
        15.5 cm (6.102 inch) Display
        12MP Rear Camera | 7MP Front Camera
        A12 Bionic Chip Processor
        iOS 13 Compatible`
    },
    {
      id: uuid(),
      name: "iPhone 12",
      price: 81000,
      memory: 128,
      currency: "INR",
      details: `
        128 GB ROM
        15.49 cm (6.1 inch) Super Retina XDR Display
        12MP + 12MP | 12MP Front Camera
        A14 Bionic Chip with Next Generation Neural Engine Processor
        Ceramic Shield
        IP68 Water Resistance
        All Screen OLED Display`
    },
    {
      id: uuid(),
      name: "iPhone SE",
      price: 37999,
      memory: 128,
      currency: "INR",
      details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A13 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`
    }
  ]
};

export default phonesDB;
