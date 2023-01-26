const myFunctions = require('./index.js');

test('2.1 - Empty Portfolio', () => {
    const portfolio = myFunctions.createPortfolio();
})

test('2.2 - Empty Portfolio', () => {
    const portfolio = myFunctions.createPortfolio();
    expect(Object.keys(portfolio).length).toBe(0);
})

test('2.3 - Unique ticket count', () => {
    const portfolio = myFunctions.createPortfolio();
    portfolio["GME"] = 5;
    portfolio["RBLX"] = 10;
    
    expect(myFunctions.uniqueCount(portfolio)).toBe(2);
})

test('2.4 - Make a purchase', () => {
    const portfolio = myFunctions.createPortfolio();
    myFunctions.makePurchase(portfolio, "GME", 3);
    myFunctions.makePurchase(portfolio, "RBLX", 1);
    myFunctions.makePurchase(portfolio, "GME", 3);

    expect(portfolio["GME"]).toBe(6);
    expect(portfolio["RBLX"]).toBe(1);

    expect(() => {
        myFunctions.makePurchase(portfolio, "RBLX", 0);
    }).toThrow(RangeError("numshares can only be positive")
    );
})

test('2.5 - Make a sale', () => {
    const portfolio = myFunctions.createPortfolio();
    myFunctions.makePurchase(portfolio, "GME", 3);
    myFunctions.makeSale(portfolio, "GME", 2);
    expect(portfolio["GME"]).toBe(1);
})

test('2.6 - Count shares for symbol', () => {
    const portfolio = myFunctions.createPortfolio();

    myFunctions.makePurchase(portfolio, "GME", 3);
    myFunctions.makePurchase(portfolio, "RBLX", 1);
    
    expect(myFunctions.countShares(portfolio, "GME")).toBe(3);
    expect(myFunctions.countShares(portfolio, "ABC")).toBe(0);
    expect(myFunctions.countShares(portfolio, "RBLX")).toBe(1);
})

test('2.7 - keep owned symbols', () => {
    const portfolio = myFunctions.createPortfolio();

    myFunctions.makePurchase(portfolio, "GME", 3);
    myFunctions.makeSale(portfolio, "GME", 3);
    expect(portfolio["GME"]).toBe(undefined);
})

test('2.8 - Make a sale (too many shares)', () => {
    const portfolio = myFunctions.createPortfolio();
    myFunctions.makePurchase(portfolio, "GME", 3);

    expect(() => {
        myFunctions.makeSale(portfolio, "GME", 4);
    }).toThrow(RangeError("Cannot sell that many shares")
    );

})
