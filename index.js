class ShareSaleException extends Error {
  constructor(message) {
    super(message);
    this.name = "ShareSaleException";
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
        throw new ShareSaleException("Cannot sell that many shares");
    } else {
        portfolio[symbol] = (portfolio[symbol]) -= numShares;
    }
    if(portfolio[symbol] === 0) {
        delete portfolio[symbol];
    }
}

function countShares(portfolio, symbol) {
    if(portfolio[symbol] === undefined) {
        return 0;
    }
    
    return portfolio[symbol];
}
  
exports.createPortfolio = createPortfolio;
exports.uniqueCount = uniqueCount;
exports.makePurchase = makePurchase;
exports.countShares = countShares;
exports.makeSale = makeSale;
