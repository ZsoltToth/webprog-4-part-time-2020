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

console.log(
    lotteries.map(
        (lottery_ticket) => {return lottery.count_matches(pulled_numbers,lottery_ticket)})
);
console.log(
    lotteries.map(
        (lottery_ticket) => {return lottery.count_matches(pulled_numbers,lottery_ticket)})
        .reduce((acc, curr)=> {acc[curr] +=  1; return acc}, {
            0 : 0, 1 : 0, 2 : 0,
            3 : 0, 4 : 0, 5 : 0
        }  )
);

[0,1,2,3,4,5].forEach((match_cnt) =>{
    console.log(`Lottery Ticket with ${match_cnt} matches: ${
        lotteries.filter((lottery_ticket) => { return lottery.count_matches(pulled_numbers, lottery_ticket) === match_cnt})
    }`)
});

console.log(
    lotteries.map(
        (lottery_ticket) => {return lottery.get_prize(pulled_numbers,lottery_ticket)})
);
