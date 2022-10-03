var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers() {
    let workers = [
        { id: 0, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 1, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { id: 2, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { id: 3, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Scrum_master }
    ];
    return workers;
}
let workers = getAllworkers();
console.log(workers);
console.log("-------------------");
function logFirstAvailable(workers = getAllworkers()) {
    console.log(workers.length);
    for (let current of workers) {
        if (current != null) {
            if (current.available == true) {
                console.log(current.Name);
                console.log(current.surname);
                break;
            }
        }
    }
}
console.log();
logFirstAvailable(getAllworkers());
console.log("-------------------");
logFirstAvailable();
console.log("-------------------");
function getWorkersNamesByCategory(category = Category.Developer) {
    let arr = new Array();
    workers = getAllworkers();
    for (let workerDeveloper of workers) {
        if (workerDeveloper.category == category) {
            arr.push(workerDeveloper.surname);
        }
    }
    return arr;
}
function logWorkersNames(arr = getWorkersNamesByCategory()) {
    console.log("Workers developer:");
    for (let surname of arr) {
        console.log(surname);
    }
}
logWorkersNames(getWorkersNamesByCategory(Category.Developer));
console.log("-------------------");
function getWorkerByID(id) {
    return getAllworkers().find(worker => worker.id == id);
}
function createCustomerID(Name, id) {
    return Name.concat(id.toString());
}
let myID = createCustomerID("Ann", 10);
console.log(myID);
console.log("-------------------");
let idGenerator = (Name, id) => {
    return Name.concat(id.toString());
};
idGenerator = createCustomerID;
console.log(idGenerator("Ann", 10));
console.log("-------------------");
function createCustomer(Name, age, city) {
    console.log(`${Name} ${age != undefined ? age : ""} ${city != undefined ? city : ""}`);
}
createCustomer("Danyil");
createCustomer("Danyil", 19);
createCustomer("Danyil", 22, "Kyiv");
console.log("-------------------");
function сheckoutWorkers(customer, ...workerIDs) {
    let availableWorkes = new Array();
    for (let id of workerIDs) {
        let worker = getWorkerByID(id);
        if (worker === null || worker === void 0 ? void 0 : worker.available) {
            availableWorkes.push(worker);
        }
    }
    console.log(`Customer: ${customer}`);
    return availableWorkes;
}
let foundWorker = getWorkerByID(2);
if (foundWorker != null) {
    console.log(`Name: ${foundWorker.Name}`);
    console.log(`Surname: ${foundWorker.surname}`);
    console.log(`Salary: ${foundWorker.salary}`);
}
console.log("-------------------");
let myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => {
    console.log(`${worker.Name} ${worker.surname}`);
});
console.log("-------------------");
