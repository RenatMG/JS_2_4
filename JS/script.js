'use strict';
var str = 'A car, a man, a maraca';

// ВАРИАНТ 1

//function isPalindrome(s) {
//    str=(s.replace(/\W/g,"")).toUpperCase();
//    var l=(s.length-1);
//    for(var i=0;i<l/2;i++){
//        if(s.charAt(i)!==(s.charAt(l-i))){
//            return false;
//        }
//        if(i===l/2-1){
//            return true;
//        }
//    }
//}

// ВАРИАНТ ЧИТ

//function isPalindrome(str, a = str.replace(/\W/g, ""), b = a.toUpperCase(), c = b.split(''), d) {
//     d=(c.reverse()).join('');     
//     return b === d; 
//}

// ВАРИАНТ 76 СИМВОЛОВ

function isPalindrome(s) {
    s=s.replace(/\W/g,'').toUpperCase() //36  
    return s==s.split('').reverse().join('') //40
}

//function isPalindrome(s) {
//    var a=s.toLowerCase().match(/\w/g);return a.join()==a.reverse().join()
//}

console.log(isPalindrome(str));
