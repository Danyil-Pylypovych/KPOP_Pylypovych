module lab_2{
    enum Category {
        Business_analyst,
        Developer,
        Designer,
        QA,
        Scrum_master,
    }

    interface Worker {
        id : number,
        Name : string,
        surname : string,
        available : boolean,
        salary : number,
        category : Category,
        markPrize : IPrizeLogger;
    }

    interface IPrizeLogger{
        (someStr : string) : void;
    }

    interface Person{
        name : string;
        email : string;
    }

    interface Author extends Person{
        numBooksPubleshed : number;
    }

    interface Librarian extends Person{
        department : string;
        assistCustomer(custName : string) : void;
    }
    
    class UniversityLibrarian implements Librarian{
        name: string;
        email: string;
        department: string;
        
        constructor(name : string, email : string, department : string){
            this.name = name;
            this.email = email;
            this.department = department;
        }

        assistCustomer(custName: string) : void {
            console.log(`${this.name} is assisting ${custName}`);
        }
        
    }

    abstract class ReferenceItem {
        // title : string;
        // year : number;

        constructor(public title : string, protected year : number){
            console.log('Creating a new ReferenceItem ...' );
        }

        printItem() : void {
            console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        }

        private _publisher : string | undefined;

        get publisher() : string {
            if(this._publisher != null){
                return this._publisher.toUpperCase();
            }
            return "";
        }

        set publisher(newPublisher : string) {
            this._publisher = newPublisher;
        }

        static department : string = "Static_department";

        abstract printCitation() : void;
    }

    class Encyclopedia extends ReferenceItem {
        
        constructor(title : string, year : number, public edition : number){
            super(title, year);
        }

        override printItem() : void {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }

        printCitation(): void {
            console.log(`${this.title} - ${this.year}`);
        }
    }

    let logPrize : IPrizeLogger = (someStr : string) => {
        console.log(someStr);
    }

    function getAllworkers() : Worker[] {
        let workers : Worker[] = [
            {id : 0, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category : Category.Developer, markPrize : logPrize},
            {id : 1, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category : Category.Designer, markPrize : logPrize},
            {id : 2, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category : Category.Developer, markPrize : logPrize},
            {id : 3, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category : Category.Scrum_master, markPrize : logPrize}
        ]
        return workers;
    }

    function getWorkerByID(id : number) : Worker | undefined {
        return getAllworkers().find(worker => worker.id == id);
    }

    function printWorker(worker : Worker) : void {
        console.log(`${worker.Name} ${worker.surname} got salary ${worker.salary}`);
    }

    getAllworkers()[0].markPrize("HELLO WORLD");

    let favoriteAuthor : Author = {
        name  : "Dan",
        email : "Dan_super_author@gmail.com",
        numBooksPubleshed : 25
    };
    // let favoriteLibrarian : ILibrarian = {
    //     name  : "Pit",
    //     email : "Pit_super_librarian@gmail.com",
    //     department : "lib_deparment",
    //     assistCustomer : (custName : string) => {
    //         console.log(`${custName} assisted!`);
    //     }
    // };
    let favoriteLibrarian : Librarian = new UniversityLibrarian("Pit", "Pit_super_librarian@gmail.com", "lib_deparment");
    favoriteLibrarian.assistCustomer("Dan");

    // let ref : ReferenceItem = new ReferenceItem("SomeTitle", 2012);
    // ref.printItem();

    // ref.publisher = "publisher_name";
    // console.log(ref.publisher);

    // ref.printItem();

    let refBook : Encyclopedia = new Encyclopedia("EncyclopediaTitle", 2003, 6);
    refBook.printItem();
    refBook.printCitation();
    
}