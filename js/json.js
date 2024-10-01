// normal object

// const shop = {
//   owner: 'Ahsan habib',
//   phone: '01754678436',
//   address: {
//     street: 'Dhaka,Rajshahi',
//     post: 'Agradigun',
//     country: 'BD',
//   },
//   products: ['laptop', 'phone', 'pc', 'soundbox'],

//   revenue: 500000,
//   isOpen: true,
//   isNew: false,
// };

// console.log(shop);

const shop = {
  owner: 'Ahsan habib',
  phone: '01754678436',
  address: {
    street: 'Dhaka,Rajshahi',
    post: 'Agradigun',
    country: 'BD',
  },
  products: ['laptop', 'phone', 'pc', 'soundbox'],

  revenue: 500000,
  isOpen: true,
  isNew: false,
};

// simply JSON.stringify() kore object ka string a kora
const shopJSON = JSON.stringify(shop.address.country);
console.log(shop);
console.log(shopJSON);

// and another JSON.stringify thkhe object nite hole JSON.parse()
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
