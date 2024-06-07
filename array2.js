const a = ["thor", "ironman", "spiderman"]
const dc = [ "superman" ,"flash","batman"]

//a.push(dc)
// console.log(a);

// const adc =a.concat(dc)
// console.log(adc);

const adc = [...a,...dc]
console.log(adc);

const bdc = [1,2,3,[4,5,],[6,7]]
const ddc = bdc.flat(Infinity)
console.log(ddc);