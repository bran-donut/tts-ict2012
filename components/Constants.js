export const navItems = [
  {
    //<HomeFilled className="w-6 h-6" />
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    text: "Home",
    link: "/main",
  },
  {
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    text: "Inventory",
    link: "/inventory",
    subItems: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "Scope",
        link: "/inventory/scope",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "Washer(AER)",
        link: "/inventory/washer",
      },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    text: "Schedule",
    link: "/schedule",
    subItems: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "View Schedule",
        link: "/schedule/view",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
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
