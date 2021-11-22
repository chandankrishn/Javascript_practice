function Person(firstName, lastName) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;

    // a method which returns the full name
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var myPerson = new Person("John", "Smith");
console.log(myPerson.fullName());

var abc = new Person("Hello","Java");
console.log(abc.fullName());

console.log("first nmae");
console.log(myPerson.firstName);
