class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triang=[]
        for i in range(numRows):
            row=[1]*(i+1)
            for j in range(1,i):
                row[j]=triang[i-1][j-1]+triang[i-1][j]
            triang.append(row)
        return triang

#2nd approach 
class Solution:
    def pascalTriangleI(self, r, c):
        n=r-1
        k=c-1
        R=1
        for i in range(k):
            R*=(n-i) 
            R//=(i+1)
        return R
