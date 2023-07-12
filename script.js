function fibonacci(num) {
    if(num === 1){
        return 0;
    }
      if(num === 2){
          return 1;
      }
  
      let first = 0, sec = 1, sum = -1;
      
      for(let i = 3; i<= num; i++){
          sum = first+ sec;
          first = sec;
          sec = sum;
      }
  
      return sum;

}

module.exports = fibonacci;
