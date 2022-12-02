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
}

const numbers = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";
console.log(`Total sum of numbers is ${sum(numbers)}.`);