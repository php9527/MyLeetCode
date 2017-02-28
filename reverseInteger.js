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
