import { HomeFilled } from "@ant-design/icons";
import Image from "next/image";
import { getIcons } from "./Helpers";

const icons = getIcons();

export const navItems = [
  {
    icon: <HomeFilled style={{ fontSize: 24 }} />,
    text: "Home",
    link: "/home",
  },
  {
    icon: <Image src={icons["Inventory.svg"]} width={24} height={24} alt="inventory" />,
    text: "Inventory",
    link: "",
    subItems: [
      {
        icon: <Image src={icons["ViewInventory.svg"]} width={24} height={24} alt="view inventory" />,
        text: "View Inventory",
        link: "/inventory",
      },
      {
        icon: <Image src={icons["EditInventory.svg"]} width={24} height={24} alt="manage inventory" />,
        text: "Manage Inventory",
        // link: "/inventory?view=Washer%20(AER)",
        link: "/inventory/manage?action=Edit",
      },
    ],
  },
  {
    icon: <Image src={icons["Schedule.svg"]} width={24} height={24} alt="schedule" />,
    text: "Schedule",
    link: "",
    subItems: [
      {
        icon: <Image src={icons["ViewSchedule.svg"]} width={24} height={24} alt="view schedule" />,
        text: "View Schedule",
        link: "/schedule",
      },
      {
        icon: <Image src={icons["EditSchedule.svg"]} width={24} height={24} alt="manage schedule" />,
        text: "Manage Schedule",
        link: "/schedule/manage?action=Edit",
      },
    ],
  },
];

export const equipments = [
  {
    "brand": "",
    "scopeType": "",
    "modelNumber": "MEDIVATOR 1A",
    "serialNumber": 21904908,
    "status": "",
    "frequency": 5,
    "samplingStatus": "Regular",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF403",
    "serialNumber": 21904890,
    "status": "New",
    "frequency": 4,
    "samplingStatus": "Pending Results",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF404",
    "serialNumber": 21904891,
    "status": "New",
    "frequency": 4,
    "samplingStatus": "On Repair",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF405",
    "serialNumber": 21904892,
    "status": "Repeat",
    "frequency": 4,
    "samplingStatus": "Regular",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF406",
    "serialNumber": 21904893,
    "status": "Regular",
    "frequency": 4,
    "samplingStatus": "Pending Results",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF407",
    "serialNumber": 21904894,
    "status": "Regular",
    "frequency": 4,
    "samplingStatus": "On Repair",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF408",
    "serialNumber": 21904895,
    "status": "Regular",
    "frequency": 4,
    "samplingStatus": "Regular",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF409",
    "serialNumber": 21904896,
    "status": "Regular",
    "frequency": 4,
    "samplingStatus": "Pending Results",
    "sampleDate": "14/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF410",
    "serialNumber": 21904897,
    "status": "Post Repair",
    "frequency": 5,
    "samplingStatus": "On Repair",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF411",
    "serialNumber": 21904898,
    "status": "Repeat",
    "frequency": 5,
    "samplingStatus": "Regular",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF412",
    "serialNumber": 21904899,
    "status": "New",
    "frequency": 5,
    "samplingStatus": "Pending Results",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF413",
    "serialNumber": 21904900,
    "status": "New",
    "frequency": 5,
    "samplingStatus": "On Repair",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF414",
    "serialNumber": 21904901,
    "status": "Repeat",
    "frequency": 5,
    "samplingStatus": "Regular",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF415",
    "serialNumber": 21904902,
    "status": "Regular",
    "frequency": 5,
    "samplingStatus": "Pending Results",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF416",
    "serialNumber": 21904903,
    "status": "Regular",
    "frequency": 5,
    "samplingStatus": "Not in Schedule",
    "sampleDate": ""
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF417",
    "serialNumber": 21904904,
    "status": "Regular",
    "frequency": 5,
    "samplingStatus": "Not in Schedule",
    "sampleDate": ""
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF418",
    "serialNumber": 21904905,
    "status": "Regular",
    "frequency": 5,
    "samplingStatus": "Not in Schedule",
    "sampleDate": ""
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF419",
    "serialNumber": 21904906,
    "status": "Post Repair",
    "frequency": 5,
    "samplingStatus": "On Repair",
    "sampleDate": "15/09/2022"
  },
  {
    "brand": "OLYMPUS",
    "scopeType": "tracheal intubation",
    "modelNumber": "TJF420",
    "serialNumber": 21904907,
    "status": "Repeat",
    "frequency": 5,
    "samplingStatus": "Regular",
    "sampleDate": "15/09/2022"
  }
 ]

export const pastResults = [
  {
    sampleDate: "15/07/2022",
    fluidResultDate: "29/07/2022",
    fluidResult: "GROWTH",
    fluidResultComments: "",
    fluidResultActionTaken: "",
    swabResultDate: "30/07/2022",
    swabResult: "GROWTH",
    swaResultComments: "",
    swabResultActionTaken: "",
    swabResultRoomPerformed: "Room A",
  },
  {
    sampleDate: "15/08/2022",
    fluidResultDate: "28/08/2022",
    fluidResult: "GROWTH",
    fluidResultComments: "",
    fluidResultActionTaken: "",
    swabResultDate: "30/08/2022",
    swabResult: "GROWTH",
    swaResultComments: "",
    swabResultActionTaken: "",
    swabResultRoomPerformed: "Room A",
  },
  {
    sampleDate: "15/09/2022",
    fluidResultDate: "29/09/2022",
    fluidResult: "NO GROWTH",
    fluidResultComments: "",
    fluidResultActionTaken: "",
    swabResultDate: "30/09/2022",
    swabResult: "NO GROWTH",
    swaResultComments: "",
    swabResultActionTaken: "",
    swabResultRoomPerformed: "Room B",
  },
  {
    sampleDate: "15/10/2022",
    fluidResultDate: "28/10/2022",
    fluidResult: "NO GROWTH",
    fluidResultComments: "",
    fluidResultActionTaken: "",
    swabResultDate: "30/10/2022",
    swabResult: "NO GROWTH INCLUDING ELEVATOR",
    swaResultComments: "",
    swabResultActionTaken: "",
    swabResultRoomPerformed: "Room C",
  },
];
