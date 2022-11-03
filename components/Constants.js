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
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "New" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Repeat" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Regular" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Regular" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Regular" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Post Repair" },
    { brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Repeat" }
]
