// cohesive

class Youtubes {
    private    firstname: string;
    private lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getFirstname() {
        console.log("My firstname is " + this.firstname + " "+ this.lastname + " " + this.age);
    }

    // getLastname() {
    //     console.log("My lastname is " );
    // }
    // getAge() {
    //     console.log("My lastname is " + this.age);
    // }
}

// Instantiate the object
let ytobj = new Youtubes("Sumant", "Kumar", 25);

// Call the methods
ytobj.age = 55
ytobj.getFirstname();
// ytobj.getLastname();
// ytobj.getAge();
