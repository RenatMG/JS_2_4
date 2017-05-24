'use strict';
var str = 'A car, a Man, a maraca';

//function isPalindrome(str) {
//    str=(str.replace(/\W/g,"")).toUpperCase();
//    var l=(str.length-1);
//    for(var i=0;i<l/2;i++){
//        if(str.charAt(i)!==(str.charAt(l-i))){
//            return false;
//        }
//        if(i===l/2-1){
//            return true;
//        }
//    }
//}
function isPalindrome(str) {
    var a=(str.replace(/\W+/g,"")).split('');
    return a.toString()===(a.reverse()).toString();
}


console.log(isPalindrome(str));
