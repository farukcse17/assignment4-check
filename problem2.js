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

const string1 = "Javascript";
const string2 = "Code";
const output = matchFinder(string1, string2);
console.log(output);