/* Problem Statement:
Imagine that you have been given the task of managing the food delivery network of a restaurant RoofTop 
in New York. You need to help them deliver the orders to their customers by assigning the delivery boys to 
each order. 
Assume that the city consists of N customers who want to order their lunch today from RoofTop. You have 
a total of M drivers and need to cater to the customers ordering food. Each customer has two parameters 
associated with them, O and T, denoting the time at which a customer orders a meal and the travel time 
from RoofTop restaurant to the destination of this particular customer. Each delivery boy can only deliver 
one order at a time and as soon as the delivery boy gets free, he must start delivering other orders. 
The lowest index delivery boy must be allocated first for the delivery, The status of the delivery boy while 
delivering the order should be "Busy". If all the delivery boys are busy at the time of order placement then 
show the message "No Food :-(". 
Annotations:
N - Number of customer orders (The customers are enumerated from C1, C2 to CN) M - Number of delivery 
boys (The drivers are enumerated from D1, D2 to DM)
O - Order placement time
T - Travel time from restaurant to customer 
Input:
Total number of customer orders (N) - 6 Total number of drivers (M) - 2 
If 1st Customer's order placement time is 1 and it takes 10 minutes to travel from restaurant to customer 
then (O, T) -> (1, 10)
2nd Customer Order placement time and Travel time (O, T) - 4, 20
3rd Customer Order placement time and Travel time (O, T) - 15, 5 
4th Customer Order placement time and Travel time (O, T) - 22, 20 5th Customer order placement time and 
Travel time (O, T) - 24, 10 6th Customer order placement time and Travel time (O, T) - 25, 10 
Example Input Line: 6,2 → (N,M)
1,10
4,20 
15,5 22,20 24,10 25,10 
© 2022 LogiNext Solutions Inc. All Rights Reserved. 4
www.loginextsolutions.com
Output:
C1 - D1
C2 - D2
C3 - D1
C4 - D1
C5 - D2
C6 - No Food */


const scanf = require('scanf');

console.log("Enter the number of Order:");
let orderNumber=scanf('%d');
console.log("Enter the number of Delivery agent:");
let deliveryAgerntNumber=scanf('%d');
const custArrya=[];
const delAgeArrya=[];
for(ci=0; ci<orderNumber;ci++){
    custArrya.push(`C${ci}`);
}
// console.log(custArrya)

for(di=0; di<deliveryAgerntNumber; di++){
    delAgeArrya.push(0);
}
// console.log(delAgeArrya)

for(ci2=0; ci2<custArrya.length; ci2++){
    custArrya[ci2]=[]
    for(ci3=0; ci3<2; ci3++){
        console.log(`Enter the CustArrya[${ci2}][${ci3}]:`);
        custArrya[ci2][ci3]=scanf('%d');
    }
}
// console.log(custArrya);
let delAgeAvailCheck =0;

for(i=1; i<50; i++){
    for(i1=0;i1<custArrya.length; i1++){
        //something here...
        for(i4=0; i4<delAgeArrya.length;i4++){
            // if(i==(custArrya[i1][0]+custArrya[i1][1]) || (delAgeArrya[i4]+1==i)){
            //     delAgeArrya[i4]=0;
            // }
            if(delAgeArrya[i4]==i){
                delAgeArrya[i4]=0; 
                delAgeAvailCheck--;
            }
            
        }
        if(i==custArrya[i1][0]){
            if(delAgeAvailCheck==delAgeArrya.length){
                console.log("Food is not available:");
            }
            let flag=true;
            for(i3=0; i3<delAgeArrya.length; i3++){
                
                if(delAgeArrya[i3]==0 && flag==true){
                    
                    console.log(`C${i1+1}=>D${i3+1}`);
                    delAgeArrya[i3]=custArrya[i1][1]+custArrya[i1][0];
                    flag=false;
                    delAgeAvailCheck++;
                }
            }
        }
        // for(i5=0;i5<delAgeArrya.length;i5++){
        //     if((delAgeArrya[i5]!=0 && delAgeArrya[i5+1]!=0) && i==custArrya[i1][0]){
        //         console.log("Food is not available:");
        //     }
        // }
        
        
    }
}

