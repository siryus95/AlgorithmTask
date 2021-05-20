function convertFahrToCeelcius(F){
    let inputtype=Object.prototype.toString.call(F);
    if(inputtype==="[object Number]" || (inputtype == "[object String]" && !isNaN(F))){
        return ((F-32)* 5/9).toFixed(4);
    }
    else{
        return "the number you input is not valid";
    }
}
let result= convertFahrToCeelcius(5);



function checkYuGiOh(n){
    let arr=[];
    if(isNaN(n)){
        console.log("\'invalid parameter: \" ${n} is not a valid nummer\"\'");
    }
for(let i=1; i<=n; i++){
    let newArr=[];
    if(i%2===0){
        newArr.push("Yu");
    }
    if(i%3===0){
        newArr.push("gi");
    }
    if(i%5===0){
        newArr.push("oh");
    }
    if(newArr.length > 0){
        arr.push(newArr.join("_"));
    }
    else{
        arr.push(i);
    }
}
    return arr;
}
console.log(convertFahrToCeelcius(0));
console.log(convertFahrToCeelcius("0"));
console.log(convertFahrToCeelcius([1,2,3]));
console.log(convertFahrToCeelcius({temp:0}));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));