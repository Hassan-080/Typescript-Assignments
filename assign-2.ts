// >>Exercise no. 1

 function calsum(m:number) {
     let sum:number=0
     for (let index = 0; index <= m; index++) {
        sum=sum+index 
     }    
     console.log(`sum of first 20 numbers are ${sum}`)
 }
 calsum(20)



// >>Exercise no. 2

 let arrnum:number[]=[2,4,7,8,9]
 function evenum(numarr:number[]) {

     for (let index = 0; index < numarr.length; index++) {
         const element = numarr[index];
         if (element%2==0) {
             console.log(element)
         }
        
     }
 }
 evenum(arrnum)



// >>Eexercise no. 3

 let arrnum2:number[]=[1,2,3,4,5,6]
 for (let index = 0; index < arrnum2.length; index++) {
     const element = arrnum2[index];
     if (element%2===0) {
         arrnum2.splice(index,1)
     }
 }
 console.log(arrnum2)



// >>Exercise no. 4
 const areacircle=(radius: number) => {
     let area:number=3.14159*(Math.pow(radius,2))
     return area
 }

 const result2=areacircle(40)
 console.log(result2)




// >>Exercise no. 5

 let grades:number[]=[70,40,80,90]
 const chechgrade=(grades: number[]) => { 
     for (let index = 0; index < grades.length; index++) {
         const element = grades[index];
         if (element<50) {
             grades.splice(index,1)
         }
     }
     return grades
  }

  let result=chechgrade(grades)
  console.log(`List of grades after removing failing grades are :`)
  console.log(result)


  // >>Exercise no. 

let numberarr:number[]=[10,3,7,9,2]
    function largestnum(arr:number[]):number {
        
        let largest = arr[0];
        for (let i = 0; i < arr.length; i++) {
            
            if (arr[i]>largest) {
                largest=arr[i]   
            }
            
        }
        return largest;
    }

    let resultss=largestnum(numberarr)
    console.log(resultss)