// Source : https://oj.leetcode.com/problems/palindrome-number/
/********************************************************************************** 
* 
* Determine whether an integer is a palindrome. Do this without extra space.
* 
* 
* Some hints:
* 
* Could negative integers be palindromes? (ie, -1)
* 
* If you are thinking of converting the integer to string, note the restriction of using extra space.
* 
* You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", 
* you know that the reversed integer might overflow. How would you handle such case?
* 
* There is a more generic way of solving this problem.
* 
*               
**********************************************************************************/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var maxValue=2147483647,
        minVaule=-maxValue-1,
        mod=10,
        temp=[],
        c=0;
        if(maxValue<x||x<0)
            return false;
        while(x){
            c=x%mod;
            temp.push(c/mod*10);
            mod*=10;
            x=x-c;
        }
    var len=temp.length,
        i=-1,
        j=len;
    while(temp[++i]==temp[--j]){
       if(j<=i){
        return true;
       }
    }
    return false;
};
