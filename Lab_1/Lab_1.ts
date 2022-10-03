type worker = {
    id : number,
    Name : string,
    surname : string,
    available : boolean,
    salary : number,
    category : Category,
}

enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master,
}

function getAllworkers() : worker[] {
    let workers : worker[] = [
    {id : 0, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category : Category.Developer},
    {id : 1, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category : Category.Designer},
    {id : 2, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category : Category.Developer},
    {id : 3, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category : Category.Scrum_master}
    ]
    return workers;
    }
    let workers : worker[] = getAllworkers();
    console.log(workers);
    console.log("-------------------");
    
    function logFirstAvailable(workers = getAllworkers()) : void
    {
        console.log(workers.length)
        for(let current of workers){
            if(current != null){
                if(current.available == true){
                    console.log(current.Name);
                    console.log(current.surname);
                    break;
                }
            }
        }

        
    }
console.log()
logFirstAvailable(getAllworkers());
console.log("-------------------");
logFirstAvailable();
console.log("-------------------");

function getWorkersNamesByCategory(category : Category = Category.Developer) : Array<string> {
    let arr : Array<string> = new Array<string>();
    workers = getAllworkers();
    for(let workerDeveloper of workers){
        if(workerDeveloper.category == category){
            arr.push(workerDeveloper.surname);
        }
    }
    return arr;
}

function logWorkersNames(arr = getWorkersNamesByCategory()) : void {
    console.log("Workers developer:");
    for(let surname of arr){
        console.log(surname);
    }
}

logWorkersNames(getWorkersNamesByCategory(Category.Developer));
console.log("-------------------");

function getWorkerByID(id : number) : worker | undefined {
    return getAllworkers().find(worker => worker.id == id);
}

function createCustomerID(Name : string, id : number) : string {
    return Name.concat(id.toString());
}

let myID : string = createCustomerID("Ann", 10);
console.log(myID);
console.log("-------------------");

let idGenerator : typeof createCustomerID = (Name : string, id : number) => {
    return Name.concat(id.toString());
};

idGenerator = createCustomerID;
console.log(idGenerator("Ann", 10));
console.log("-------------------");

function createCustomer(Name : string, age? : number, city? : string) : void {
    console.log(`${Name} ${age != undefined ? age : "" } ${city != undefined ? city : ""}`);
}

createCustomer("Danyil");
createCustomer("Danyil", 19);
createCustomer("Danyil", 22, "Kyiv");
console.log("-------------------");

function сheckoutWorkers(customer : string, ...workerIDs: number[]) : Array<worker> {
    let availableWorkes : Array<worker> = new Array<worker>();
    for(let id of workerIDs){
        let worker = getWorkerByID(id);
        if(worker?.available){
            availableWorkes.push(worker);
        }
    }

    console.log(`Customer: ${customer}`);
    return availableWorkes;
}

let foundWorker : worker | undefined = getWorkerByID(2);
if(foundWorker != null){
    console.log(`Name: ${foundWorker.Name}`);
    console.log(`Surname: ${foundWorker.surname}`);
    console.log(`Salary: ${foundWorker.salary}`);
}
console.log("-------------------");

let myWorkers : Array<worker> = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => {
    console.log(`${worker.Name} ${worker.surname}`);
});

console.log("-------------------");