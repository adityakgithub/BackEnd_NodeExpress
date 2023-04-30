const scanf = require('scanf');
 
console.log('Pleas input number of customer:');
const custNum = scanf('%d');
console.log('Pleas input number of Delivery Agent:');
const deliveryNum = scanf('%d');
const custArrya=[];
const deliAgentArrya=[];

for(let index =0; index<custNum; index++) { 
    custArrya.push("C"+index);
    //console.log("C"+index);
}
console.log(custArrya);

for(let index =0; index<deliveryNum; index++) { 
    deliAgentArrya.push(0);
}
console.log(deliAgentArrya);

for(let index =0; index<custNum; index++) {
    custArrya[index] =[];
    for(let index1 =0; index1<2; index1++) { 
        console.log(`Enter the custArrya[${index}]:`)
        custArrya[index].push(scanf('%d'));
        //console.log("D"+index);
    }
}
console.log(custArrya);

let tempArray1 =[];
console.log(tempArray1);

for(let index =1; index<60; index++) {
    for(let index1 =0; index1<custArrya.length; index1++) { 
        
        if(index==custArrya[index1][0]) {
            
            
            if(tempArray1.length==deliAgentArrya.length) {
                console.log("Delivery agent is busy with another order,Please Order after some time...!");
                
            }else{
                for(let index2 =0; index2<deliAgentArrya.length; index2++) {
                    // if((custArrya[index2][0] + custArrya[index2][1])>=index ) {
                    //     deliAgentArrya[index2]=0;
                    // }
                    
                    if(deliAgentArrya[index2-1]!=0 || deliAgentArrya[0]!=0){
                        if(deliAgentArrya[index2]==0){
                            tempArray1[index2]= deliAgentArrya[index2];
                            custArrya[index1]=`C${index1+1}`;
                            deliAgentArrya[index2]=`D${index2+1}`;
                            console.log(`${custArrya[index1]}:${deliAgentArrya[index2]}`);
                            deliAgentArrya[index2]=custArrya[index2][1];
                            break;
                        }
                        if(index==(custArrya[index1][1]+custArrya[index1][0])){
                            deliAgentArrya[index2]=0;
                            tempArray1.pop();
                        }

                    }
                    
                }
            }  
               
        }
        
    }
    
}

//console.log(custArrya);

// for(let index =0; index<deliveryNum; index++) { 
//     deliAgentArrya.push("D"+index);
//     //console.log("D"+index);
// }
// console.log(deliAgentArrya);
// console.log(custArrya);



