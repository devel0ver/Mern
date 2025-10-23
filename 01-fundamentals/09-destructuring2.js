// Puzzle 1: Default Values, Renaming, and Basic Nesting
const userSettings = {
    userID: 404,
    theme: 'light',
    locale: 'en-US',
    data: {
        notifications: true,
        autoSave: false,
    }
    // 'timezone' is intentionally missing
};

// YOUR GOAL:
// 1. Destructure 'locale' and rename it to 'userLanguage'.
// 2. Destructure 'timezone' and assign it a default value of 'UTC' if it's not present.
// 3. Destructure 'autoSave' from the nested 'data' object.
// 4. Declare your destructuring expression below this comment.
let {
    locale: userLanguage,
    timezone: defaultTimezone = 'UTC',
    data: {
        autoSave: saveStatus
    }
} = userSettings;

console.log(userLanguage, defaultTimezone, saveStatus); // Expected: en-US UTC false


// Puzzle 2: Deeply Nested Array and Object Access
const projectData = {
    id: 'P001',
    name: 'Apollo Project',
    members: [
        { id: 1, name: 'Grace', role: 'Lead Dev' },
        { id: 2, name: 'Alex', role: 'Tester' },
        { id: 3, name: 'Ben', role: 'Designer' }
    ],
    metadata: {
        version: 1.5,
        status: {
            current: 'In Progress',
            lastUpdated: 1635000000000
        }
    }
};

// YOUR GOAL:
// 1. Destructure the 'name' of the project.
// 2. Destructure the 'name' of the **second** member in the 'members' array and rename it to 'testerName'.
// 3. Destructure the deeply nested 'current' status from 'metadata.status'.
// 4. Declare your destructuring expression below this comment.


let { 
    name: projectName,
    members: [,{name: testerName}],
    metadata: {
        status:{
            current: projectStatus
        }
    }
} = projectData;
console.log(projectName, testerName, projectStatus); // Expected: Apollo Project Alex In Progress


//Puzzle 3: The Rest Operator in Arrays and Objects
const inventory = {
    warehouseID: 'W-99',
    totalItems: 5,
    items: [
        { sku: 'A1', name: 'Keyboard', qty: 2 },
        { sku: 'B2', name: 'Mouse', qty: 1 },
        { sku: 'C3', name: 'Monitor', qty: 2 }
    ],
    location: 'Shelf 5'
};

// YOUR GOAL:
// 1. Destructure 'warehouseID'.
// 2. Use the **object rest operator** to collect the remaining properties of the 'inventory' object (all except 'warehouseID', 'totalItems', and 'items') into a new object called 'otherProps'.
// 3. Destructure the first item's 'name' from the 'items' array and rename it to 'mainItem'.
// 4. Use the **array rest operator** to collect the remaining items (Mouse and Monitor) into an array called 'spareItems'.
// 5. Declare your destructuring expression below this comment.

let {
    warehouseID: id,
    items: [{name: mainItem}, ...spareItems],
    totalItems,
    ...otherProps
} = inventory;

console.log(id, mainItem, otherProps.location, spareItems.length); // Expected: W-99 Keyboard Shelf 5 2