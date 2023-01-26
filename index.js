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

function createPortfolio() {
    return {};
}

function uniqueCount(portfolio) {
    return Object.keys(portfolio).length;
}

function makePurchase(portfolio, symbol, numShares) {
    if(numShares <= 0) {
        throw new RangeError("numshares can only be positive");
    }

    if(portfolio[symbol] == undefined) {
        portfolio[symbol] = numShares;

    } else {
        portfolio[symbol] = (portfolio[symbol]) += numShares;
    }
}

function makeSale(portfolio, symbol, numShares) {
    let currentStock = portfolio[symbol];
    if(currentStock - numShares < 0) {
        throw new RangeError("Cannot sell that many shares");
    } else {
        portfolio[symbol] = (portfolio[symbol]) -= numShares;
    }
}

function countShares(portfolio, symbol) {
    if(portfolio[symbol] === undefined) {
        return 0;
    }
    
    return portfolio[symbol];
}
  

exports.sum = sum;
exports.div = div;
exports.containsNumbers = containsNumbers;
exports.createPortfolio = createPortfolio;
exports.uniqueCount = uniqueCount;
exports.makePurchase = makePurchase;
exports.countShares = countShares;
exports.makeSale = makeSale;