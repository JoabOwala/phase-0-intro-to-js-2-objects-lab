// Write your solution in this file!
const employees = {
    name: "Kijana",
    streetAddress: "123",
};

function updateEmployeeWithKeyAndValue(Obj,key,value){
    const newObj = {...Obj};
    newObj[key] = value;
    return newObj;
}

const employee = updateEmployeeWithKeyAndValue(employees,"name","R2-D2");


function destructivelyUpdateEmployeeWithKeyAndValue(Obj,key,value){
    Obj[key] = value;
    return Obj;
}

employee = destructivelyUpdateEmployeeWithKeyAndValue(employees,"name","Eminem");


function deleteFromEmployeeByKey(Obj,key,value){
    const newObj = {...Obj};
    newObj[key] = value;
    return newObj;
}

delete employee.name;

function destructivelyDeleteFromEmployeeByKey(Obj,key,value){
    Obj[key] = value;
    return Obj;
}
delete employees.name;