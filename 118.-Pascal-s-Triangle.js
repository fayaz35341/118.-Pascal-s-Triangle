/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triang=[]
    for (let i=0; i<numRows;i++){
        let row=Array(i+1).fill(1)
        for (let j=1; j<i;j++){
            row[j]=((triang[i-1][j-1])+(triang[i-1][j]))
        }
        triang.push(row)
    }
    return triang 
    
};

//2nd Aproach 
class Solution {
    pascalTriangleI(r, c) {
        let n=r-1
        let k=c-1
        let R=1
        for (let i=0; i<k;i++){
            R=R*(n-i) 
            R=R/(i+1)
        }     
        return R
    }
}
