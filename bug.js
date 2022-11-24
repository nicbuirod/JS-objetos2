
//solución 1
let checkEquals = (arr1, arr2) =>{
  let res = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      res = true;
    } else {
      res = false;
      i = arr1.length;
    }
  }
  return res;
}

console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 6, 7]));

//solución 2
const checkEquals2 = (arr1, arr2) => {  
    
   return arr1.toString() === arr2.toString() 
}

console.log(checkEquals2([1, 2], [1, 3]));
console.log(checkEquals2([1, 2], [1, 2]));
console.log(checkEquals2([4, 5, 6], [4, 5, 6]));
console.log(checkEquals2([4, 7, 6], [4, 5, 6]));
console.log(checkEquals2([4, 7, 6], [4, 6, 7]));
