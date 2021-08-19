const products = [
    'Dell hardcore i28 400GB laptop',
    'iphone 1TB Cemara flashligt ',
    'yellow laptop with black camera',
    '1X39 Lenevo commercila yoga Laptop',
    'Htc power bank',
    'Htc powerH laptop',
    'Walton low price PHone',
    'Htc purple color phone and tablet'
];
const searching = 'HtC';
const searching1 =' phone'
// index of 
const output = [];

for (const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}

console.log('matching product', output)


// include
for (const product of products){
    if (product.toLowerCase().includes(searching1.toLowerCase())){
        // output.push(product);
    }
}

console.log(output)

// starts with
for (const product of products){
    if (product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
}
console.log('matching', output)