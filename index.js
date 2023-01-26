function sum(a, b) {
    if(typeof(a) === 'number' && typeof(b) === 'number')
        return a + b;
    else
        throw new TypeError("Please supply only numbers");
}
  
function div (a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        if(b === 0) { 
            throw new RangeError("Cannot divide by 0");
        }
        return a / b;
    } else {
        throw new TypeError("Please supply only numbers");
    }
}

function containsNumbers(text){
    if(typeof(text) === 'string') {
        for (let i = 0; i < text.length; i++)
            if (!isNaN(text.charAt(i)))
                return true;
        return false;
    } else {
        throw new TypeError("Please only provide a string");
    }
}

exports.sum = sum;
exports.div = div;
exports.containsNumbers = containsNumbers;