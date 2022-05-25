// 1 . Given an array of 0's and 1's find out number of 0's

const arr = [1,0,0,1,1,0,0,1,0];
let one = 0, zero = 0;

arr.filter((x)=>{
  if(x===0){
    zero++
  }
  else{
    one++
  }
})
console.log("Number of zero :",zero, "Number of one :",one);


//   2. Given an array find out total no. of odd and even nos.

const array = [1,2,3,4,5,6,7,8,9];
let odd = 0, even = 0;
array.filter((y)=>{
  if(y%2==0){
    even++
  }
  else{
    odd++
  }
})
console.log("No. of even :",even,"No.of odd :" , odd);

// 3.Given a string find out number of vowels

const str = "PREPBYTES";

let vowels = 0;
str.split("").filter((x)=>{
  if(x=="A"||x=="E"||x=="I"||x=="O"||x=="U"){
    vowels++
  }
})

console.log("No. of vowels :",vowels);




