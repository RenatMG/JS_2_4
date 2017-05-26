'use strict';
var str = 'a car, a man, a maraca';

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
//function isPalindrome(str) {
//    var a=((str.replace(/\W+/g,"")).toUpperCase()).split(''); //57
//    return a.join('')===(a.reverse()).join(''); //43 
//}
//function isPalindrome(str) {
//    var a=(str.replace(/\W+/g,"")).split('');
//   // console.log(a.join(''));
//    return a.join('')===(a.reverse()).join('');
//}

//function isPalindrome(str, a = str.replace(/\W/g, ""), b = a.toUpperCase(), c = b.split(''), d) {
//     d=(c.reverse()).join('');     
//     return b === d; 
//}

//function isPalindrome(s) {
//    var a=(s.replace(/\W/g,"")).toUpperCase(); //42    
//    return a===((a.split('')).reverse()).join(''); //46
//}

//function isPalindrome(s) {
//    s=s.replace(/\W/g,'').toUpperCase() //36   
//    console.log(s)
//    return s==((s.split('')).reverse()).join('') //44
//}
//function isPalindrome(str, a = str.replace(/\W/g, ""), b = a.toUpperCase(), c = b.split(''), d=c.reverse(), e= d.join('')) {
//        return b==e; 
//}
//function isPalindrome(s) {
//    s=s.replace(/\W/g,'').toUpperCase() //36   
//    console.log(s)
//    return s==s.split('').reverse().join('') //40
//}
//function isPalindrome(s) {
//    s=s.replace(/\W/g,'').toUpperCase() //36  
//    return s==s.split('').reverse().join('') //40
//}
function isPalindrome(s) {
    s=s.replace(/\W/g,'').toUpperCase() //36  
    console.log(s)
    return s==s.split('').reverse().join('') //40
}
console.log(isPalindrome(str));
