const lottery = require('./lottery');

const pulled_numbers = lottery.generate_lottery()[0];
const lotteries = lottery.generate_lottery(5);

console.log({
    pulled: pulled_numbers,
    lotteries : lotteries
    });


for(let i = 0; i < lotteries.length; i++){
    //Rest of wrong implementation
}