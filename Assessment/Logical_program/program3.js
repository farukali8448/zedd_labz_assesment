// 3) let obj1 = { "greeting": "hello" };
// let obj2 = obj1;
// obj1["greeting"] = "Bye";
// console.log(obj1);
// console.log(obj2);

let obj1 = { "greeting": "hello" };
let obj2 = obj1;
 obj1["greeting"] = "Bye";
 console.log(obj1);
  console.log(obj2);

// Both obj1 and obj2 display the update value of the "greeting" property, which is "Bye".
//This behaviour is because is both variable reference the same object memory.
//Modifying the object through one variable reflects the change when accessing it through the others variables