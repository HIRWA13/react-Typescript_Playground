export default function Playground() {
 
    // typescript types:

    // strings:
    const name: string = "Playgrouoond";
    console.log(name)
    const age:number = 34;
    console.log(age)
    const hobbies: string[] = ["Playing", "sleeping",  "eating"];
    console.log(hobbies[0] + ", " + hobbies[1]);
    let role: [string, number]; // tuple -> an array of fixed number and typed elements.
    role = ["admin", 5]
    console.log(role);

    type Person = {
        fname: string;
        age: number;
    }
    const user: Person = {
        fname: "John",
        age: 35
    }
    console.log(user.fname + ", " + user.age + "years old")

    // combining types: union types in typescript:
    let unionAge: number | string; // with union types, a variable can be of different types depending on what we just specified for it to have, we can combine the types and when we recieve an input of one of the types that we specified, typescript will be fine with that.

    unionAge = 5 // this is fine 
    unionAge = "5" // this is also fine
    // unionAge = true // this is not fine because we did not define that type.

    // working with functions:
    function printName(name:string) {
        console.log(name);
    }
    printName("Junior")

    // the any type:
     // -> this type specifies that a veriable should hold whatever that is comming in it, whatever it holds it supposed to hold it with no complains.

     // the unkown type: 
     // -> this type is used when we don't know what the type will be. this is usually used as a return type of functions.

     // ALIASES: type and interfaces.
     // 1. type
     type Person1 = {
        fname: string;
        age: number;
    }

    // intersecting types:
    type Person3 = Person & {
        pname: string;
        age: number
    }

    // 2. interfaces:
    interface Person2 {
        lname: string;
        hobbies: string[]
    }

    // intersectio=ng types:
    interface User extends Person2 {
        profession: string
    } // this User will also have properties from Person2.
    

    // the type and interfaces works almost in the same way but they have some differences such as when we want to have some properties from one type to be used in another type, we just use the intersection method by using the "&" operator.
    // for the interfaces, when we want an interface to have properties from another interface, we just use the extends keyword which is mostly used in es6 classes.
  return (
    <>
        <h1 className="text-3xl text-center">Hi there</h1>
    </>
  )
}