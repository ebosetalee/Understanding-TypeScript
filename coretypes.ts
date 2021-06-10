function add(n1: number, n2: number) {
    return n1 + n2;
}

const result = add(5, 2);
console.log(`The result is: ${result}`);

// object type:
const person: {
    name: string;
    age: number;
} = {
    name: "Jane",
    age: 30
};
// using {} defines the type as object but doesnt create a new js object
// its typescript notation of specialized object type.

console.log(person.name);

// a differnt way yo write that is:
const person1 = {
    name: "Janette",
    age: 31,
    hobbies: ["Sports", "Cooking "]
}; // no error

console.log(person1);

// For arrays:
let favActivity: string[];
// favActivity = "Sport" error
// favActivity = ["Sport", 1] error

// for it not to be error do:
let activity: any[];
activity = ["sit", 1, "eat", 2]; // no error
console.log(activity);

console.log(favActivity = ["eating"]);

// tuple type:
let role: [number, string]

console.log(role = [1, "Manager "])

// Enum

enum grade {A, B, C, D}
const records = {
    name: "Sandra",
    age: "13",
    course: "English",
    grade: grade.A
}

// Union
function combine (val1: number | string, val2: number | string) {
    let result: number | string; // requires a type
    if (typeof val1 === "number" && typeof val2 === "number") {
        result = val1 + val2;
    }else {
        result = val1.toString() + val2.toString();
    }
    return result;
}
console.log(combine(30, 26))
console.log(combine("John", "Doe"))
console.log(combine(30, "Dove"))

// function
let values: Function; //or
let combineValues: () => number;
//combineValues = combine -error no arg was passed to commbineValues


