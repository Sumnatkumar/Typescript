// cohesive
var Youtubes = /** @class */ (function () {
    function Youtubes(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Youtubes.prototype.getFirstname = function () {
        console.log("My firstname is " + this.firstname + " " + this.lastname + " " + this.age);
    };
    return Youtubes;
}());
// Instantiate the object
var ytobj = new Youtubes("Sumant", "Kumar", 25);
// Call the methods
ytobj.age = 55;
ytobj.getFirstname();
// ytobj.getLastname();
// ytobj.getAge();
