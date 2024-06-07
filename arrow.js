const user = {
    username: "hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcoome to website`);
     

    }

}

// user.welcomeMessage()

// user.username = "same"
// user.welcomeMessage()
//  console.log(this);

  one = () =>{
    let  username = "hitesh"
    console.log(this);
 }

//  one()

const addTwo =  (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4));