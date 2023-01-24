// addition all array values and get print console

 let n1 = [3,324,23,4,2,42,54];

 let ans = n1.reduce (myfunction)

 function myfunction(value,total){
  return   total + value
 } 
 console.log(`the total value is : ${ans}`)

