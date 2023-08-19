function cubeNumber(number){
    var result;
    if(typeof number !== 'number'){
        result ="Please enter a valid number";
        return result;
    }else{
        // result = Math.pow(number, 3);
        result = number * number * number;
        return result;
    }
}


function matchFinder(string1, string2){
    if(typeof string1 && typeof string2 === 'string'){
        if(string1.includes(string2, 0) || string2.includes(string1, 0)){
            return true;
        }else{
            return false;
        }
    }else{
        // console.log("Enter a valid number");
        let notMatch = "Enter a valid number";
        return notMatch;
    }
}


function sortMaker(arr){
    var outputArray;
    if(arr[0] < arr[1] && arr[0] > 0){
        outputArray =  console.log(arr.sort().reverse());
        return outputArray;
    }
    else if(arr[0] === arr[1]){
        outputArray =  "equal";
        return outputArray;
    }
    else if(arr[0] < 0 || arr[1] < 0){
        outputArray =  "Invalid Input";
        return outputArray;
    }
    else{
        outputArray = arr;
        return outputArray;
    }
}


function findAddress(obj){
    if(Object.keys(address).length === 3){
     var objOutput = obj.street+","+obj.house+","+obj.society;
     return objOutput;
    }
     else if(Object.keys(address).length === 2){
         var objOutput = obj.street+",__"+","+obj.society;
         return objOutput;
     }
     else if(Object.keys(address).length === 1){
         var objOutput = obj.street+",__"+","+"__";
         return objOutput;
     }else{
         var objOutput = "Please enter a valid object property and value";
         return objOutput;
     }
 }


 function canPay(changeArray, totalDue){
    if(changeArray.length !== 0){
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            if(typeof changeArray[i] === 'number'){
                sum += changeArray[i];
            }else{
                const wrongNum = "Please enter a valid number";
                return wrongNum;
            }
        }
        if(sum >= totalDue){
            return true;
        }else{
            return false;
        }
    }else{
        let emptyArray = "Empty Array!";
        return emptyArray;
    }
}