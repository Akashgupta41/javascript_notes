//singleton
Object.create
//object litral
const my = Symbol("a1")

const js ={
    name:"hitesh",
    [my]: "mya1",
    age : 18,
    location: "jaipur"
}
console.log(js.name)//good
console.log(js["age"])//best 
console.log(js[my])//correct syntax for symbol


js.location = "odari"   //for changing 
Object.freeze(js)//for  freeze3 value

js.location = "chauraha"
console.log(js);