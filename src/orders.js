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

const _order = (order) => {
    if(!_validate_order(order)) return "Problem";
    _submit_order(order);
}

const _submit_order = (order) =>{
    console.log({order : order});
}

const _validate_order = ({customer, products}) => {

}

const _validate_customer_information = ({name, age, naitionality, contact}) => {

}

module.exports = {
    submit : _order
}