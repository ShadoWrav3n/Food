function factorial(n) {
    if(typeof(n) !== 'number' || !Number.isInteger(n)){
        return 'Error';
    }
    if(n>=1) {
        return n * factorial(n-1);
    }else {
        return 1;
    }
}
console.log(factorial(5))