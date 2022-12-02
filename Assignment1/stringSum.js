/*
   Author: Jainam Gandhi
*/

function sum(numbers){
    let totalSum = 0;
    let curr = ""; //current number to add in total sum

    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] >= '0' && numbers[i]<= '9'){
            curr += numbers[i];
        }
        else{
            if(curr.length > 0){
                let value = parseInt(curr);
                totalSum += value;
                curr = "";
            }     
        }
    }

    if(curr.length > 0){
        let value = parseInt(curr);
        totalSum += value;
    }

    return totalSum;
    // var totalSum=0; // to store sum
    // var buffer="";

    // for(let i=0;i<str.length;i++)
    // {
    //     if(str[i]>='0' && str[i]<='9') //if the current cht
    //         buffer+=str[i];
    //     else{
    //         if(buffer.length) // extract number from the buffer and add to the answer
    //         {
    //             totalSum+=parseInt(buffer);
    //             buffer=""; // reset buffer
    //         }
    //     }
    // }
    // // if there is still some number left in the buffer, add it to the answer
    // if(buffer.length) 
    // totalSum+=parseInt(buffer);

    // return totalSum;
}

const numbers = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";
console.log(`Total sum of numbers is ${sum(numbers)}.`);