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
    
    const arr = [6, 6];
    const output = sortMaker(arr);
    console.log(output);