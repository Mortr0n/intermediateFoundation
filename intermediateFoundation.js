function sigma(num){
    var sum=0;
    for(var i=0; i<=num; i++){
        sum+=i;
    }
    return sum;
}

// console.log(sigma(5));

function factorial(num){
    var sum=1;
    for(var i=1; i<=num; i++){
        sum*=i;
    }
    return sum;
}

// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(10));

function fibonacci(num){
    var fibonacciArr = [0,1];
    for(var i=2; i<=num; i++){
        fibonacciArr.push(fibonacciArr[i]=fibonacciArr[i-2]+fibonacciArr[i-1]);
    }
    return fibonacciArr;
}

//  console.log(fibonacci(40));

function secondToLast(arr){
    if(arr.length>2){
        return arr[arr.length-2];
    }else{
       return null;
    }
}

// console.log(secondToLast([42,true,4,"Liam",7,"jackson",false]));
// console.log(secondToLast([0,2]));

function arrayNthToLast(arr, N){ // come back to this.  struggling with getting the multiple arguments to work
    
    if(arr.length>(N+1)){
        return arr[arr.length-N];
    }else{
        return null;
    }
}

// console.log(arrayNthToLast([42,true,4,"Liam",7,"jackson",false],5));
// console.log(arrayNthToLast([0,2], 4));

function arraySecondLargest(arr){ //Going down a rabbit hole and fixing this so that all could be negative numbers and this would still work.
    var largest = arr[0];
    var secondLargest = 0;
    var smallestNumber = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0 && arr[i]<smallestNumber){
            smallestNumber=arr[i];
        }
    }
    largest= smallestNumber;
    secondLargest = smallestNumber;
    if(arr.length>2){
        for(var i=0; i<arr.length; i++){
            if(arr[i]>largest){
                largest=arr[i];
            }
        }
        for(var i=0; i<arr.length; i++){
            if(arr[i]!==largest){
                if(arr[i]>secondLargest){
                    secondLargest=arr[i];
                }
            }
        }
    }
    return secondLargest;
}

// console.log(arraySecondLargest([107,54,42,1,4,3.14,7]));
// console.log(arraySecondLargest([-1,-2, -5, -9 -8 -98]));

function doubleTrouble(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    arr = newArr;
    return arr;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]));