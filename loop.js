//for loops
// for (let i = 0; i < 100; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// for (let i = 0; i <= 10; i++) {
//     // console.log(`outer loop ${i}`);
//     for (let j = 0; j  <=10; j++) {
//         // console.log(`inner loop ${j} and outer loop ${i}`);
//         console.log(i+ '*' +j + '='+i+j );
        
//     }
    
// }

// let my = ["hero","batman","iron"]
// console.log(my.length);

// for (let index = 0; index < my.length; index++) {
//     const element = my[index];
//     console.log(element)
// }

// //keywords breack & continoue

// for (let index = 0; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`)
//         break
//     }
//     console.log(`value is ${index}`);
    
// }
// for (let index = 0; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`)
//         continue
//     }
//     console.log(`value is ${index}`);
    
// }

//***************************while and do while looop********************************************* */

// let i = 0
//  while (i <= 10) {
//     console.log(`VALUE OF INDEX ${i}`);
//     i = i + 1;
// }

// let my = ["hero","batman","iron"]
// let arr =0
// while (arr<my.length) {
//  console.log(` array is ${my[arr]}`);
//  arr = arr+1
    
// }


//**************do while loop************************************************************ */

// let h = 11

// do {
//     console.log(`score is ${h}`);
//     h++
// } while (h <= 10);

/********************************For of loops****************************************** */

// const a = [1,2,3,4,5]

// for (const num of a) {
//     console.log(num);
// }
// const g = "hello";

// for (const geet of g) {
//     console.log(`hello mr ${geet}`);
    
// }

//maps
// const map = new Map()
// map.set('IN',"india");
// map.set('fr',"france");
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,value);
// }



// const myObject = {
//     'game' : 'BGMI',
//     'HAME': 'SUPER'
// }


// for (const [key,value] of myObject) {
//     console.log(key,value);
// }

/****************for in loop******************************************************** */

// const bog = {
//     js: 'javas',
//     cpp:'C++',
//     rb: "ruby"
// }
// for (const key in bog) {
//    console.log(`bog${key} ${bog[key]}`);
// }

// const g = [1,2,3,4,5]

// for (const key in g) {
//    console.log(key);
//     }

//*********************for each loop*********************************************************** */

// const a = ["hi","hello","namaste"]

// a.forEach( function (item) {
//     console.log(a);
// } )
/******************* filter******************************************************************************************************* */
// const my = [1,2,3,4,5,6]
// const newN =  my.filter((num) => {
//  return  num>4 
// })
// console.log(newN);


