// Source : https://oj.leetcode.com/problems/zigzag-conversion/
/********************************************************************************** 
* 
* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
* (you may want to display this pattern in a fixed font for better legibility)
* 
* P   A   H   N
* A P L S I I G
* Y   I   R
* 
* And then read line by line: "PAHNAPLSIIGYIR"
* 
* Write the code that will take a string and make this conversion given a number of rows:
* 
* string convert(string text, int nRows);
* 
* convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
* 
*               
**********************************************************************************/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 *   @pattern
 *   string=ABCDE
 *   numRows=3
 *   A  E
 *   B D
 *   C
 *   那么pattern就等于ABCD的长度;
 *
 */
var convert = function(s, numRows) {
    var len=s.length,
        pattern=2*numRows-2;
        if(pattern <= 0){
            return s;
        }
    var col=Math.ceil(len/numRows),//列数
        ret='',//结果
        temp=0,//临时变量
        times=0,//执行次数
        index=0,//字符串的索引
        p=0;//位置增量,根据pattern和第二行变化
        
    for(var i=0;i<numRows;i++){
        p=2*(numRows-i)-2;
        if(i===0||i==(numRows-1)){//首行和末行执行次数跟其他行数区分
            times=col;
        }else{
            times=2*col-1;
        }
        index =i;
        for(var j=0;j<times;j++){
            if(j%2 === 0){                                  
                ret=ret+(s[index]?s[index]:'');
                if(p===0){
                    p=pattern;
                }
                index=index+p;
                temp= pattern-p;               
                if(temp===0){
                    temp=pattern;
                }             
            }else{
                ret=ret+(s[index]?s[index]:'');
                index=index+temp;
            }
        }
        
    }
    return ret;
};
