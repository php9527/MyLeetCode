//source:
/*
*
*Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
*Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
*The order of output does not matter.
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 解法一：效率太低，没有通过。答案是对的。
 */
var findAnagrams = function(s, p) {
    var pt=[],
        i=0,
        ret=[],
        j=0,
        plen=p.length,
        count=0;
        for(;i<plen;++i){
            pt[p[i]]=pt[p[i]]?(pt[p[i]])+1:1;
        }
        var temp=Object.assign({},pt);
    for(;j<s.length;++j){
        if(temp[s[j]]){
          --temp[s[j]];
          ++count;
        }else{
          temp=Object.assign({},pt);
          if(count !== 0){
            j=j-count;
            count=0;
          }
        }
        if(count==plen){
            ret.push(j-plen+1);
            temp=Object.assign({},pt);
            j=j-count+1;
            count=0;
        }
    }
    return ret;
};
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 解法2:大神版，高效率
 */
var findAnagrams = function(s, p) {
    var pt=[],
        ret=[],
        i=0,
        start=0,
        end=0,
        count=p.length;
        if(s==null||p ==null || s.length<p.length)
            return ret;
        for(;i<count;++i){
            pt[p[i]]=pt[p[i]]?(pt[p[i]])+1:1;
        }
        while(end < s.length){
            if(end-start == p.length && pt[s[start++]]++ >=0)
                count++;
            if(--pt[s[end++]]>=0)
                count--;
            if(count == 0)
                ret.push(start);               
        }
        return ret;
}
