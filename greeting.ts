function sayHi(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHi(user);

class Person {
  firstName: String;
  lastName: String;
  age: number;
  phoneNumber: number;
  zip: number;
  occupation: String;
  hourlyWage: number;
  certifications: String[];
  constructor(
    firstName: String,
    lastName: String,
    age: number,
    phoneNumber: number,
    zip: number,
    occupation: String,
    hourlyWage: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.zip = zip;
    this.occupation = occupation;
    this.hourlyWage = hourlyWage;
  }

  setCertifications(certifications: String[]) {
    this.certifications = certifications;
  }

  getCertifications() {
    return this.certifications;
  }

  getDefaultEarnings() {
    return (
      this.firstName + " makes $" + this.hourlyWage * 40 + " in a 40 hour week."
    );
  }
  getEarnings(amountOfHours: number) {
    return (
      this.firstName +
      " makes $" +
      this.hourlyWage * amountOfHours +
      " in a " +
      amountOfHours +
      " hour week."
    );
  }

  printName() {
    return this.firstName + " " + this.lastName;
  }
  printAll() {
    return (
      this.firstName +
      " " +
      this.lastName +
      " " +
      this.age +
      " " +
      this.phoneNumber +
      " " +
      this.zip +
      " " +
      this.occupation
    );
  }
  printJob() {
    return this.firstName + " " + this.lastName + " " + this.occupation;
  }
}

let myPerson = new Person(
  "Daniel",
  "Barber",
  22,
  5550123456,
  70043,
  "Web Dev",
  35
);
let myPerson1 = new Person(
  "John",
  "Adams",
  54,
  5550123457,
  70046,
  "Retired",
  200
);
let myPerson2 = new Person(
  "Kelsey",
  "Billiot",
  20,
  5550123458,
  70049,
  "Student",
  10
);
let myPerson3 = new Person("David", "Starks", 31, 5550123459, 70041, "Ceo", 75);

let person = myPerson.printAll();
let person1 = myPerson1.printAll();
let person2 = myPerson2.printAll();
let person3 = myPerson3.printAll();
let personsWage = myPerson.getEarnings(50);
let personsWage1 = myPerson.getDefaultEarnings();

document.getElementById("one").innerHTML = person;
document.getElementById("two").innerHTML = person1;
document.getElementById("three").innerHTML = person2;
document.getElementById("four").innerHTML = person3;
document.getElementById("five").innerHTML = personsWage;
document.getElementById("six").innerHTML = personsWage1;

myPerson.setCertifications(["MBA", "CSM", "MCSD"]);

interface PersonOptions {
  firstName: String;
  lastName: String;
  age?: number;
  phoneNumber?: number;
  zip?: number;
  occupation?: String;
  hourlyWage?: number;
}
/* cant figure this out
optionalMethod(something: any){
    return something;
}
}*/
