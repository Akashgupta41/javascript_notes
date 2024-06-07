// let  mynum = [1,2,3,4,5,6,7]


// // let newm = mynum.map((num) =>{ return num+10})
// console.log(newn);

// const newn= mynum.map( (num)=> num+10 )
// .map( (num) => num*2)
// .o
const n = [1,2,3]
const t = n.reduce(function(acc , cur){
    return acc+cur
},0)
console.log(t);