const products=[
    {id:1,name:"product1",price:25},
    {id:1,name:"product1",price:50},
    {id:1,name:"product1",price:90}
];
products.forEach((product)=>{
    console.log(product)
})

const res=products.filter((product)=>{ return product.price>40}) //for arrow function if flower braces used then must  use return statement
console.log(res)


let cart=[]
cart.push(products[1])
console.log(cart)

cart((...cart),quantity=1)
console.log(cart)




















//displayproducts()
//addtocart
//displaycart