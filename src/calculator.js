const mathOperations = {
    sum: function(a,b) {
 
        return a + b;
 
    },
 
     
    diff: function(a,b) {
 
        return a - b;
 
    },
 
    product: function(a,b) {
 
        return a * b
 
    },

    lowercase: function(str){

       str = "abc"
       const regEX = '^/a.c$/'
       return regEX 
    },

    Number: function(int){

        int = 10;
        const regEX = '/[0-9]/'
        return regEX 
     }
 
 }
 
   module.exports = mathOperations
  