// Source : https://oj.leetcode.com/problems/reverse-integer/

/********************************************************************************** 
* 
* Reverse digits of an integer.
* 
* Example1: x =  123, return  321
* Example2: x = -123, return -321
* 
* 
* Have you thought about this?
* 
* Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
* 
* > If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
* 
* > Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, 
*   then the reverse of 1000000003 overflows. How should you handle such cases?
* 
* > Throw an exception? Good, but what if throwing an exception is not an option? 
*   You would then have to re-design the function (ie, add an extra parameter).
* 
*               
**********************************************************************************/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var maxValue=2147483647,
        minVaule=-maxValue-1,
        mod=10,
        temp=[],
        t=0,
        ret=0,
        i=0,
        xTemp=x,
        x10=x*10;
        //console.log(minVaule<-2147483412);
    if(x>maxValue||x<minVaule){
        return 0;
    }
    while(mod<=Math.abs(x10)){
        t=xTemp%mod;
        temp.push((t/mod)*10);
        xTemp=xTemp-t;
        mod=mod*10;
    }
    var j=temp.length;
    for(;i<temp.length;i++){
        ret=ret+temp[i]*Math.pow(10,j-1);
        --j;
    }
    if(ret>maxValue||ret<minVaule){
        return 0;
    }
    return ret;
};
