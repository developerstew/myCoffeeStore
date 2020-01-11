var shoppingCart = (function () {
    var cart = [];
    // Constructor and storage functions
    function Item(name, price, count, image){
        this.name = name;
        this.price = price;
        this.count = count;
        this.image = image;
    };

    function saveCart(){
        // Sets the localStorage equal to the cart array
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    };

    function loadCart(){
        // If the localstorage is empty make the cart empty;
        // When loading page check if items have been added before
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
        if(cart === null){
            cart = [];
        }
    };
    loadCart();

    //Methods and properties 
   var obj = {};
// When clicked on an cart item add to constructor and cart array
    obj.addItemToCart = function (name, price, count, image) {  
        // If item in cart array matches clicked item name. Add to count.
       for(var items in cart){
           if(cart[items].name===name){
               cart[items].count += count;
               saveCart();
               return;
           }
       }
       var item = new Item(name, price, count, image);
        cart.push(item);
        saveCart();
    };

obj.listCart = function(){
    let cartCopy = [];
    for (var i in cart){
        let item = cart[i];
        let itemCopy = {};
        for(var details in item){
            // Stores the details of each item in itemCopy
            itemCopy[details] = item[details];
            }
            // Total for one item
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
                }
                // when function is called they actually get a copy of cart
                return cartCopy;
};
// Everytime add to cart is clicked the count goes up
obj.countCart = function(){
    let cartTotal = 0;
   for(var items in cart){
    cartTotal+=cart[items].count
   }
   return cartTotal
}
obj.totalPrice = function(){
    let totalPrice = 0;
    for(items in cart){
       let price = cart[items].count * cart[items].price;
       totalPrice += price
    }
    return totalPrice;
};
// When clicking on the x button in cart
obj.deleteItem = function(name){
for(item in cart){
    if(name === cart[item].name){
        cart.splice(item, 1 );
    }
    saveCart()
};
}
obj.updateCount = function(name, newCount){
for(item in cart){
    if(cart[item].name===name){
        cart[item].count = newCount
    }
}
saveCart();
};

obj.checkFunction = function(){
    if(cart.length === 0){
        false
        alert('First add items to Cart!');
    }else{
        window.location.href = "checkOutPage/checkOut.html"
    }
};




return obj;
})();