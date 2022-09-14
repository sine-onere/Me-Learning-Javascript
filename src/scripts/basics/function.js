//Proper way to use functions declaratively
makeBread(2); // Call still works here

function makeBread(qty) {
    return '🍞'.repeat(qty)
}

//Improper way called expression. Pollutes global scope
const makeBeer = function(qty) {
    return '🍺'.repeat(qty);
}

//function parameter use
// Positional
function makeBreakfast (main, side, drink) {
    console.log(arguments)
    return `Breakfast is ${main}, ${side}, and ${drink}.`;
}

// Named
function makeLunch (opts) {
    const { main, side, drink } = opts;
    return `Lunch is ${main}, ${side}, and ${drink}.`;
}

// Rest params
function makeDinner (main, ...args) {
    console.log(main, args)
    return `Dinner includes ${main} and ${args.join('')}.`;
}

//When trying to build functions "pure" the variables used in the function should be defined in scope then return those values?
