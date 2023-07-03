//=====>Program-1====>



//The msd function is defined, which returns a Promise that resolves after a 5-second delay with the message "we are winner".
let msd=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("we are winner")
        },5000)
    })
}

//The virat function is defined, which returns a Promise that resolves after a 3-second delay with the message "we will be winning the game".
let virat=()=>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
         resolve("we will be winning the game")
   },3000)
})
}
//The dravid function is defined, which simply returns the string "we are already win the game".
let dravid=()=>{
return "we are already win the game"
}

let x=async ()=>{//The x function is defined as an asynchronous function.
console.log(await msd());
//Within the x function, the await keyword is used to wait for the msd Promise to resolve. Once resolved, the result is logged to the console.
console.log(await virat());
//await keyword is used again to wait for the virat Promise to resolve. Once resolved, the result is logged to the console.
console.log(dravid())
//dravid function is called, and the result is logged to the console.
}
x()
//The execution of the x function is asynchronous, and the await keyword ensures 
//that each promise is awaited and the results are logged in the specified order. 
//This ensures that "we are winner" is logged first, followed by "we will be winning the game",
// and then "we are already win the game".


//=====>Program-2====>
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 1500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 1000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('All promises resolved:');
      console.log(results);
    })
   // In the then callback, we log a success message along with the resolved results,
   // which will be an array containing the resolved values of each promise in the same order as the input array.
    .catch((error) => {
      console.log('An error occurred:');
      console.log(error);
    });


    //OUTPUT=====>
    
   // All promises resolved:
   //    [ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
  