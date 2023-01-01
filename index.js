// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const employee2 = {...obj};
    employee2[key] = value;
    return employee2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj.streetAddress = value;
    return obj;

}


function deleteFromEmployeeByKey(obj, key) {
    const employee3 = {...obj};
    delete employee3[key];
    return employee3;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}