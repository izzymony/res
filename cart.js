document.addEventListener("DOMContentLoaded" , () =>{
    const cart = JSON.parse(localStorage.getItem('cart') )|| [
   
];
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElement = document.getElementById("total-price");
   

    let totalPrice = 0;

    cart.forEach(item =>{
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
       
        itemElement.innerHTML = `   
      
         <img src="${item.imageSrc}" alt="" class="cart-item-image" id="product-${item.id}" >
              <div class="cart-item-details">
              <div class="flex">
               
                              <span class="name">${item.name}</span>

        <div class="quantity">Quantity: ${item.quantity}</div>
        <div class="price">Price: &#8358; ${item.price * item.quantity}</div>
           <button onclick="removeItem(${item.id})" class="button">Delete</button>
           </div>
           </div>
           
        `; 
        cartContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice;
});


function addToCart(id, price, name, imageSrc){
    const existingItemIndex = cart.findIndex(item => item.id === id);
    if (existingItemIndex !== -1){
        cart[existingItemIndex].quantity +=1;
    }
    else{
        cart.push({id, price, name, imageSrc, quantity: 1});

    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}



function removeItem(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart',JSON.stringify(cart));
    location.reload();
}

function checkout() {
  // Check if the cart has items
  const messageElement = document.getElementById("checkout-message");
  messageElement.style.display = "block";
  
  // Hide the message after 5 seconds
  setTimeout(() => {
      messageElement.style.display = "none";
  }, 5000); 
}
   
function clearCart(){
    localStorage.removeItem('cart');
    location.reload();
}



