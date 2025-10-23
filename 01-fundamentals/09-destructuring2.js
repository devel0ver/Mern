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







const user = {
    id: 123,
    isActive: true,
    details: {
        name: 'Jane Doe',
        age: 30,
        settings: {
            isSubscriber: true,
            theme: 'dark'
        }
    }
};

// YOUR GOAL:
// Complete the function signature below so that it extracts the following:
// 1. The 'id' (as 'userId') directly from the user object.
// 2. The deeply nested 'name' from 'details'.
// 3. The deeply nested 'isSubscriber' from 'details.settings'.
// 4. Provide a default value of 'light' for 'theme' (even though it's present).


function displayUserDetails({ id: userId, details: {name, settings: {isSubscriber, theme = 'light'} } }  ) {
    console.log(`ID: ${userId}`);
    console.log(`Name: ${name}`);
    console.log(`Subscriber: ${isSubscriber}`);
    console.log(`Theme: ${theme}`); // <-- Logs the destructured value ('dark') or the default ('light') if it were missin
}

displayUserDetails(user);

// Expected Output:
// ID: 123
// Name: Jane Doe
// Subscriber: true
// Theme: dark (The default 'light' is correctly overridden by the value in the object)



// Puzzle 4: Simple Array Destructuring for Variable Swapping

let a = 100;
let b = 200;

// YOUR GOAL:
// 1. Use a single line of array destructuring to swap the values of 'a' and 'b' without using a temporary variable.
[ a,b ] = [ b,a];

console.log(`a: ${a}, b: ${b}`); // Expected: a: 200, b: 100



// Puzzle 5: Ignoring Elements and Combining Destructuring with Return Values

function getCoordinates() {
    // Returns [latitude, longitude, accuracy_in_meters, timestamp]
    return [40.7128, -74.0060, 50, 1678886400000];
}

// YOUR GOAL:
// 1. Call getCoordinates().
// 2. Destructure the result to extract ONLY the 'latitude' and 'longitude'.
// 3. Use commas to skip the 'accuracy_in_meters' and the 'timestamp'.

let [ lat,lon,, ] = getCoordinates();

console.log(lat, lon); // Expected: 40.7128 -74.006


// Puzzle 6: Complex Nested Array Destructuring with Aliases and Defaults
const companyData = {
    settings: {
        theme: 'modern',
        status: 'online'
    },
    metrics: [
        { id: 'M1', value: 95 },
        { id: 'M2', value: 80 }
    ],
    // 'license' is intentionally missing
};

// YOUR GOAL:
// 1. Destructure 'status' from 'settings'.
// 2. Destructure the 'value' from the FIRST item in the 'metrics' array and rename it to 'primaryValue'.
// 3. Destructure 'license' and give it a default value of 'Free Tier' because it's missing.

let { 
    settings: {
        status: currentStatus
    },
    metrics: [{value: primaryValue}],
    license: licenseKey = 'Free Tier'
} = companyData;

console.log(currentStatus, primaryValue, licenseKey); // Expected: online 95 Free Tier




// Puzzle 7: Deep Rest Destructuring

const salesReport = {
    date: '2025-01-01',
    region: 'North',
    summary: {
        totalRevenue: 50000,
        transactions: [
            { id: 1001, amount: 2500, status: 'complete' },
            { id: 1002, amount: 1500, status: 'complete' },
            { id: 1003, amount: 1000, status: 'pending' }
        ]
    }
};

// YOUR GOAL:
// 1. Destructure the top-level 'date'.
// 2. Destructure 'totalRevenue' from the nested 'summary'.
// 3. Destructure the 'amount' of the **first** transaction in the 'transactions' array and rename it to 'firstSaleAmount'.
// 4. Use the **array rest operator** to collect the **remaining** transactions into a new array called 'otherTransactions'.

let { 
    date: reportDate, // Destructures and renames top-level 'date'
    summary: {  // Enters the nested summary object
        totalRevenue, // Extracts totalRevenue
        transactions:[ // Enters the 'transactions' array
            {amount: firstSaleAmount}, // Destructures the 'amount' from the first item and rename it 'firstSaleAmount'
            ...otherTransactions // Using the rest operator to collect the remaining transactions.
        ]
    },
} = salesReport;

console.log(reportDate, firstSaleAmount, otherTransactions.length, otherTransactions[1].status); 
// Expected: 2025-01-01 2500 2 pending