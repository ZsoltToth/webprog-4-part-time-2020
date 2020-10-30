import {submit} from '../orders'

describe('Customer Validation', ()=>{
    it('check valid customer', ()=>{
        const order = {
            customer : {
                name: "Jhon Doe",
                age: 42,
                nationality: "US",
                contact: {phone: "<valid phone number>", email: "username@provider.com"}
            },
            products : [
                {
                    name : "Product Name",
                    price : 10.99,
                    quantity  : 2,
                    restriction : { banned_country : "US", min_age  : 18 }
                }
            ]}
        submit(order, ()=> {console.log("Success");}, (causes)=> {console.log(`Reject : ${causes}`)});
    });


    it('check the order with too short name', ()=>{
        const order = {
            customer : {
                name: "Jhon",
                age: 42,
                nationality: "US",
                contact: {phone: "<valid phone number>", email: "username@provider.com"}
            },
            products : [
                {
                    name : "Product Name",
                    price : 10.99,
                    quantity  : 2,
                    restriction : { banned_country : "US", min_age  : 18 }
                }
            ]};
        const success = jest.fn();
        const reject = jest.fn();
        submit(order, success,reject);
        expect(reject.mock.calls[0][0]).toEqual(['name']);
    });
});