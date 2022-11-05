import { HomeFilled } from "@ant-design/icons";
import Image from "next/image";

function getIcons() {
  const items = require.context('./assets', false, /\.(svg)$/);
  let images = {};
  items.keys().map((item, i) => {
      return images[item.replace('./', '')] = items(item).default;
  })
  return images;
}

const icons = getIcons();

export const navItems = [
  {
    icon: <HomeFilled style={{fontSize: 24}} />,
    text: "Home",
    link: "/main",
  },
  {
    icon: <Image src={icons['Inventory.svg']} width={24} height={24} alt="inventory" />,
    text: "Inventory",
    link: "",
    subItems: [
      {
        icon: <Image src={icons['Scope.svg']} width={24} height={24} alt="scope" />,
        text: "Scope",
        link: "/inventory?view=Scope",
      },
      {
        icon: <Image src={icons['Washer.svg']} width={24} height={24} alt="washer" />,
        text: "Washer (AER)",
        link: "/inventory?view=Washer",
      },
    ],
  },
  {
    icon: <Image src={icons['Schedule.svg']} width={24} height={24} alt="schedule" />,
    text: "Schedule",
    link: "",
    subItems: [
      {
        icon: <Image src={icons['ViewSchedule.svg']} width={24} height={24} alt="view schedule" />,
        text: "View Schedule",
        link: "/schedule/view",
      },
      {
        icon: <Image src={icons['EditSchedule.svg']} width={24} height={24} alt="edit schedule" />,
        text: "Edit Schedule",
        link: "/schedule?action=Edit",
      },
    ],
  },
];

export const equipments = [
  {
    brand: "",
    scopeType: "",
    modelNumber: "MEDIVATOR 1A",
    serialNumber: 21904908,
    status: "",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF403",
    serialNumber: 21904890,
    status: "New",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF404",
    serialNumber: 21904891,
    status: "New",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF405",
    serialNumber: 21904892,
    status: "Repeat",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF406",
    serialNumber: 21904893,
    status: "Regular",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF407",
    serialNumber: 21904894,
    status: "Regular",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF408",
    serialNumber: 21904895,
    status: "Regular",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF409",
    serialNumber: 21904896,
    status: "Regular",
    frequency: 4,
    sampleDate: "14/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF410",
    serialNumber: 21904897,
    status: "Post Repair",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF411",
    serialNumber: 21904898,
    status: "Repeat",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF412",
    serialNumber: 21904899,
    status: "New",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF413",
    serialNumber: 21904900,
    status: "New",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF414",
    serialNumber: 21904901,
    status: "Repeat",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF415",
    serialNumber: 21904902,
    status: "Regular",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF416",
    serialNumber: 21904903,
    status: "Regular",
    frequency: 5,
    sampleDate: "",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF417",
    serialNumber: 21904904,
    status: "Regular",
    frequency: 5,
    sampleDate: "",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF418",
    serialNumber: 21904905,
    status: "Regular",
    frequency: 5,
    sampleDate: "",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF419",
    serialNumber: 21904906,
    status: "Post Repair",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
  {
    brand: "OLYMPUS",
    scopeType: "tracheal intubation",
    modelNumber: "TJF420",
    serialNumber: 21904907,
    status: "Repeat",
    frequency: 5,
    sampleDate: "15/09/2022",
  },
];
