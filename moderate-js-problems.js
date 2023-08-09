
function cubeNumber(number) {
    if (typeof number !== 'number'){
        return "Please input a valid number";
   } 
    else{
        const result = number * number * number ;
        return result ;
    }
}



function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'invalid input'
    }
    else{
        const result = string1.includes(string2)
        return result;
    }
}


function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid input";
      }
    
    else if (arr[0] === arr[1]) {
        return "equal";
      }
    else{
        let left = 0;
        let right = 1;
      
        while (left < right) {
            if (arr[left] < arr[right]) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
            }
            left++;
        }
        return arr;
    }
    
}

function findAddress(address) {
    if (typeof address !== "object"){
        return "invalid object"
    }
    else{
        const street = address.street || '__';
        const house = address.house || '__';
        const society = address.society || '__';
        return street + ',' + house + ',' + society;
    }


}






function canPay(array, price) {
    if (array.length == 0) {
      return 'empty array';
    }
    else{
        let total = 0;
        for (let i = 0; i < array.length; i++) {
          let number = array[i];
          total += number;
        }
        return total >= price;
    }

}

