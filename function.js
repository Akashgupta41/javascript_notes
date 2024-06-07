function calculatePrice(...num1){
return num1
}

// console.log(calculatePrice(300,400,500))

const user ={
    username:"akash",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username:"same",
    price:399
})
//for array
const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));