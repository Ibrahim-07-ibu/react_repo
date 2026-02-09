function total(a,b,  ...arguments){
    console.log(arguments);
}
total(1,2,3,4,5);

let products={
    name:`apple macbook`,
    price: 1000,
    currency: `INR`
}

let ratings = {
    rating:8.5,
    feedback:[`good product`, `value for money`]
}

let {name, price} = products;
result = productDetails = { name,price,...ratings};
console.log(productDetails);
