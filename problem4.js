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
    
    const  address = {
        street: 10,
        // house: '15A',
        // society: 'Earth Perfect',
    }
    const output = findAddress(address);
    console.log(output);