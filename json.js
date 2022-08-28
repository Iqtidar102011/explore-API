// JSON= javaScript Object Notation

const user = { id: 1, name: 'x', job: 'student' };

// json.stringify : Converts a JavaScript value to a JavaScript Object Notation (JSON) string.



const stringified = JSON.stringify(user);
console.log(stringified);

// exampl 2
const shop = {
    owner: 'x',
    address: {
        street: 'vetterstrace',
        city: 'chemnitz',
        country: 'germany'
    },
    products: ['laptop', 'mobile', 'camera', 'smartwatch'],
    reveniew: 450000,
    isNew: false,
    isOpen: true

}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

// to convert json string to regular object , use JSOon.parse

const shopObj = JSON.parse(shopStringified);
console.log(shopObj);