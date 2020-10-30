const faker = require('faker');

function _generate_lottery(){
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

function generate_lottery(count = 1){
    let result = [];
    for(let i = 0; i < count; i++){
        result.push(_generate_lottery());
    }
    return result;
}

module.exports = {
    generate_lottery : generate_lottery
}