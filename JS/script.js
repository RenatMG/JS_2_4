'use strict';
var str = 'A car, a Man, a maraca';

function isPalindrome(str) {
    str=str.toUpperCase();
    str=str.replace(/\W/g,"");
    var l=(str.length-1);
    for(var i=0;i<l/2;i++){
        if(str.charAt(i)!==(str.charAt(l-i))){
            return false;
        }
        if(i===l/2-1){
            return true;
        }
    }
}

console.log(isPalindrome(str));
