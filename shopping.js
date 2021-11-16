const displayLocalStoregCart = ()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}
const addItem = () => {
    const inputField = document.getElementById('product-name');
    const name = inputField.value;
    if(!name){
        return;
    }
    // display in the ui
    displayProduct(name);
    //add local storeage
    addProductToCart(name);
    inputField.value = '';
   //console.log(inputField);
}
const displayProduct = name =>  {
    const ul = document.getElementById('products');
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li);
    //console.log(name);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj ;
    if (cart){
         cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringifed = JSON.stringify(cart);
    localStorage.getItem('cart', cartStringifed);

    console.log(cart);
}

const placeOrder =() => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}
displayLocalStoregCart();