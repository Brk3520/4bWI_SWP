interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean; // ? = optinal
}


const person = {
    firstname: "Hansi",
    lastname: "Müller",
    age: 70,
};


function printName(person: Person) {
    console.log(person.isMale);
}
printName(person);