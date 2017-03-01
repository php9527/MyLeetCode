// Source : https://oj.leetcode.com/problems/roman-to-integer/

/********************************************************************************** 
* 
* Given a roman numeral, convert it to an integer.
* 
* Input is guaranteed to be within the range from 1 to 3999.
*               
**********************************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    s=s.toUpperCase();
    var p =[],
        len=s.length,
        i=0,
        ret=0,
        temp=1001;
        p['I']=1;
        p['V']=5;
        p['X']=10;
        p['L']=50;
        p['C']=100;
        p['D']=500;
        p['M']=1000;
        for(;i<len;++i){
            if(temp<p[s[i]]){
                ret = ret-2*temp;
            }
            ret+=p[s[i]];
            temp=p[s[i]];
        }
    return ret;
};
