import { Issue } from './Issue';

export let ISSUES : Issue[] = [
    {   
        id: 1,
        description: "System is slow",
        severity: "Minor",
        status: "Open",
        createdDate: "19/07/2018",
        resolvedDate: "",
    },
    {   
        id: 2,
        description: "System is crashing a lot",
        severity: "Major",
        status: "In Progress",
        createdDate: "21/07/2018",
        resolvedDate: "",
    },
    {   
        id: 3,
        description: "DoS attack on Server",
        severity: "Critical",
        status: "In Progress",
        createdDate: "20/07/2018",
        resolvedDate: "",
    },
    {   
        id: 4,
        description: "App is giving 404 error",
        severity: "Major",
        status: "Open",
        createdDate: "20/07/2018",
        resolvedDate: "",
    },
    {   
        id: 5,
        description: "App is not working",
        severity: "Major",
        status: "Open",
        createdDate: "20/07/2018",
        resolvedDate: "",
    },
    {   
        id: 6,
        description: "Account blocked",
        severity: "Minor",
        status: "Open",
        createdDate: "21/07/2018",
        resolvedDate: "",
    },
]