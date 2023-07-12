function fibonacci(num) {
    if(num==1) return 0;
    if(num==2) return 1;
// calling faith 1
let fibnm1 = fibonacci(num-1);
//calling faith2
let fibnm2 = fibonacci(num-2);
return fibnm1+fibnm2;

}

module.exports = fibonacci;
