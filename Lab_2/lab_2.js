var lab_2;
(function (lab_2) {
    let Category;
    (function (Category) {
        Category[Category["Business_analyst"] = 0] = "Business_analyst";
        Category[Category["Developer"] = 1] = "Developer";
        Category[Category["Designer"] = 2] = "Designer";
        Category[Category["QA"] = 3] = "QA";
        Category[Category["Scrum_master"] = 4] = "Scrum_master";
    })(Category || (Category = {}));
    class UniversityLibrarian {
        constructor(name, email, department) {
            this.name = name;
            this.email = email;
            this.department = department;
        }
        assistCustomer(custName) {
            console.log(`${this.name} is assisting ${custName}`);
        }
    }
    class ReferenceItem {
        // title : string;
        // year : number;
        constructor(title, year) {
            this.title = title;
            this.year = year;
            console.log('Creating a new ReferenceItem ...');
        }
        printItem() {
            console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        }
        get publisher() {
            if (this._publisher != null) {
                return this._publisher.toUpperCase();
            }
            return "";
        }
        set publisher(newPublisher) {
            this._publisher = newPublisher;
        }
    }
    ReferenceItem.department = "Static_department";
    class Encyclopedia extends ReferenceItem {
        constructor(title, year, edition) {
            super(title, year);
            this.edition = edition;
        }
        printItem() {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }
        printCitation() {
            console.log(`${this.title} - ${this.year}`);
        }
    }
    let logPrize = (someStr) => {
        console.log(someStr);
    };
    function getAllworkers() {
        let workers = [
            { id: 0, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer, markPrize: logPrize },
            { id: 1, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer, markPrize: logPrize },
            { id: 2, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer, markPrize: logPrize },
            { id: 3, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Scrum_master, markPrize: logPrize }
        ];
        return workers;
    }
    function getWorkerByID(id) {
        return getAllworkers().find(worker => worker.id == id);
    }
    function printWorker(worker) {
        console.log(`${worker.Name} ${worker.surname} got salary ${worker.salary}`);
    }
    getAllworkers()[0].markPrize("HELLO WORLD");
    let favoriteAuthor = {
        name: "Dan",
        email: "Dan_super_author@gmail.com",
        numBooksPubleshed: 25
    };
    // let favoriteLibrarian : ILibrarian = {
    //     name  : "Pit",
    //     email : "Pit_super_librarian@gmail.com",
    //     department : "lib_deparment",
    //     assistCustomer : (custName : string) => {
    //         console.log(`${custName} assisted!`);
    //     }
    // };
    let favoriteLibrarian = new UniversityLibrarian("Pit", "Pit_super_librarian@gmail.com", "lib_deparment");
    favoriteLibrarian.assistCustomer("Dan");
    // let ref : ReferenceItem = new ReferenceItem("SomeTitle", 2012);
    // ref.printItem();
    // ref.publisher = "publisher_name";
    // console.log(ref.publisher);
    // ref.printItem();
    let refBook = new Encyclopedia("EncyclopediaTitle", 2003, 6);
    refBook.printItem();
    refBook.printCitation();
})(lab_2 || (lab_2 = {}));
