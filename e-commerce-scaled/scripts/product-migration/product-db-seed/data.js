const brandCategoryMap = {
  Asus: ["Motherboard", "GPU", "CPU", "Monitor"],
  MSI: ["Motherboard", "GPU", "CPU"],
  Dell: ["Laptop", "Monitor"],
  HP: ["Laptop", "Printer", "Scanner"],
  Lenovo: ["Laptop", "Monitor"],
  Apple: ["Laptop", "Operating System"],
  Acer: ["Laptop", "Monitor"],
  Samsung: ["Monitor", "SSD", "Hard Drive"],
};

const brandsIds = {
  Asus: "id",
  MSI: "id",
  Dell: "id",
  HP: "id",
  Lenovo: "id",
  Apple: "id",
  Acer: "id",
  Samsung: "id",
};

const countriesdb = [
  { name: "United States", tax: 0.08 },
  { name: "Canada", tax: 0.05 },
  { name: "Mexico", tax: 0.16 },
  { name: "Brazil", tax: 0.29 },
  { name: "Argentina", tax: 0.21 },
  { name: "Colombia", tax: 0.19 },
  { name: "Peru", tax: 0.18 },
  { name: "Chile", tax: 0.19 },
  { name: "Ecuador", tax: 0.12 },
  { name: "Paraguay", tax: 0.1 },
  { name: "Uruguay", tax: 0.22 },
  { name: "Venezuela", tax: 0.16 },
  { name: "United Kingdom", tax: 0.2 },
  { name: "Germany", tax: 0.19 },
  { name: "France", tax: 0.2 },
  { name: "Italy", tax: 0.22 },
  { name: "Spain", tax: 0.21 },
  { name: "Netherlands", tax: 0.21 },
  { name: "Belgium", tax: 0.21 },
  { name: "Switzerland", tax: 0.07 },
  { name: "Sweden", tax: 0.25 },
  { name: "Norway", tax: 0.25 },
  { name: "Denmark", tax: 0.25 },
  { name: "Finland", tax: 0.24 },
  { name: "Russia", tax: 0.2 },
  { name: "China", tax: 0.13 },
  { name: "Japan", tax: 0.1 },
  { name: "South Korea", tax: 0.1 },
  { name: "India", tax: 0.18 },
  { name: "Australia", tax: 0.1 },
  { name: "New Zealand", tax: 0.15 },
  { name: "Indonesia", tax: 0.1 },
  { name: "Philippines", tax: 0.12 },
  { name: "Thailand", tax: 0.07 },
  { name: "Vietnam", tax: 0.1 },
  { name: "Malaysia", tax: 0.06 },
  { name: "Singapore", tax: 0.07 },
  { name: "Egypt", tax: 0.14 },
  { name: "South Africa", tax: 0.15 },
  { name: "Nigeria", tax: 0.07 },
  { name: "Morocco", tax: 0.2 },
  { name: "Algeria", tax: 0.19 },
  { name: "Tunisia", tax: 0.18 },
  { name: "Kenya", tax: 0.16 },
  { name: "Ghana", tax: 0.12 },
  { name: "Ivory Coast", tax: 0.18 },
  { name: "Senegal", tax: 0.18 },
  { name: "Cameroon", tax: 0.19 },
  { name: "Madagascar", tax: 0.2 },
];

const brandsdb = [
  {
    name: "Asus",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "MSI",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "Dell",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "HP",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "Lenovo",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "Apple",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "Acer",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
  {
    name: "Samsung",
    logo: "https://i.ibb.co/8dVzXnk/brand.png",
  },
];

const categoriesdb = [
  {
    name: "Keyboard",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Mouse",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Monitor",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "CPU",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "GPU",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "RAM",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Hard Drive",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "SSD",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Motherboard",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Power Supply",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Cooling System",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Operating System",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Graphics Card",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Sound Card",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Network Card",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Webcam",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Printer",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Scanner",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
  {
    name: "Speakers",
    image: "https://i.ibb.co/pbVFhct/category.png",
  },
];

const productsdb = {
  Samsung: [
    {
      name: "Samsung Odyssey G9",
      description: "49-inch QHD gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung CRG9",
      description: "Super UltraWide monitor",
      category: "Monitor",
    },
    {
      name: "Samsung T35F",
      description: "24-inch IPS monitor",
      category: "Monitor",
    },
    {
      name: "Samsung ViewFinity S8",
      description: "32-inch UHD monitor",
      category: "Monitor",
    },
    {
      name: "Samsung U32J590",
      description: "32-inch 4K UHD monitor",
      category: "Monitor",
    },
    {
      name: "Samsung LC32G55TQWNXZA",
      description: "32-inch curved gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung S65UA",
      description: "34-inch curved ultrawide monitor",
      category: "Monitor",
    },
    {
      name: "Samsung HW-Q800B",
      description: "Dolby Atmos soundbar",
      category: "Speakers",
    },
    {
      name: "Samsung Sound Tower MX-T50",
      description: "High-power party speaker",
      category: "Speakers",
    },
    {
      name: "Samsung WAM7500",
      description: "Omnidirectional wireless speaker",
      category: "Speakers",
    },
    {
      name: "Samsung CLP-325",
      description: "Compact color laser printer",
      category: "Printer",
    },
    {
      name: "Samsung ProXpress M3320ND",
      description: "Monochrome laser printer",
      category: "Printer",
    },
    {
      name: "Samsung SCX-5637FR",
      description: "Multifunction laser printer",
      category: "Printer",
    },
    {
      name: "Samsung Xpress SL-C430",
      description: "Compact color laser printer",
      category: "Printer",
    },
    {
      name: "Samsung 980 NVMe SSD",
      description: "1TB PCIe 3.0 SSD",
      category: "SSD",
    },
    {
      name: "Samsung 970 PRO NVMe SSD",
      description: "512GB high-speed SSD",
      category: "SSD",
    },
    {
      name: "Samsung PM961",
      description: "OEM NVMe SSD",
      category: "SSD",
    },
    {
      name: "Samsung Portable SSD T7 Shield",
      description: "Rugged external SSD",
      category: "SSD",
    },
    {
      name: "Samsung Galaxy Chromebook 2",
      description: "Lightweight Chrome OS laptop",
      category: "CPU",
    },
    {
      name: "Samsung Notebook 9 Pro",
      description: "Convertible touchscreen laptop",
      category: "CPU",
    },
    {
      name: "Samsung Galaxy Book Flex",
      description: "2-in-1 QLED laptop",
      category: "CPU",
    },
    {
      name: "Samsung Exynos 990",
      description: "Octa-core mobile processor",
      category: "CPU",
    },
    {
      name: "Samsung DDR5 5600MHz",
      description: "32GB high-performance RAM",
      category: "RAM",
    },
    {
      name: "Samsung DDR4 2666MHz",
      description: "16GB laptop memory",
      category: "RAM",
    },
    {
      name: "Samsung DDR3 1600MHz",
      description: "8GB RAM module",
      category: "RAM",
    },
    {
      name: "Samsung PSSD T3",
      description: "Portable SSD with encryption",
      category: "SSD",
    },
    {
      name: "Samsung MU-PC500T",
      description: "500GB ultra-fast SSD",
      category: "SSD",
    },
    {
      name: "Samsung 860 PRO",
      description: "256GB SATA SSD",
      category: "SSD",
    },
    {
      name: "Samsung C27RG50",
      description: "27-inch curved gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung LF27T350",
      description: "27-inch flat IPS monitor",
      category: "Monitor",
    },
    {
      name: "Samsung Galaxy Smart Keyboard",
      description: "Wireless keyboard with trackpad",
      category: "Keyboard",
    },
    {
      name: "Samsung SCX-4623F",
      description: "All-in-one laser printer",
      category: "Printer",
    },
    {
      name: "Samsung PSSD T5",
      description: "Portable 2TB SSD",
      category: "SSD",
    },
    {
      name: "Samsung SmartCam PT",
      description: "Pan-tilt security camera",
      category: "Webcam",
    },
    {
      name: "Samsung JetDrive 725",
      description: "SSD upgrade kit",
      category: "SSD",
    },
    {
      name: "Samsung 870 EVO 250GB",
      description: "SATA SSD for everyday use",
      category: "SSD",
    },
    {
      name: "Samsung Odyssey Neo G7",
      description: "165Hz QHD monitor",
      category: "Monitor",
    },
    {
      name: "Samsung LC32R502FHNXZA",
      description: "32-inch curved monitor",
      category: "Monitor",
    },
    {
      name: "Samsung 49-Inch CRG9",
      description: "Super ultra-wide curved monitor",
      category: "Monitor",
    },
    {
      name: "Samsung SSD PM883",
      description: "Enterprise-grade 960GB SSD",
      category: "SSD",
    },
    {
      name: "Samsung 970 EVO Plus 500GB",
      description: "Fast NVMe SSD",
      category: "SSD",
    },
    {
      name: "Samsung Galaxy Buds Live",
      description: "Wireless noise-canceling earbuds",
      category: "Speakers",
    },
    {
      name: "Samsung PCIe Gen4 PM1735",
      description: "High-performance SSD",
      category: "SSD",
    },
    {
      name: "Samsung Galaxy Chromebook Go",
      description: "Lightweight Chrome OS laptop",
      category: "CPU",
    },
    {
      name: "Samsung DDR4 RDIMM 3200MHz",
      description: "Server-grade memory",
      category: "RAM",
    },
    {
      name: "Samsung 4TB QVO SSD",
      description: "High-capacity SATA SSD",
      category: "SSD",
    },
    {
      name: "Samsung Smart Keyboard Trio 500",
      description: "Wireless Bluetooth keyboard",
      category: "Keyboard",
    },
    {
      name: "Samsung Wireless Mouse Slim",
      description: "Ergonomic wireless mouse",
      category: "Mouse",
    },
    {
      name: "Samsung S27A800U Monitor",
      description: "4K UHD IPS monitor",
      category: "Monitor",
    },
    {
      name: "Samsung CJ791 UltraWide",
      description: "Curved 34-inch monitor",
      category: "Monitor",
    },
    {
      name: "Samsung Odyssey G7",
      description: "240Hz gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung Galaxy Book2 Pro",
      description: "Ultra-thin Intel laptop",
      category: "CPU",
    },
    {
      name: "Samsung Galaxy Book Go",
      description: "Snapdragon-based laptop",
      category: "CPU",
    },
    {
      name: "Samsung DDR5 4800MHz",
      description: "16GB high-speed RAM",
      category: "RAM",
    },
    {
      name: "Samsung DDR4 3200MHz",
      description: "8GB desktop RAM",
      category: "RAM",
    },
    {
      name: "Samsung 970 EVO Plus",
      description: "1TB NVMe SSD",
      category: "SSD",
    },
    {
      name: "Samsung 980 PRO SSD",
      description: "2TB PCIe 4.0 SSD",
      category: "SSD",
    },
    {
      name: "Samsung T7 Portable SSD",
      description: "500GB external SSD",
      category: "SSD",
    },
    {
      name: "Samsung T5 Portable SSD",
      description: "1TB external SSD",
      category: "SSD",
    },
    {
      name: "Samsung 870 EVO",
      description: "2.5-inch 1TB SSD",
      category: "SSD",
    },
    {
      name: "Samsung 870 QVO",
      description: "4TB SATA SSD",
      category: "SSD",
    },
    {
      name: "Samsung 980 NVMe SSD",
      description: "500GB PCIe 3.0 SSD",
      category: "SSD",
    },
    {
      name: "Samsung Spinpoint M9T",
      description: "2TB laptop HDD",
      category: "Hard Drive",
    },
    {
      name: "Samsung 860 EVO",
      description: "500GB SATA SSD",
      category: "SSD",
    },
    {
      name: "Samsung PM9A3 NVMe SSD",
      description: "Enterprise-grade 4TB SSD",
      category: "SSD",
    },
    {
      name: "Samsung SSD 990 PRO",
      description: "PCIe 4.0 gaming SSD",
      category: "SSD",
    },
    {
      name: "Samsung LC27G75TQSNXZA",
      description: "27-inch gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung ML-2525W",
      description: "Monochrome laser printer",
      category: "Printer",
    },
    {
      name: "Samsung Xpress SL-M2020",
      description: "Compact laser printer",
      category: "Printer",
    },
    {
      name: "Samsung Xpress C430W",
      description: "Wireless color printer",
      category: "Printer",
    },
    {
      name: "Samsung SCX-3405FW",
      description: "Multifunction laser printer",
      category: "Printer",
    },
    {
      name: "Samsung SyncMaster S24D390",
      description: "24-inch LED monitor",
      category: "Monitor",
    },
    {
      name: "Samsung SyncMaster 2233RZ",
      description: "120Hz gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung NVMe PM1733",
      description: "Enterprise PCIe SSD",
      category: "SSD",
    },
    {
      name: "Samsung CJ89 Super UltraWide",
      description: "49-inch curved monitor",
      category: "Monitor",
    },
    {
      name: "Samsung Galaxy Buds Pro",
      description: "Wireless noise-canceling earbuds",
      category: "Speakers",
    },
    {
      name: "Samsung Odyssey Neo G8",
      description: "240Hz QHD gaming monitor",
      category: "Monitor",
    },
    {
      name: "Samsung Odyssey Ark",
      description: "55-inch curved 4K monitor",
      category: "Monitor",
    },
    {
      name: "Samsung UJ59 32-inch",
      description: "4K UHD LED monitor",
      category: "Monitor",
    },
    {
      name: "Samsung HW-Q990B",
      description: "Dolby Atmos soundbar",
      category: "Speakers",
    },
    {
      name: "Samsung SmartCam SNH-V6414BN",
      description: "WiFi security camera",
      category: "Webcam",
    },
    {
      name: "Samsung SmartCam HD Pro",
      description: "1080p security webcam",
      category: "Webcam",
    },
    {
      name: "Samsung SSD 860 PRO",
      description: "2TB SATA SSD",
      category: "SSD",
    },
    {
      name: "Samsung Portable SSD X5",
      description: "Thunderbolt 3 SSD",
      category: "SSD",
    },
    {
      name: "Samsung Gear VR Headset",
      description: "Virtual reality headset",
      category: "Graphics Card",
    },
    {
      name: "Samsung Odyssey Z",
      description: "Gaming laptop with RTX",
      category: "Graphics Card",
    },
    {
      name: "Samsung MUF-128AB USB 3.1",
      description: "128GB flash drive",
      category: "Hard Drive",
    },
    {
      name: "Samsung CLX-6260FW",
      description: "Color laser printer",
      category: "Printer",
    },
    {
      name: "Samsung SL-M4070FR",
      description: "Multifunction printer",
      category: "Printer",
    },
    {
      name: "Samsung DeX Pad",
      description: "Phone-to-PC docking station",
      category: "CPU",
    },
    {
      name: "Samsung Exynos 2200",
      description: "Mobile processor with Xclipse GPU",
      category: "CPU",
    },
    {
      name: "Samsung Wireless Charger",
      description: "Fast charging dock",
      category: "Power Supply",
    },
  ],
  Acer: [
    {
      name: "Acer Predator X38",
      description: "37.5-inch curved monitor",
      category: "Monitor",
    },
    {
      name: "Acer Nitro XV272U",
      description: "27-inch QHD gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer KG241Q",
      description: "24-inch FHD gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer Swift X",
      description: "Powerful ultrabook CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire 5",
      description: "Mid-range laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator Helios 300",
      description: "Gaming laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Veriton X",
      description: "Business desktop CPU",
      category: "CPU",
    },
    {
      name: "Acer ConceptD 7",
      description: "Creative professionals CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro KG1",
      description: "23.8-inch gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer XF250Q",
      description: "25-inch 240Hz gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer Aspire TC",
      description: "Desktop tower with Intel CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator Orion 9000",
      description: "High-end gaming desktop",
      category: "CPU",
    },
    {
      name: "Acer B246HL",
      description: "24-inch business monitor",
      category: "Monitor",
    },
    {
      name: "Acer CB282K",
      description: "28-inch UHD monitor",
      category: "Monitor",
    },
    {
      name: "Acer Predator XB3",
      description: "High refresh rate monitor",
      category: "Monitor",
    },
    {
      name: "Acer Nitro 5",
      description: "Budget gaming laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator Cestus 330",
      description: "Wired gaming mouse",
      category: "Mouse",
    },
    {
      name: "Acer Predator Cestus 500",
      description: "Customizable gaming mouse",
      category: "Mouse",
    },
    {
      name: "Acer Predator Aethon 500",
      description: "Mechanical gaming keyboard",
      category: "Keyboard",
    },
    {
      name: "Acer Swift 3",
      description: "Ultra-thin laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro N50",
      description: "Gaming desktop tower",
      category: "CPU",
    },
    {
      name: "Acer Predator Galea 500",
      description: "3D sound gaming headset",
      category: "Speakers",
    },
    {
      name: "Acer XFA240",
      description: "24-inch 144Hz monitor",
      category: "Monitor",
    },
    {
      name: "Acer Predator Orion 5000",
      description: "High-performance gaming CPU",
      category: "CPU",
    },
    {
      name: "Acer Chromebook 315",
      description: "Chrome OS-based CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro KG252Q",
      description: "25-inch gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer Veriton M",
      description: "Professional desktop CPU",
      category: "CPU",
    },
    {
      name: "Acer ConceptD 9",
      description: "Convertible creator laptop",
      category: "CPU",
    },
    {
      name: "Acer Enduro N3",
      description: "Rugged business laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Spin 5",
      description: "Convertible touchscreen CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator Orion 3000",
      description: "Compact gaming CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire C27",
      description: "All-in-one desktop CPU",
      category: "CPU",
    },
    {
      name: "Acer Revo Cube",
      description: "Mini PC desktop CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire GX",
      description: "Gaming-oriented desktop CPU",
      category: "CPU",
    },
    {
      name: "Acer Chromebook Spin 713",
      description: "Touchscreen 2-in-1 CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire 7",
      description: "Performance laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire XC",
      description: "Compact desktop CPU",
      category: "CPU",
    },
    { name: "Acer Nitro 7", description: "Gaming laptop CPU", category: "CPU" },
    {
      name: "Acer TravelMate P6",
      description: "Business laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer TravelMate Spin B3",
      description: "Convertible student laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro 50",
      description: "Gaming desktop tower CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire Z24",
      description: "All-in-one PC CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro KG271",
      description: "27-inch gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer Chromebook 714",
      description: "Business-class Chromebook CPU",
      category: "CPU",
    },
    {
      name: "Acer TravelMate P2",
      description: "Budget business laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer TravelMate X5",
      description: "Ultralight business laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire R 15",
      description: "Convertible touchscreen CPU",
      category: "CPU",
    },
    {
      name: "Acer Swift 7",
      description: "Ultra-thin premium laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Veriton Z",
      description: "All-in-one business CPU",
      category: "CPU",
    },
    {
      name: "Acer Iconia One 10",
      description: "Android tablet CPU",
      category: "CPU",
    },
    {
      name: "Acer Enduro Urban N3",
      description: "Ruggedized laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator Helios 500",
      description: "High-end gaming laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro KG241Y",
      description: "24-inch FHD gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer Aspire E15",
      description: "Budget-friendly laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Chromebook Spin 513",
      description: "ARM-based 2-in-1 CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire 3",
      description: "Entry-level laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro 16",
      description: "Gaming laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator Helios Neo",
      description: "Gaming-focused CPU",
      category: "CPU",
    },
    {
      name: "Acer TravelMate B3",
      description: "Lightweight student laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Spin 3",
      description: "Convertible laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Predator X32",
      description: "32-inch gaming monitor",
      category: "Monitor",
    },
    {
      name: "Acer ConceptD 5",
      description: "Professional creator laptop CPU",
      category: "CPU",
    },
    {
      name: "Acer Aspire S24",
      description: "All-in-one slim PC CPU",
      category: "CPU",
    },
    {
      name: "Acer Veriton L",
      description: "Compact business desktop CPU",
      category: "CPU",
    },
    {
      name: "Acer Nitro KG270",
      description: "27-inch FHD gaming monitor",
      category: "Monitor",
    },
  ],
  Apple: [
    {
      name: "MacBook Pro 16-inch",
      description: "High-end laptop CPU",
      category: "CPU",
    },
    {
      name: "MacBook Air M2",
      description: "Lightweight ultrabook CPU",
      category: "CPU",
    },
    {
      name: "iMac 24-inch",
      description: "All-in-one desktop CPU",
      category: "CPU",
    },
    {
      name: "Mac Studio",
      description: "Powerful workstation CPU",
      category: "CPU",
    },
    {
      name: "Mac Mini M2",
      description: "Compact desktop CPU",
      category: "CPU",
    },
    {
      name: "Pro Display XDR",
      description: "32-inch 6K monitor",
      category: "Monitor",
    },
    {
      name: "Studio Display",
      description: "5K Retina monitor",
      category: "Monitor",
    },
    {
      name: "Magic Keyboard",
      description: "Wireless Apple keyboard",
      category: "Keyboard",
    },
    {
      name: "Magic Mouse",
      description: "Wireless Apple mouse",
      category: "Mouse",
    },
    {
      name: "Magic Trackpad",
      description: "Multi-touch trackpad",
      category: "Mouse",
    },
    {
      name: "AirPods Max",
      description: "High-fidelity headphones",
      category: "Speakers",
    },
    {
      name: "AirPods Pro",
      description: "Noise-canceling earbuds",
      category: "Speakers",
    },
    {
      name: "Mac Pro",
      description: "High-performance desktop CPU",
      category: "CPU",
    },
    {
      name: "Apple Thunderbolt Display",
      description: "27-inch LED monitor",
      category: "Monitor",
    },
    {
      name: "Apple USB Keyboard",
      description: "Classic wired keyboard",
      category: "Keyboard",
    },
    {
      name: "Apple Wired Mouse",
      description: "Wired optical mouse",
      category: "Mouse",
    },
    {
      name: "Apple PCIe SSD 1TB",
      description: "Fast internal SSD",
      category: "SSD",
    },
    {
      name: "Apple Fusion Drive 2TB",
      description: "Hybrid SSD + HDD",
      category: "Hard Drive",
    },
    {
      name: "Apple RAM 16GB",
      description: "Mac-compatible memory",
      category: "RAM",
    },
    {
      name: "Apple RAM 32GB",
      description: "High-performance memory",
      category: "RAM",
    },
    {
      name: "Apple SuperDrive",
      description: "External CD/DVD drive",
      category: "Hard Drive",
    },
    {
      name: "MacOS Ventura",
      description: "Latest macOS version",
      category: "Operating System",
    },
    {
      name: "MacOS Monterey",
      description: "Previous macOS version",
      category: "Operating System",
    },
    {
      name: "Apple Power Adapter 85W",
      description: "MacBook charger",
      category: "Power Supply",
    },
    {
      name: "Apple Power Adapter 67W",
      description: "MacBook Air charger",
      category: "Power Supply",
    },
    {
      name: "Apple Cooling Fan",
      description: "Mac Pro cooling fan",
      category: "Cooling System",
    },
    {
      name: "Apple Logic Board",
      description: "Mac motherboard",
      category: "Motherboard",
    },
    {
      name: "Apple Ethernet Adapter",
      description: "Wired network adapter",
      category: "Network Card",
    },
    {
      name: "Apple Wireless Card",
      description: "Mac WiFi module",
      category: "Network Card",
    },
    {
      name: "Apple PCIe Sound Card",
      description: "Audio processing unit",
      category: "Sound Card",
    },
    {
      name: "Apple FireWire Audio",
      description: "External sound interface",
      category: "Sound Card",
    },
    {
      name: "Apple Pro Webcam",
      description: "High-resolution webcam",
      category: "Webcam",
    },
    {
      name: "Apple FaceTime HD",
      description: "Built-in Mac webcam",
      category: "Webcam",
    },
    {
      name: "Apple Thunderbolt 4 Dock",
      description: "Multiple port expansion",
      category: "Motherboard",
    },
    {
      name: "Apple Magic Keyboard with Touch ID",
      description: "Keyboard with biometric sensor",
      category: "Keyboard",
    },
    {
      name: "Apple Magic Mouse 2",
      description: "Rechargeable Bluetooth mouse",
      category: "Mouse",
    },
    {
      name: "Apple Pencil 2",
      description: "Stylus for iPads",
      category: "Mouse",
    },
    {
      name: "AirPods 3",
      description: "Wireless earbuds",
      category: "Speakers",
    },
    {
      name: "Apple HomePod Mini",
      description: "Smart speaker",
      category: "Speakers",
    },
    {
      name: "Apple Airport Extreme",
      description: "WiFi router",
      category: "Network Card",
    },
    {
      name: "Apple Time Capsule",
      description: "Backup storage",
      category: "Hard Drive",
    },
    {
      name: "Apple M1 GPU",
      description: "Integrated graphics",
      category: "GPU",
    },
    {
      name: "Apple M2 GPU",
      description: "Next-gen integrated GPU",
      category: "GPU",
    },
    {
      name: "Apple Mac Pro GPU Module",
      description: "Discrete graphics upgrade",
      category: "Graphics Card",
    },
    {
      name: "Apple Radeon Pro 580X",
      description: "Workstation graphics card",
      category: "Graphics Card",
    },
    {
      name: "Apple MacBook Pro Charger 140W",
      description: "Fast charging adapter",
      category: "Power Supply",
    },
    {
      name: "Apple M2 Max CPU",
      description: "High-performance processor",
      category: "CPU",
    },
    {
      name: "Apple M1 Ultra CPU",
      description: "Extreme performance processor",
      category: "CPU",
    },
    {
      name: "Apple M3 CPU",
      description: "Upcoming Apple Silicon",
      category: "CPU",
    },
    {
      name: "Apple Retina 5K Display",
      description: "5K resolution monitor",
      category: "Monitor",
    },
    {
      name: "Apple iSight Camera",
      description: "Older Mac webcam",
      category: "Webcam",
    },
    {
      name: "Apple Xserve RAID",
      description: "Enterprise storage",
      category: "Hard Drive",
    },
    {
      name: "Apple SSD Module 512GB",
      description: "Internal SSD",
      category: "SSD",
    },
    {
      name: "Apple SSD Module 2TB",
      description: "High-capacity SSD",
      category: "SSD",
    },
    {
      name: "Apple iMac Cooling System",
      description: "Built-in cooling",
      category: "Cooling System",
    },
    {
      name: "Apple Pro Speaker System",
      description: "Premium sound",
      category: "Speakers",
    },
    {
      name: "Apple Thunderbolt External SSD",
      description: "Ultra-fast storage",
      category: "SSD",
    },
    {
      name: "Apple SuperDrive USB",
      description: "Portable optical drive",
      category: "Hard Drive",
    },
    {
      name: "Apple PCIe Storage Expansion",
      description: "Additional SSD slot",
      category: "Motherboard",
    },
    {
      name: "Apple Secure Enclave Chip",
      description: "Security module",
      category: "Motherboard",
    },
    {
      name: "Apple T2 Security Chip",
      description: "Data encryption processor",
      category: "Motherboard",
    },
    {
      name: "Apple Touch Bar",
      description: "MacBook Pro touch panel",
      category: "Keyboard",
    },
    {
      name: "Apple Logic Pro",
      description: "Music production software",
      category: "Operating System",
    },
    {
      name: "Apple Final Cut Pro",
      description: "Video editing software",
      category: "Operating System",
    },
    {
      name: "Apple iWork Suite",
      description: "Office productivity apps",
      category: "Operating System",
    },
    {
      name: "Apple A12Z GPU",
      description: "Tablet graphics processor",
      category: "GPU",
    },
    {
      name: "Apple Taptic Engine",
      description: "Haptic feedback module",
      category: "Motherboard",
    },
    {
      name: "Apple Thunderbolt 3 eGPU",
      description: "External graphics box",
      category: "Graphics Card",
    },
    {
      name: "Apple Bluetooth Mouse",
      description: "Basic wireless mouse",
      category: "Mouse",
    },
    {
      name: "Apple AirTag",
      description: "Tracking device",
      category: "Network Card",
    },
    {
      name: "Apple WiFi 6 Router",
      description: "Next-gen network card",
      category: "Network Card",
    },
    {
      name: "Apple MFi Certified Charger",
      description: "Safe power supply",
      category: "Power Supply",
    },
  ],
  Lenovo: [
    {
      name: "Lenovo ThinkPad E15",
      description: "Laptop empresarial",
      category: "CPU",
    },
    {
      name: "Lenovo Legion K500",
      description: "Teclado mecánico gaming",
      category: "Keyboard",
    },
    {
      name: "Lenovo ThinkVision P27h",
      description: 'Monitor 27" QHD',
      category: "Monitor",
    },
    {
      name: "Lenovo Legion M600",
      description: "Ratón inalámbrico gaming",
      category: "Mouse",
    },
    {
      name: "Lenovo ThinkCentre M70q",
      description: "Mini PC compacto",
      category: "CPU",
    },
    {
      name: "Lenovo V15 Gen 2",
      description: "Laptop económica",
      category: "CPU",
    },
    {
      name: "Lenovo P620",
      description: "Workstation profesional",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkPad TrackPoint",
      description: "Teclado con trackpoint",
      category: "Keyboard",
    },
    {
      name: "Lenovo ThinkStation P340",
      description: "Workstation compacta",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkVision T24i",
      description: 'Monitor 24" FHD',
      category: "Monitor",
    },
    {
      name: "Lenovo Legion Y25-25",
      description: "Monitor gaming 240Hz",
      category: "Monitor",
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      description: "Ultrabook premium",
      category: "CPU",
    },
    {
      name: "Lenovo Legion 7i",
      description: "Laptop gaming potente",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkCentre Neo 50s",
      description: "Desktop empresarial",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkBook 15p",
      description: "Laptop para creadores",
      category: "CPU",
    },
    {
      name: "Lenovo GT101 RGB",
      description: "Auriculares gaming",
      category: "Speakers",
    },
    {
      name: "Lenovo ThinkPad P15",
      description: "Workstation móvil",
      category: "CPU",
    },
    {
      name: "Lenovo K300 RGB",
      description: "Teclado gaming RGB",
      category: "Keyboard",
    },
    {
      name: "Lenovo ThinkVision S22e",
      description: 'Monitor 21.5" FHD',
      category: "Monitor",
    },
    {
      name: "Lenovo M300 RGB",
      description: "Ratón gaming RGB",
      category: "Mouse",
    },
    { name: "Lenovo Yoga 9i", description: "2-en-1 premium", category: "CPU" },
    {
      name: "Lenovo ThinkBook 14s",
      description: "Laptop empresarial",
      category: "CPU",
    },
    { name: "Lenovo P520", description: "Workstation torre", category: "CPU" },
    {
      name: "Lenovo Legion T5",
      description: "Desktop gaming",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkSmart View",
      description: "Pantalla inteligente",
      category: "Monitor",
    },
    {
      name: "Lenovo ThinkPad E14",
      description: "Laptop económica",
      category: "CPU",
    },
    {
      name: "Lenovo IdeaPad Gaming 3",
      description: "Laptop gaming accesible",
      category: "CPU",
    },
    {
      name: "Lenovo Legion M200",
      description: "Ratón gaming económico",
      category: "Mouse",
    },
    {
      name: "Lenovo L15",
      description: 'Monitor básico 15"',
      category: "Monitor",
    },
    {
      name: "Lenovo ThinkPlus K100",
      description: "Teclado ergonómico",
      category: "Keyboard",
    },
    {
      name: "Lenovo ThinkCentre M70",
      description: "Desktop torre",
      category: "CPU",
    },
    {
      name: "Lenovo DDR4 16GB",
      description: "Memoria RAM 3200MHz",
      category: "RAM",
    },
    { name: "Lenovo SSD 512GB", description: "SSD NVMe PCIe", category: "SSD" },
    {
      name: "Lenovo HDD 2TB",
      description: "Disco duro 7200rpm",
      category: "Hard Drive",
    },
    {
      name: "Lenovo ThinkPad L14",
      description: "Laptop resistente",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkVision M14",
      description: "Monitor portátil",
      category: "Monitor",
    },
    {
      name: "Lenovo ThinkStation P920",
      description: "Workstation dual CPU",
      category: "CPU",
    },
    {
      name: "Lenovo P330 Tiny",
      description: "Workstation ultracompacta",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkPad P1",
      description: "Workstation delgada",
      category: "CPU",
    },
    {
      name: "Lenovo Tab P11 Pro",
      description: "Tablet premium",
      category: "CPU",
    },
    {
      name: "Lenovo DDR4 8GB",
      description: "Memoria RAM 2666MHz",
      category: "RAM",
    },
    { name: "Lenovo SSD 1TB", description: 'SSD SATA 2.5"', category: "SSD" },
    {
      name: "Lenovo 500 FHD",
      description: "Webcam Full HD",
      category: "Webcam",
    },
    {
      name: "Lenovo 300 Stereo",
      description: "Auriculares con micrófono",
      category: "Speakers",
    },
    {
      name: "Lenovo ThinkPlus TP3",
      description: "Mouse inalámbrico",
      category: "Mouse",
    },
    {
      name: "Lenovo IdeaPad 5",
      description: "Laptop multimedia",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkPad T14s",
      description: "Ultrabook empresarial",
      category: "CPU",
    },
    {
      name: "Lenovo HDD 4TB",
      description: "Disco duro externo",
      category: "Hard Drive",
    },
    {
      name: "Lenovo ThinkPlus LP40",
      description: "Teclado mecánico",
      category: "Keyboard",
    },
    {
      name: "Lenovo GTX 1650 Super",
      description: "Tarjeta gráfica gaming",
      category: "Graphics Card",
    },
    {
      name: "Lenovo RTX 3060",
      description: "GPU para workstation",
      category: "GPU",
    },
    { name: "Lenovo 700 UHD", description: "Webcam 4K", category: "Webcam" },
    {
      name: "Lenovo 700 USB-C",
      description: "Dock estación de trabajo",
      category: "Motherboard",
    },
    {
      name: "Lenovo ThinkSmart Hub",
      description: "Centro de conferencias",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkVision T34w",
      description: 'Monitor ultrawide 34"',
      category: "Monitor",
    },
    {
      name: "Lenovo ThinkPad X13",
      description: "Ultrabook compacto",
      category: "CPU",
    },
    {
      name: "Lenovo Windows 11 Pro",
      description: "Sistema operativo OEM",
      category: "Operating System",
    },
    {
      name: "Lenovo B210",
      description: "Mochila para laptop",
      category: "CPU",
    },
    {
      name: "Lenovo 3-Year Warranty",
      description: "Garantía extendida",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkShield",
      description: "Software de seguridad",
      category: "Operating System",
    },
    {
      name: "Lenovo ThinkBook 15",
      description: "Laptop para pymes",
      category: "CPU",
    },
    {
      name: "Lenovo Legion Y740S",
      description: "Laptop gaming delgada",
      category: "CPU",
    },
    {
      name: "Lenovo DDR4 32GB",
      description: "Kit memoria dual channel",
      category: "RAM",
    },
    { name: "Lenovo SSD 256GB", description: "SSD M.2 PCIe", category: "SSD" },
    {
      name: "Lenovo HDD 1TB",
      description: "Disco duro portátil",
      category: "Hard Drive",
    },
    {
      name: "Lenovo B50-30",
      description: "Impresora láser mono",
      category: "Printer",
    },
    {
      name: "Lenovo ThinkPad Hybrid USB-C",
      description: "Dock universal",
      category: "Motherboard",
    },
    {
      name: "Lenovo ThinkPlus K200",
      description: "Teclado retroiluminado",
      category: "Keyboard",
    },
    {
      name: "Lenovo M400",
      description: "Ratón inalámbrico",
      category: "Mouse",
    },
    {
      name: "Lenovo ThinkCentre M80q",
      description: "Mini PC potente",
      category: "CPU",
    },
    {
      name: "Lenovo X1 ANC",
      description: "Auriculares con ANC",
      category: "Speakers",
    },
    {
      name: "Lenovo ThinkVision P32u",
      description: "Monitor 4K profesional",
      category: "Monitor",
    },
    {
      name: "Lenovo ThinkPad T15g",
      description: "Laptop workstation",
      category: "CPU",
    },
    {
      name: "Lenovo ThinkReality A3",
      description: "Gafas inteligentes",
      category: "Monitor",
    },
    {
      name: "Lenovo Server SR650",
      description: "Servidor rack 2U",
      category: "CPU",
    },
    { name: "Lenovo ST50", description: "Servidor torre", category: "CPU" },
    {
      name: "Lenovo ThinkSystem",
      description: "Sistema almacenamiento",
      category: "Hard Drive",
    },
    {
      name: "Lenovo B650",
      description: "Escáner documental",
      category: "Scanner",
    },
    {
      name: "Lenovo 750W Gold",
      description: "Fuente alimentación",
      category: "Power Supply",
    },
    {
      name: "Lenovo 500W Bronze",
      description: "PSU certificada 80+",
      category: "Power Supply",
    },
    {
      name: "Lenovo ThinkCentre Tiny IV",
      description: "Refrigeración silenciosa",
      category: "Cooling System",
    },
    {
      name: "Lenovo Liquid Cooling",
      description: "Refrigeración líquida",
      category: "Cooling System",
    },
    {
      name: "Lenovo 4-in-1 Smart Hub",
      description: "Hub multimedia",
      category: "Motherboard",
    },
    {
      name: "Lenovo ThinkPad USB-C Dock",
      description: "Estación acoplamiento",
      category: "Motherboard",
    },
    {
      name: "Lenovo 10Gbps LAN Card",
      description: "Tarjeta de red ethernet",
      category: "Network Card",
    },
    {
      name: "Lenovo WiFi 6E Card",
      description: "Tarjeta WiFi AX",
      category: "Network Card",
    },
    {
      name: "Lenovo Smart Clock",
      description: "Reloj inteligente",
      category: "Monitor",
    },
    {
      name: "Lenovo 7.1 Surround",
      description: "Tarjeta de sonido gaming",
      category: "Sound Card",
    },
    {
      name: "Lenovo HD Audio",
      description: "Tarjeta sonido interna",
      category: "Sound Card",
    },
    {
      name: "Lenovo Legion Tower 5i",
      description: "Desktop gaming premium",
      category: "CPU",
    },
    {
      name: "Lenovo DDR5 16GB",
      description: "Memoria RAM 5200MHz",
      category: "RAM",
    },
    {
      name: "Lenovo RX 6600 XT",
      description: "Tarjeta gráfica AMD",
      category: "Graphics Card",
    },
    {
      name: "Lenovo Mobile SSD",
      description: "SSD externo USB-C",
      category: "SSD",
    },
    {
      name: "Lenovo ThinkPlus MK100",
      description: "Combo teclado y ratón",
      category: "Keyboard",
    },
    {
      name: "Lenovo AIO Cooling",
      description: "Refrigeración CPU AIO",
      category: "Cooling System",
    },
    {
      name: "Lenovo HDMI Adapter",
      description: "Adaptador DisplayPort",
      category: "Graphics Card",
    },
    {
      name: "Lenovo Smart Speaker",
      description: "Altavoz inteligente",
      category: "Speakers",
    },
    {
      name: "Lenovo RGB Fan Kit",
      description: "Ventiladores RGB",
      category: "Cooling System",
    },
  ],
  HP: [
    {
      name: "HP Pavilion Gaming Keyboard 500",
      description: "Teclado gaming LED RGB",
      category: "Keyboard",
    },
    {
      name: "HP Omen Encoder",
      description: "Teclado mecánico premium",
      category: "Keyboard",
    },
    {
      name: "HP Pavilion Wireless Keyboard",
      description: "Teclado inalámbrico",
      category: "Keyboard",
    },
    {
      name: "HP Elite Wired Keyboard",
      description: "Teclado profesional",
      category: "Keyboard",
    },
    {
      name: "HP Spectre Rechargeable Mouse",
      description: "Ratón recargable premium",
      category: "Mouse",
    },
    {
      name: "HP Wireless Mouse 200",
      description: "Ratón inalámbrico básico",
      category: "Mouse",
    },
    {
      name: "HP Omen Vector",
      description: "Ratón gaming profesional",
      category: "Mouse",
    },
    { name: "HP X500", description: "Ratón ergonómico", category: "Mouse" },
    { name: "HP 24f", description: 'Monitor 24" IPS FHD', category: "Monitor" },
    {
      name: "HP Omen 27i",
      description: "Monitor gaming QHD",
      category: "Monitor",
    },
    {
      name: "HP E27u G4",
      description: "Monitor profesional USB-C",
      category: "Monitor",
    },
    { name: "HP Z27k G3", description: "Monitor 4K UHD", category: "Monitor" },
    {
      name: "HP EliteDesk 800 G6",
      description: "Desktop empresarial",
      category: "CPU",
    },
    {
      name: "HP Omen 30L",
      description: "Desktop gaming premium",
      category: "CPU",
    },
    {
      name: "HP ProDesk 400 G7",
      description: "Desktop compacto",
      category: "CPU",
    },
    {
      name: "HP EliteOne 800 G6",
      description: "Todo-en-uno empresarial",
      category: "CPU",
    },
    {
      name: "HP Z4 G4",
      description: "Workstation profesional",
      category: "CPU",
    },
    {
      name: "HP NVIDIA Quadro RTX 4000",
      description: "GPU profesional",
      category: "GPU",
    },
    {
      name: "HP NVIDIA T1000",
      description: "GPU workstation",
      category: "GPU",
    },
    {
      name: "HP AMD Radeon Pro WX 3200",
      description: "GPU compacta",
      category: "GPU",
    },
    {
      name: "HP NVIDIA RTX A4000",
      description: "GPU de alto rendimiento",
      category: "GPU",
    },
    {
      name: "HP DDR4 8GB",
      description: "Memoria RAM 2666MHz",
      category: "RAM",
    },
    {
      name: "HP DDR4 16GB",
      description: "Memoria RAM 3200MHz",
      category: "RAM",
    },
    {
      name: "HP DDR4 32GB ECC",
      description: "Memoria servidor",
      category: "RAM",
    },
    {
      name: "HP DDR4 64GB",
      description: "Memoria workstation",
      category: "RAM",
    },
    {
      name: "HP 1TB 7200rpm",
      description: "Disco duro empresarial",
      category: "Hard Drive",
    },
    {
      name: "HP 2TB 5400rpm",
      description: "Disco duro económico",
      category: "Hard Drive",
    },
    {
      name: "HP 4TB Enterprise",
      description: "Disco duro servidor",
      category: "Hard Drive",
    },
    {
      name: "HP External Hard Drive 1TB",
      description: "Disco duro externo",
      category: "Hard Drive",
    },
    {
      name: "HP SSD S700 250GB",
      description: "SSD básico SATA",
      category: "SSD",
    },
    { name: "HP EX900 500GB", description: "SSD M.2 NVMe", category: "SSD" },
    { name: "HP EX950 1TB", description: "SSD NVMe premium", category: "SSD" },
    {
      name: "HP P500 Portable SSD",
      description: "SSD externo USB-C",
      category: "SSD",
    },
    {
      name: "HP Z Turbo Drive 2TB",
      description: "SSD workstation NVMe",
      category: "SSD",
    },
    {
      name: "HP EliteDesk Motherboard",
      description: "Placa base empresarial",
      category: "Motherboard",
    },
    {
      name: "HP Omen Motherboard Z490",
      description: "Placa base gaming",
      category: "Motherboard",
    },
    {
      name: "HP ProDesk Motherboard",
      description: "Placa base económica",
      category: "Motherboard",
    },
    {
      name: "HP Z8 Motherboard",
      description: "Placa base workstation",
      category: "Motherboard",
    },
    {
      name: "HP 500W Power Supply",
      description: "Fuente alimentación 80+",
      category: "Power Supply",
    },
    {
      name: "HP 750W Platinum",
      description: "Fuente certificada",
      category: "Power Supply",
    },
    {
      name: "HP 1000W Workstation PSU",
      description: "Fuente workstation",
      category: "Power Supply",
    },
    {
      name: "HP Omen 800W Gold",
      description: "Fuente gaming modular",
      category: "Power Supply",
    },
    {
      name: "HP Z Cooler",
      description: "Disipador CPU premium",
      category: "Cooling System",
    },
    {
      name: "HP Omen Liquid Cooling",
      description: "Refrigeración líquida",
      category: "Cooling System",
    },
    {
      name: "HP Elite Cooling System",
      description: "Ventilador silencioso",
      category: "Cooling System",
    },
    {
      name: "HP ProDesk Thermal Solution",
      description: "Sistema térmico compacto",
      category: "Cooling System",
    },
    {
      name: "HP Windows 10 Pro",
      description: "Sistema operativo OEM",
      category: "Operating System",
    },
    {
      name: "HP Windows 11 Home",
      description: "Sistema operativo",
      category: "Operating System",
    },
    {
      name: "HP FreeDOS",
      description: "Sistema sin Windows",
      category: "Operating System",
    },
    {
      name: "HP Linux Workstation OS",
      description: "Sistema Linux precargado",
      category: "Operating System",
    },
    {
      name: "HP NVIDIA GeForce RTX 3080",
      description: "Tarjeta gráfica gaming",
      category: "Graphics Card",
    },
    {
      name: "HP NVIDIA GeForce GTX 1660",
      description: "Tarjeta gráfica media",
      category: "Graphics Card",
    },
    {
      name: "HP AMD Radeon RX 6700 XT",
      description: "Tarjeta gráfica AMD",
      category: "Graphics Card",
    },
    {
      name: "HP NVIDIA RTX A2000",
      description: "Tarjeta profesional",
      category: "Graphics Card",
    },
    {
      name: "HP HD Audio Card",
      description: "Tarjeta sonido básica",
      category: "Sound Card",
    },
    {
      name: "HP Sound Blaster Z",
      description: "Tarjeta sonido gaming",
      category: "Sound Card",
    },
    {
      name: "HP Thunderbolt Audio Module",
      description: "Módulo audio externo",
      category: "Sound Card",
    },
    {
      name: "HP Z Audio Module",
      description: "Tarjeta sonido profesional",
      category: "Sound Card",
    },
    {
      name: "HP Ethernet 1Gbps",
      description: "Tarjeta de red básica",
      category: "Network Card",
    },
    {
      name: "HP 10GbE SFP+",
      description: "Tarjeta red empresarial",
      category: "Network Card",
    },
    {
      name: "HP Wi-Fi 6 AX201",
      description: "Tarjeta Wi-Fi interna",
      category: "Network Card",
    },
    {
      name: "HP Bluetooth 5.0 Module",
      description: "Módulo Bluetooth",
      category: "Network Card",
    },
    {
      name: "HP HD Webcam 720p",
      description: "Webcam integrada",
      category: "Webcam",
    },
    {
      name: "HP 4K Pro Webcam",
      description: "Webcam Ultra HD",
      category: "Webcam",
    },
    {
      name: "HP 960 FHD Webcam",
      description: "Webcam Full HD",
      category: "Webcam",
    },
    {
      name: "HP Presence Webcam",
      description: "Webcam con IA",
      category: "Webcam",
    },
    {
      name: "HP LaserJet Pro M404dn",
      description: "Impresora láser",
      category: "Printer",
    },
    {
      name: "HP Color LaserJet Pro M255dw",
      description: "Impresora láser color",
      category: "Printer",
    },
    {
      name: "HP ENVY 6055e",
      description: "Impresora multifunción",
      category: "Printer",
    },
    {
      name: "HP DesignJet T650",
      description: "Impresora plotter",
      category: "Printer",
    },
    {
      name: "HP ScanJet Pro 2000",
      description: "Escáner documental",
      category: "Scanner",
    },
    {
      name: "HP ScanJet Enterprise Flow",
      description: "Escáner alto volumen",
      category: "Scanner",
    },
    {
      name: "HP ScanJet Pro 3000",
      description: "Escáner profesional",
      category: "Scanner",
    },
    {
      name: "HP ScanJet Pro N4000",
      description: "Escáner alimentador",
      category: "Scanner",
    },
    {
      name: "HP S101 Speakers",
      description: "Altavoces estéreo USB",
      category: "Speakers",
    },
    {
      name: "HP Omen Gaming Speakers",
      description: "Altavoces gaming RGB",
      category: "Speakers",
    },
    {
      name: "HP Business Speakers",
      description: "Altavoces conferencia",
      category: "Speakers",
    },
    {
      name: "HP S100 Speaker Bar",
      description: "Barra sonido monitor",
      category: "Speakers",
    },
    {
      name: "HP Elite Slice G2",
      description: "Mini PC conferencias",
      category: "CPU",
    },
    {
      name: "HP Chromebox G3",
      description: "Mini PC Chrome OS",
      category: "CPU",
    },
    {
      name: "HP Z2 Mini G5",
      description: "Workstation compacta",
      category: "CPU",
    },
    {
      name: "HP ProDesk 600 G6",
      description: "Desktop mediano",
      category: "CPU",
    },
  ],
  Dell: [
    {
      name: "Dell KM117 Keyboard",
      description: "Wireless keyboard",
      category: "Keyboard",
    },
    {
      name: "Dell MS116 Mouse",
      description: "Wired optical mouse",
      category: "Mouse",
    },
    {
      name: "Dell P2419H Monitor",
      description: "24-inch Full HD",
      category: "Monitor",
    },
    {
      name: "Dell Inspiron 5675 CPU",
      description: "Desktop computer",
      category: "CPU",
    },
    {
      name: "Dell GTX 1660 Ti GPU",
      description: "Powerful graphics card",
      category: "GPU",
    },
    {
      name: "Dell Vostro 8GB RAM",
      description: "Reliable RAM module",
      category: "RAM",
    },
    {
      name: "Dell 1TB Hard Drive",
      description: "Large storage space",
      category: "Hard Drive",
    },
    {
      name: "Dell 500GB SSD",
      description: "Fast solid-state drive",
      category: "SSD",
    },
    {
      name: "Dell OptiPlex 5070 Motherboard",
      description: "Business motherboard",
      category: "Motherboard",
    },
    {
      name: "Dell 550W Power Supply",
      description: "Efficient PSU unit",
      category: "Power Supply",
    },
    {
      name: "Dell Active Cooling",
      description: "Enhanced cooling system",
      category: "Cooling System",
    },
    {
      name: "Dell Windows 10 OS",
      description: "Windows 10 Pro",
      category: "Operating System",
    },
    {
      name: "Dell RTX 2080 Graphics Card",
      description: "Advanced graphics card",
      category: "Graphics Card",
    },
    {
      name: "Dell XPS 15 Sound Card",
      description: "Integrated audio system",
      category: "Sound Card",
    },
    {
      name: "Dell Killer Network Card",
      description: "High-speed network",
      category: "Network Card",
    },
    {
      name: "Dell Pro Webcam",
      description: "1080p HD webcam",
      category: "Webcam",
    },
    {
      name: "Dell Color Printer",
      description: "Laser printer",
      category: "Printer",
    },
    {
      name: "Dell 2500 Scanner",
      description: "Flatbed scanner",
      category: "Scanner",
    },
    {
      name: "Dell AC511 Speakers",
      description: "USB-powered speakers",
      category: "Speakers",
    },
    {
      name: "Dell Alienware RGB Keyboard",
      description: "RGB gaming keyboard",
      category: "Keyboard",
    },
    {
      name: "Dell Mice 5000",
      description: "Precision gaming mouse",
      category: "Mouse",
    },
    {
      name: "Dell U2720Q Monitor",
      description: "4K ultra-wide monitor",
      category: "Monitor",
    },
    {
      name: "Dell Precision 3930",
      description: "Workstation CPU",
      category: "CPU",
    },
    {
      name: "Dell Radeon RX 580",
      description: "Graphics card for gaming",
      category: "GPU",
    },
    {
      name: "Dell 16GB DDR4 RAM",
      description: "Memory upgrade kit",
      category: "RAM",
    },
    {
      name: "Dell 2TB Hard Drive",
      description: "High-capacity storage",
      category: "Hard Drive",
    },
    {
      name: "Dell 1TB NVMe SSD",
      description: "Fast storage drive",
      category: "SSD",
    },
    {
      name: "Dell XPS Motherboard",
      description: "Premium laptop motherboard",
      category: "Motherboard",
    },
    {
      name: "Dell 600W PSU",
      description: "Reliable power supply",
      category: "Power Supply",
    },
    {
      name: "Dell Dual Fan Cooling",
      description: "Cooling solution for PCs",
      category: "Cooling System",
    },
    {
      name: "Dell Windows 11 OS",
      description: "Latest Windows OS",
      category: "Operating System",
    },
    {
      name: "Dell Radeon RX 5700",
      description: "Advanced gaming GPU",
      category: "Graphics Card",
    },
    {
      name: "Dell Sound Blaster Z",
      description: "High-definition sound card",
      category: "Sound Card",
    },
    {
      name: "Dell Gigabit Network Card",
      description: "Gigabit Ethernet card",
      category: "Network Card",
    },
    {
      name: "Dell C3100 Webcam",
      description: "Webcam with 1080p HD",
      category: "Webcam",
    },
    {
      name: "Dell Laser Printer",
      description: "Compact laser printer",
      category: "Printer",
    },
    {
      name: "Dell DS-500 Scanner",
      description: "Portable scanner",
      category: "Scanner",
    },
    {
      name: "Dell 2.1 Speakers",
      description: "High-quality speaker set",
      category: "Speakers",
    },
    {
      name: "Dell RGB Mechanical Keyboard",
      description: "Mechanical gaming keyboard",
      category: "Keyboard",
    },
    {
      name: "Dell Wireless Mouse 3500",
      description: "Reliable wireless mouse",
      category: "Mouse",
    },
    {
      name: "Dell S3220DGF Monitor",
      description: "32-inch curved monitor",
      category: "Monitor",
    },
    {
      name: "Dell XPS 7300 CPU",
      description: "Intel-based workstation",
      category: "CPU",
    },
    {
      name: "Dell GTX 1070 GPU",
      description: "Mid-range gaming GPU",
      category: "GPU",
    },
    {
      name: "Dell 32GB RAM",
      description: "High-performance RAM",
      category: "RAM",
    },
    {
      name: "Dell 2TB HDD",
      description: "Large storage drive",
      category: "Hard Drive",
    },
    {
      name: "Dell 1TB SSD NVMe",
      description: "Ultra-fast SSD drive",
      category: "SSD",
    },
    {
      name: "Dell Motherboard Z590",
      description: "High-speed motherboard",
      category: "Motherboard",
    },
    {
      name: "Dell 750W PSU",
      description: "Powerful power supply",
      category: "Power Supply",
    },
    {
      name: "Dell Advanced Cooling",
      description: "Heavy-duty cooling",
      category: "Cooling System",
    },
    {
      name: "Dell Windows 10 Home",
      description: "Home edition OS",
      category: "Operating System",
    },
    {
      name: "Dell GTX 1080 Ti",
      description: "Premium graphics card",
      category: "Graphics Card",
    },
    {
      name: "Dell Realtek Sound Card",
      description: "Integrated sound system",
      category: "Sound Card",
    },
    {
      name: "Dell Network Adapter",
      description: "Fast network card",
      category: "Network Card",
    },
    {
      name: "Dell 4K Webcam",
      description: "4K Ultra HD webcam",
      category: "Webcam",
    },
    {
      name: "Dell Inkjet Printer",
      description: "High-speed inkjet printer",
      category: "Printer",
    },
    {
      name: "Dell Photo Scanner",
      description: "Scanner for photos",
      category: "Scanner",
    },
    {
      name: "Dell XPS 2.1 Speakers",
      description: "Premium sound speakers",
      category: "Speakers",
    },
    {
      name: "Dell OptiPlex Keyboard",
      description: "Business keyboard",
      category: "Keyboard",
    },
    {
      name: "Dell Performance Mouse",
      description: "Wired precision mouse",
      category: "Mouse",
    },
    {
      name: "Dell U2415 Monitor",
      description: "Ultrasharp monitor",
      category: "Monitor",
    },
    {
      name: "Dell Vostro CPU",
      description: "Business desktop",
      category: "CPU",
    },
    {
      name: "Dell Radeon RX 550",
      description: "Entry-level GPU",
      category: "GPU",
    },
    {
      name: "Dell 8GB DDR3 RAM",
      description: "Affordable memory upgrade",
      category: "RAM",
    },
    {
      name: "Dell 4TB Hard Drive",
      description: "Massive storage drive",
      category: "Hard Drive",
    },
    {
      name: "Dell 1TB SSD",
      description: "High-speed solid-state drive",
      category: "SSD",
    },
    {
      name: "Dell ATX Motherboard",
      description: "ATX-compatible motherboard",
      category: "Motherboard",
    },
    {
      name: "Dell 450W Power Supply",
      description: "Reliable PSU",
      category: "Power Supply",
    },
    {
      name: "Dell Water Cooling",
      description: "Water-cooled system",
      category: "Cooling System",
    },
    {
      name: "Dell Windows Server OS",
      description: "Server edition OS",
      category: "Operating System",
    },
    {
      name: "Dell 1660 SUPER GPU",
      description: "Mid-tier gaming GPU",
      category: "Graphics Card",
    },
    {
      name: "Dell Sound Card X-Fi",
      description: "Premium sound card",
      category: "Sound Card",
    },
    {
      name: "Dell 10GB Network Card",
      description: "High-speed network card",
      category: "Network Card",
    },
    {
      name: "Dell 4K HD Webcam",
      description: "Ultra HD webcam",
      category: "Webcam",
    },
    {
      name: "Dell LaserJet Printer",
      description: "Fast laser printer",
      category: "Printer",
    },
    {
      name: "Dell 2400 Scanner",
      description: "High-resolution scanner",
      category: "Scanner",
    },
    {
      name: "Dell Speaker System",
      description: "Premium speaker set",
      category: "Speakers",
    },
    {
      name: "Dell Alienware Mechanical",
      description: "Gaming mechanical keyboard",
      category: "Keyboard",
    },
    {
      name: "Dell G-Series Mouse",
      description: "Gaming mouse",
      category: "Mouse",
    },
    {
      name: "Dell S2719DGF Monitor",
      description: "144Hz gaming monitor",
      category: "Monitor",
    },
  ],
  MSI: [
    {
      name: "MSI GF63 Thin",
      description: 'Laptop para gaming de 15"',
      category: "Keyboard",
    },
    {
      name: "MSI Clutch GM30",
      description: "Mouse ergonómico RGB",
      category: "Mouse",
    },
    {
      name: "MSI Optix MAG272C",
      description: "Monitor curvo 165Hz",
      category: "Monitor",
    },
    {
      name: "MSI MEG Trident X",
      description: "PC de gaming compacta",
      category: "CPU",
    },
    {
      name: "MSI RTX 3070 Gaming X Trio",
      description: "Tarjeta gráfica RTX 3070",
      category: "Graphics Card",
    },
    {
      name: "MSI Vigor GK50 Elite",
      description: "Teclado mecánico RGB",
      category: "Keyboard",
    },
    {
      name: "MSI GE66 Raider",
      description: "Laptop de gaming con RTX 3070",
      category: "Keyboard",
    },
    {
      name: "MSI Creator 15",
      description: "Laptop para creadores de contenido",
      category: "Keyboard",
    },
    {
      name: "MSI MPG Z490 Gaming Edge WiFi",
      description: "Placa base para gaming",
      category: "Motherboard",
    },
    {
      name: "MSI MPG B550 Gaming Edge WiFi",
      description: "Placa base B550 para Ryzen",
      category: "Motherboard",
    },
    {
      name: "MSI MAG241C",
      description: "Monitor curvo 165Hz",
      category: "Monitor",
    },
    {
      name: "MSI GF65 Thin",
      description: 'Laptop de 15" con i7',
      category: "Keyboard",
    },
    {
      name: "MSI Optix MAG241C",
      description: "Monitor 144Hz",
      category: "Monitor",
    },
    {
      name: "MSI MAG273R",
      description: 'Monitor de 27" Full HD',
      category: "Monitor",
    },
    {
      name: "MSI RTX 3060 Ventus 2X",
      description: "Tarjeta gráfica RTX 3060",
      category: "Graphics Card",
    },
    {
      name: "MSI MPG Sekira 500X",
      description: "Caja de PC para gamers",
      category: "CPU",
    },
    {
      name: "MSI Gaming X Trio RTX 3080",
      description: "Tarjeta gráfica RTX 3080",
      category: "Graphics Card",
    },
    {
      name: "MSI MAG VAMPIRIC 010",
      description: "Caja de PC con RGB",
      category: "CPU",
    },
    {
      name: "MSI Optix MAG161V",
      description: 'Monitor portátil 15.6"',
      category: "Monitor",
    },
    {
      name: "MSI Creator Z16",
      description: "Laptop de contenido con pantalla táctil",
      category: "Keyboard",
    },
    {
      name: "MSI GS66 Stealth",
      description: 'Laptop de 15" para gaming',
      category: "Keyboard",
    },
    {
      name: "MSI Nightblade MI3",
      description: "PC para gaming compacta",
      category: "CPU",
    },
    {
      name: "MSI Gaming Edge AC",
      description: "Placa base para gaming",
      category: "Motherboard",
    },
    {
      name: "MSI X570-A PRO",
      description: "Placa base para Ryzen 3000",
      category: "Motherboard",
    },
    {
      name: "MSI RTX 3080 Suprim X",
      description: "Tarjeta gráfica premium RTX 3080",
      category: "Graphics Card",
    },
    {
      name: "MSI Clutch GM41 Lightweight",
      description: "Mouse ligero para gaming",
      category: "Mouse",
    },
    {
      name: "MSI Trident X Plus",
      description: "PC compacta con RTX 3080",
      category: "CPU",
    },
    {
      name: "MSI Mag Z590 Tomahawk WiFi",
      description: "Placa base Z590 para Intel",
      category: "Motherboard",
    },
    {
      name: "MSI Creator P100X",
      description: "PC para creadores de contenido",
      category: "CPU",
    },
    {
      name: "MSI RTX 2080 Ti Duke",
      description: "Tarjeta gráfica RTX 2080 Ti",
      category: "Graphics Card",
    },
    {
      name: "MSI Vigor GK71 Sonic",
      description: "Teclado mecánico con retroiluminación",
      category: "Keyboard",
    },
    {
      name: "MSI Optix MAG241",
      description: 'Monitor de 24" Full HD',
      category: "Monitor",
    },
    {
      name: "MSI GS75 Stealth",
      description: 'Laptop de 17" para gaming',
      category: "Keyboard",
    },
    {
      name: "MSI B450 TOMAHAWK MAX",
      description: "Placa base B450 para Ryzen",
      category: "Motherboard",
    },
    {
      name: "MSI GT77 Titan",
      description: "Laptop potente con RTX 3080",
      category: "Keyboard",
    },
    {
      name: "MSI MAG META 5",
      description: "Caja de PC con panel de vidrio",
      category: "CPU",
    },
    {
      name: "MSI RTX 3090 Gaming X Trio",
      description: "Tarjeta gráfica RTX 3090",
      category: "Graphics Card",
    },
    {
      name: "MSI Optix MAG321CQR",
      description: 'Monitor 32" curvo 165Hz',
      category: "Monitor",
    },
    {
      name: "MSI Infinite A 9th",
      description: "PC para gaming con RTX 2060",
      category: "CPU",
    },
    {
      name: "MSI Optix MAG322CQR",
      description: "Monitor curvo 2560x1440",
      category: "Monitor",
    },
    {
      name: "MSI MAG B550 TOMAHAWK WIFI",
      description: "Placa base B550 para Ryzen",
      category: "Motherboard",
    },
    {
      name: "MSI MAG CORELIQUID 360R",
      description: "Sistema de refrigeración líquida",
      category: "Cooling System",
    },
    {
      name: "MSI MPG Trident AS",
      description: "PC de gaming compacto con RTX 2060",
      category: "CPU",
    },
    {
      name: "MSI Vigor GK50",
      description: "Teclado mecánico compacto",
      category: "Keyboard",
    },
    {
      name: "MSI Clutch GM50",
      description: "Mouse para gaming con 7 botones",
      category: "Mouse",
    },
    {
      name: "MSI MEG Z490 GODLIKE",
      description: "Placa base para overclocking",
      category: "Motherboard",
    },
    {
      name: "MSI GTX 1660 Ti Armor",
      description: "Tarjeta gráfica GTX 1660 Ti",
      category: "Graphics Card",
    },
    {
      name: "MSI GL65 Leopard",
      description: "Laptop con Intel i7 y RTX 2070",
      category: "Keyboard",
    },
    {
      name: "MSI MAG Z590 Torpedo",
      description: "Placa base Z590 con WiFi",
      category: "Motherboard",
    },
    {
      name: "MSI CLUTCH GM10",
      description: "Mouse básico para gaming",
      category: "Mouse",
    },
    {
      name: "MSI GS40 Phantom",
      description: 'Laptop ultradelgada con 14"',
      category: "Keyboard",
    },
    {
      name: "MSI Infinite X",
      description: "PC para gaming con RTX 2070",
      category: "CPU",
    },
    {
      name: "MSI Creator 17",
      description: "Laptop para creadores con 4K",
      category: "Keyboard",
    },
    {
      name: "MSI RTX 2060 Super Ventus",
      description: "Tarjeta gráfica RTX 2060 Super",
      category: "Graphics Card",
    },
    {
      name: "MSI MAG CoreLiquid 240R",
      description: "Refrigeración líquida AIO",
      category: "Cooling System",
    },
    {
      name: "MSI MAG B550",
      description: "Placa base B550 para Ryzen 5000",
      category: "Motherboard",
    },
    {
      name: "MSI Trident 3",
      description: "PC compacta para gaming",
      category: "CPU",
    },
    {
      name: "MSI GS65 Stealth",
      description: "Laptop gaming ultradelgada",
      category: "Keyboard",
    },
    {
      name: "MSI Optix MAG272CQR",
      description: 'Monitor curvo 165Hz 27"',
      category: "Monitor",
    },
    {
      name: "MSI CLUTCH GM60",
      description: "Mouse gaming con RGB",
      category: "Mouse",
    },
    {
      name: "MSI Creator P100",
      description: "PC para creadores con RTX 2070",
      category: "CPU",
    },
    {
      name: "MSI MAG Z390",
      description: "Placa base para Intel Z390",
      category: "Motherboard",
    },
    {
      name: "MSI RTX 3090 Ventus",
      description: "Tarjeta gráfica RTX 3090",
      category: "Graphics Card",
    },
  ],
  Asus: [
    {
      name: "Asus ROG Strix Keyboard",
      description: "RGB Mechanical",
      category: "Keyboard",
    },
    {
      name: "Asus TUF Gaming Mouse",
      description: "Ergonomic design",
      category: "Mouse",
    },
    {
      name: "Asus ProArt Monitor",
      description: "4K UHD display",
      category: "Monitor",
    },
    {
      name: "Asus ROG Strix CPU",
      description: "High performance",
      category: "CPU",
    },
    { name: "Asus TUF Gaming GPU", description: "RTX 3080", category: "GPU" },
    { name: "Asus Vengeance RAM", description: "16GB DDR4", category: "RAM" },
    {
      name: "Asus 1TB Hard Drive",
      description: "7200 RPM speed",
      category: "Hard Drive",
    },
    { name: "Asus NVMe SSD", description: "1TB Storage", category: "SSD" },
    {
      name: "Asus Z590 Motherboard",
      description: "Wi-Fi 6",
      category: "Motherboard",
    },
    {
      name: "Asus 850W Power Supply",
      description: "80 Plus Gold",
      category: "Power Supply",
    },
    {
      name: "Asus ROG Cooling System",
      description: "Liquid cooling",
      category: "Cooling System",
    },
    {
      name: "Asus Windows 10",
      description: "Pre-installed OS",
      category: "Operating System",
    },
    {
      name: "Asus Dual Graphics Card",
      description: "RTX 2060",
      category: "Graphics Card",
    },
    {
      name: "Asus Xonar Sound Card",
      description: "Surround sound",
      category: "Sound Card",
    },
    {
      name: "Asus Wi-Fi Network Card",
      description: "Dual-band",
      category: "Network Card",
    },
    { name: "Asus 1080p Webcam", description: "HD camera", category: "Webcam" },
    {
      name: "Asus Inkjet Printer",
      description: "Compact design",
      category: "Printer",
    },
    {
      name: "Asus Laser Scanner",
      description: "Fast scanning",
      category: "Scanner",
    },
    {
      name: "Asus Gaming Speakers",
      description: "Surround sound",
      category: "Speakers",
    },
    {
      name: "Asus ROG Keyboard",
      description: "RGB Backlit",
      category: "Keyboard",
    },
    {
      name: "Asus ROG Mouse",
      description: "High precision",
      category: "Mouse",
    },
    {
      name: "Asus ProArt Monitor",
      description: "Color accurate",
      category: "Monitor",
    },
    {
      name: "Asus Ryzen 9 CPU",
      description: "Octa-core power",
      category: "CPU",
    },
    {
      name: "Asus RTX 3070 GPU",
      description: "Gaming powerhouse",
      category: "GPU",
    },
    { name: "Asus 32GB RAM", description: "Fast memory", category: "RAM" },
    {
      name: "Asus 512GB Hard Drive",
      description: "Fast read speed",
      category: "Hard Drive",
    },
    { name: "Asus 1TB SSD", description: "Fast booting", category: "SSD" },
    {
      name: "Asus ROG Strix Motherboard",
      description: "Enhanced cooling",
      category: "Motherboard",
    },
    {
      name: "Asus 750W Power Supply",
      description: "Efficient energy",
      category: "Power Supply",
    },
    {
      name: "Asus Noctua Cooling System",
      description: "Silent operation",
      category: "Cooling System",
    },
    {
      name: "Asus Windows 11",
      description: "Latest OS",
      category: "Operating System",
    },
    {
      name: "Asus RTX 3080 Ti Graphics Card",
      description: "Max performance",
      category: "Graphics Card",
    },
    {
      name: "Asus Essence Sound Card",
      description: "High-end audio",
      category: "Sound Card",
    },
    {
      name: "Asus 2.5G Network Card",
      description: "Ultra-fast speed",
      category: "Network Card",
    },
    {
      name: "Asus 4K Webcam",
      description: "Ultra HD video",
      category: "Webcam",
    },
    {
      name: "Asus Laser Printer",
      description: "High print speed",
      category: "Printer",
    },
    {
      name: "Asus Flatbed Scanner",
      description: "High resolution",
      category: "Scanner",
    },
    {
      name: "Asus Soundbar Speakers",
      description: "Deep bass",
      category: "Speakers",
    },
    {
      name: "Asus ROG Strix Wireless Keyboard",
      description: "Bluetooth connectivity",
      category: "Keyboard",
    },
    {
      name: "Asus TUF Gaming Mouse",
      description: "DPI adjustable",
      category: "Mouse",
    },
    {
      name: "Asus 4K Monitor",
      description: "Wide color gamut",
      category: "Monitor",
    },
    {
      name: "Asus Core i7 CPU",
      description: "High clock speed",
      category: "CPU",
    },
    {
      name: "Asus GeForce GTX GPU",
      description: "1080p gaming",
      category: "GPU",
    },
    { name: "Asus 8GB RAM", description: "Reliable memory", category: "RAM" },
    {
      name: "Asus 2TB Hard Drive",
      description: "Long-lasting storage",
      category: "Hard Drive",
    },
    { name: "Asus 500GB SSD", description: "Speed boost", category: "SSD" },
    {
      name: "Asus ATX Motherboard",
      description: "Support for overclocking",
      category: "Motherboard",
    },
    {
      name: "Asus 650W Power Supply",
      description: "Silent fan",
      category: "Power Supply",
    },
    {
      name: "Asus Hyper 212 Cooling System",
      description: "Air cooling",
      category: "Cooling System",
    },
    {
      name: "Asus Linux OS",
      description: "Lightweight OS",
      category: "Operating System",
    },
    {
      name: "Asus ROG Strix Graphics Card",
      description: "Premium performance",
      category: "Graphics Card",
    },
    {
      name: "Asus Xonar AE Sound Card",
      description: "Superior sound",
      category: "Sound Card",
    },
    {
      name: "Asus Gigabit Network Card",
      description: "Stable connection",
      category: "Network Card",
    },
    {
      name: "Asus 720p Webcam",
      description: "Affordable quality",
      category: "Webcam",
    },
    {
      name: "Asus All-in-One Printer",
      description: "Compact design",
      category: "Printer",
    },
    {
      name: "Asus Flatbed Laser Scanner",
      description: "High speed",
      category: "Scanner",
    },
    {
      name: "Asus Bluetooth Speakers",
      description: "Wireless sound",
      category: "Speakers",
    },
    {
      name: "Asus ROG Mechanical Keyboard",
      description: "Durable keys",
      category: "Keyboard",
    },
    {
      name: "Asus TUF Mousepad",
      description: "Comfortable surface",
      category: "Mouse",
    },
    {
      name: "Asus 144Hz Gaming Monitor",
      description: "Smooth gameplay",
      category: "Monitor",
    },
    {
      name: "Asus Core i9 CPU",
      description: "Best performance",
      category: "CPU",
    },
    {
      name: "Asus RTX 3090 GPU",
      description: "Top-tier graphics",
      category: "GPU",
    },
    {
      name: "Asus 16GB RAM",
      description: "Fast and efficient",
      category: "RAM",
    },
    { name: "Asus 256GB SSD", description: "Budget storage", category: "SSD" },
    {
      name: "Asus ROG Strix Motherboard",
      description: "Overclocking support",
      category: "Motherboard",
    },
    {
      name: "Asus 850W Platinum Power Supply",
      description: "Efficient power",
      category: "Power Supply",
    },
    {
      name: "Asus Water Cooling System",
      description: "Best cooling",
      category: "Cooling System",
    },
  ],
};


module.exports = {
  brandCategoryMap,
  countriesdb,
  brandsdb,
  categoriesdb,
  brandsIds,
  productsdb,
};
