// let name = 'hari'
// let age = 34

//array of element

//index start from 0
let arr = ['Hari',34,true]

//length - no of element present in the array
console.log(arr.length);

//print the complete array
console.log(arr);

//print the specific element using index
console.log(arr[2]);

//print the undefined index
console.log(arr[3]);

//add elements to the array
arr[3] = 'Welcome'
console.log(arr);

console.log(arr[0],arr[1]);


arr[1]= 30
console.log(arr); 
arr = ['Hari',34,true]


console.log(arr.push("undefined",'Playwright'));
console.log(arr);


let popMethod = arr.pop()
console.log(popMethod);
console.log(arr); 


let unshiftarray = arr.unshift('mango',100)
console.log(unshiftarray);
console.log(arr); 


let shiftedArray = arr.shift()
console.log(shiftedArray);
console.log(arr); 



let slicedArray = arr.slice()

console.log(slicedArray);

let slicedArray1 = arr.slice(1,4)
console.log(slicedArray1);
console.log(arr);



let splicedArray = arr.splice(2,2)
console.log(splicedArray); 
console.log(arr);


let splicedArray1 = arr.splice(1,1,'sai','sreeni','sanjeev')
console.log(splicedArray1); //[]
console.log(arr); 


console.log(arr.includes(100));


console.log(arr.reverse());



console.log(arr.join()); 
console.log(arr.join('-')); 


 let arr1 = [100,110,250,268]
 console.log(arr1.map((num)=>num*2)); 

 

let arr2 = [1,2,3,4,5]
 console.log(arr2.filter((num)=>num>1));