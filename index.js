require('datejs');  

function combineUsers(...args) {
    // Step 2: Initialize return object
    const combinedObject = {
        users: []
    };

    // Step 3 + 4: Loop through args and merge arrays using spread operator
    for (let arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    // Step 5: Get today's date using datejs
    const today = new Date();
    combinedObject.merge_date = today.toString("M/d/yyyy");

    // Step 7: Return final object
    return combinedObject;
}

module.exports = { combineUsers };



