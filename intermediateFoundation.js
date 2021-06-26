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

 console.log(fibonacci(40));

function secondToLast(arr){
    if(arr.length>2){
        return arr[arr.length-2];
    }else{
       return null;
    }
}

// console.log(secondToLast([42,true,4,"Liam",7,"jackson",false]));
// console.log(secondToLast([0,2]));

function arrayNthToLast(arr, N){
    console.log(N);
    console.log(N+1);
    if(arr>(N+1)){
        return arr[arr.length-N];
    }else{
        return null;
    }
}

// console.log(arrayNthToLast([42,true,4,"Liam",7,"jackson",false],3));
// console.log(arrayNthToLast([0,2], 4));