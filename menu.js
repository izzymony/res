 
 let cart = JSON.parse(localStorage.getItem("cart")) || [];

function increase(index) {
    const counterValue = document.getElementById(`counter-value-${index}`);
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
    updateCart(index);
}

function decrease(index) {
    const counterValue = document.getElementById(`counter-value-${index}`);
    if (parseInt(counterValue.textContent) > 0) {
        counterValue.textContent = parseInt(counterValue.textContent) - 1;
        updateCart(index);
    }
}

function updateCart(index){
    const item = {
        id: index,
        name: document.querySelectorAll (".h1")[index].textContent,
        price: parseInt(document.querySelectorAll(".price")[index].textContent.replace(/[^\d]/g, '')),
        quantity: parseInt(document.getElementById(`counter-value-${index}`).textContent),
        imageSrc: document.querySelectorAll(".food-img")[index].src 
      
    };

    cart = cart.filter(product => product.id !== item.id);
    if (item.quantity > 0) cart.push(item);

    localStorage.setItem('cart' , JSON.stringify(cart));
    updateCartCount();
} 
 function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}





function addToCart(id, price, name, imageSrc){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
const existingItemIndex = cart.findIndex(item => item.id === id); 

    if (existingItemIndex !== -1){
        cart[existingItemIndex].quantity +=1;
    }
    else{
        cart.push({id, price, name, imageSrc, quantity: 1});

    }
console.log("addToCart");
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}


function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    document.getElementById("cart-count").textContent = cartCount;
}

updateCartCount();



  
