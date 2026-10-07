An Animal Contest 1 P3 - Happy Alpacas

Night has fallen, and N alpacas have gathered around a campfire. They sit in a circle, that is, alpaca 1 is to the right of alpaca 2, alpaca 2 is to the right of alpaca 3, alpaca 3 is to the right of alpaca 4
, and so on. Each alpaca is waiting to be assigned a happiness index, 
The alpaca is happy if the sum of its happiness index and the happiness index of the alpaca to its right is even. Otherwise, it is sad. Being a diligent herdsman, you decide to assign each of the alpacas a happiness index such that there are exactly happy alpacas.

Constraints


Subtask 1 [15%]

Subtask 2 [85%]
No additional constraints.

Input Specification
The first line contains two space-separated integers, 
 and 
.

Output Specification
If no solution exists, output 
. Otherwise, output 
 space-separated integers, the happiness index 
 for the 
 alpaca 
. If there are multiple solutions, output any.

Note: Output must end with a newline with no trailing whitespace.

Sample Input 1
Copy
6 4
Sample Output 1
Copy
7 27 196 50 3 17
Explanation for Sample Output 1
The happy alpacas in this arrangement are alpaca 
, alpaca 
, alpaca 
, and alpaca 
. Note that this is not the only solution.

Sample Input 2
Copy
2 1
Sample Output 2
Copy
-1