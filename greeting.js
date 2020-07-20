function sayHi(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHi(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, zip, occupation, hourlyWage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Person.prototype.setCertifications = function (certifications) {
        this.certifications = certifications;
    };
    Person.prototype.getCertifications = function () {
        return this.certifications;
    };
    Person.prototype.getDefaultEarnings = function () {
        return (this.firstName + " makes $" + this.hourlyWage * 40 + " in a 40 hour week.");
    };
    Person.prototype.getEarnings = function (amountOfHours) {
        return (this.firstName +
            " makes $" +
            this.hourlyWage * amountOfHours +
            " in a " +
            amountOfHours +
            " hour week.");
    };
    Person.prototype.printName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.printAll = function () {
        return (this.firstName +
            " " +
            this.lastName +
            " " +
            this.age +
            " " +
            this.phoneNumber +
            " " +
            this.zip +
            " " +
            this.occupation);
    };
    Person.prototype.printJob = function () {
        return this.firstName + " " + this.lastName + " " + this.occupation;
    };
    return Person;
}());
var myPerson = new Person("Daniel", "Barber", 22, 5550123456, 70043, "Web Dev", 35);
var myPerson1 = new Person("John", "Adams", 54, 5550123457, 70046, "Retired", 200);
var myPerson2 = new Person("Kelsey", "Billiot", 20, 5550123458, 70049, "Student", 10);
var myPerson3 = new Person("David", "Starks", 31, 5550123459, 70041, "Ceo", 75);
var person = myPerson.printAll();
var person1 = myPerson1.printAll();
var person2 = myPerson2.printAll();
var person3 = myPerson3.printAll();
var personsWage = myPerson.getEarnings(50);
var personsWage1 = myPerson.getDefaultEarnings();
document.getElementById("one").innerHTML = person;
document.getElementById("two").innerHTML = person1;
document.getElementById("three").innerHTML = person2;
document.getElementById("four").innerHTML = person3;
document.getElementById("five").innerHTML = personsWage;
document.getElementById("six").innerHTML = personsWage1;
myPerson.setCertifications(["MBA", "CSM", "MCSD"]);
/* cant figure this out
optionalMethod(something: any){
    return something;
}
}*/
