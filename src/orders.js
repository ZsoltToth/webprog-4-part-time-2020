import * as countries from "i18n-iso-countries";
/*
order = {
 customer : {
    name : "Jhon Doe",
    age : 42,
    nationality: "US"
    contact : { phone : "<valid phone number>", email : "username@provider.com" },
 products : [
    {
        name : "Product Name",
        price : 10.99,
        quantity  : 2,
        restriction : { banned_country : "US", min_age  : 18 }
    }
 ]
}

Validation Rules:
 - Name 2-5 words
 - Nationality is a Country Code
 - Contact phone should match pattern of nationality
 - email looks like valid

 - restrictions should be fulfilled


 */

const _order = (order, success, reject) => {
    const problems =   _validate_order(order);
    if(problems.length !== 0) return reject(problems);
    _submit_order(order);
    success();
}

const _submit_order = (order) =>{
    console.log({order : order});
}

const _validate_order = ({customer, products}) => {
    let result = [];
    if(_validate_customer_information(customer).length !== 0) result = [...result,..._validate_customer_information(customer)];
    return result;

}

const _validate_customer_information = ({name, age, nationality, contact}) => {
    let result = [];
    if(!_validate_name(name)) result = [...result,"name"];
    if(!_validate_age(age)) result = [...result,"age"];
    if(!countries.isValid(nationality)) result = [...result,"nationality"];
    return result;
}

const _validate_name = (name) => {
    return name.match(/^([A-Z][a-z]+\s?){1,4}([A-Z][a-z]+)$/) != null;
}

const _validate_age = (age) =>{
    return age >= 18;
}

module.exports = {
    submit : _order
}