//source:https://leetcode.com/problems/integer-to-roman/
/**
* Given an integer, convert it to a roman numeral.
* Input is guaranteed to be within the range from 1 to 3999.
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {  
    //1~3 4 6~8 9 ;
    var p=[],
    mod=10,
    temp=[],
    c=0;
    p[1]='I';
    p[5]='V';
    p[10]='X';
    p[50]='L';
    p[100]='C';
    p[500]='D';
    p[1000]='M';
        
    while(num){
        c=num%mod;
        temp.push(c/mod*10);
        num=num-c;
        mod*=10;
    }
    var len=temp.length-1,
        i=0,
        index=Math.pow(10,len),
        kb=0,
        ret='',
        n=-1;
        console.log(temp)
        
    for(;len>=0;len--){
        //console.log(temp[len]);
        if(temp[len]==9){
            ret=ret+p[index]+p[index*10];
        }else if(temp[len]>4){
            ret=ret+p[5*index];
            n=temp[len]-5;            
        }else if(temp[len]==4){
            ret+=p[index]+p[5*index];
        }else{
            n=temp[len];
        }
         console.log(n);
        for(;n>0;n--){              
                ret+=p[index];
        }
        index/=10;
        n=-1;
    }
    return ret;   
};
