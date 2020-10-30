const faker = require('faker');

const _generate_lottery = () => {
    let result = [];
    for(let i = 0; i < 5; i++){
        let generated_lottery_number;
        do{
            generated_lottery_number = faker.random.number({min: 1, max: 90});
        }while(result.includes(generated_lottery_number))
        result.push(generated_lottery_number)
    }
    return result;
}

const generate_lottery = (count = 1) => {
    let result = [];
    for(let i = 0; i < count; i++){
        result.push(_generate_lottery());
    }
    return result;
}

const _matches = (lottery0, lottery1) => {
    return lottery0.map(
        (lottery0_pick) => {
            return lottery1.includes(lottery0_pick) ? 1 : 0;
        })
        .reduce(
            (acc, curr) => {return acc  +curr},
            0);
}

const _calculate_prize = (pulled_numbers, picked_numbers, callback = _defult_prize_look_up) => {
    return callback( _matches(pulled_numbers, picked_numbers) );
}

const _defult_prize_look_up = (match_cnt) => {
    return {
        0 : 0,
        1 : 0,
        2 : 10,
        3 : 40,
        4 : 200,
        5 : 10000
    }[match_cnt]
}

module.exports = {
    generate_lottery : generate_lottery,
    count_matches : _matches,
    get_prize : _calculate_prize
}