//const tinder = new Object()// singeltan
//const tinderUser = {}//non sigle

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"c" ,4:"d"} 
// const obj3=  Object.assign({},obj1,obj2)//asign method
const obj3 = {...obj1,...obj2}//spread operation
console.log(obj3);

