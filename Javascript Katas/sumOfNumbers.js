// Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

-1 + 0 +1 +2 

//Unknowns:  difference, sum and a ,b 



const getSum = (a,b) => {
    if ( a > b){

        const n = (a-b) + 1
        const sum = n * ((a + b)/2)
        return sum
        }
        else if (b >a){
            const n = (b-a) + 1
            const sum = n * ((b + a)/2)
            return sum
        }else{
            return a
        }

}
