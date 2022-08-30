const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};

// JavaScript Object Notation (JSON)   <-----!!!

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);


// Javascript convert to string = JSON.stringify   <-----!!!

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// string to normal javascript = JSON.parse   <-----!!!

const shopObj = JSON.parse(shopJSON);
console.log(shopObj)