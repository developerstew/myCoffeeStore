import React, { Component } from 'react'

class CheckOut extends Component {
    render() {
        let cashCart = [];

function saveCart(){
    // Sets the localStorage equal to the cart array
    localStorage.setItem('shoppingCart', JSON.stringify(cashCart));
};

function loadCart(){
    cashCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if(cashCart === null){
        cashCart = [];
    }
}

loadCart()

function displayCashCart(){
   let cartOutput = '';
   cartTotal = 0;
    for(items in cashCart){
        let name = cashCart[items].name;
        let price = cashCart[items].price;
        let count = cashCart[items].count;
        let image = cashCart[items].image;
        // Grey are cartTotals
        let total = price*count

        cartOutput+=
    "<tr class='tableItems'>"
    +"<td>"  +"<img class='cartImg' src='" + image + "' +>"+"</img>" + name + "</td>" 
    +"<td>" + 'x' + count + "</td>" 
    +"<td>" + 'R'+ price +"</td>"
    +"<td>"+"<button class='delete-item btn btn-danger' data-name= '" +cashCart[items].name + "'>x</button>"+ "</td>"
    + "</tr>"
    
        cartTotal+=total
    }
    let vat = Number((cartTotal *0.14).toFixed(2));
    let grandTotal = Number(cartTotal) + vat
   $('#checkOutItems').html(cartOutput);
   $('#total').html('R'+cartTotal);
   $('#vatPrice').html('R' + vat);
    $('#grandTotal').html('R' + grandTotal )
    cssElements()
};
displayCashCart()

function cartTotal(itemPrice){
    let total = 0;
  for(item in itemPrice){
      total+=item
  }
console.log(total)
    let vat = total*0.14;
    
   
}
// Css to newly appended elements , Note the curly bracket inside 
function cssElements(){
    $('#checkOutItems').css({
        'font-size':'40px',
        'text-align':'left'
    });
    $('.cartImg').css({
        'height':'80px',
        'width' : '80px'
    })
    $('.delete-item').css({
        'height': '50px',
        'width' : '40px',
        'font-size' : '30px',
    });
    $('.final').css({
        'font-weight':'bold',
        'float':'right'
        
    });
}
cssElements();


$('#checkOutItems').on("click", ".delete-item", function(event){
    let name = $(this).attr('data-name');
    for(item in cashCart){
        if(cashCart[item].name === name){
            cashCart.splice(item,1)
        }
        saveCart();
        displayCashCart();
        cssElements();
        pageAccess()
    }
});

function pageAccess(){
    if(cashCart.length===0){
        alert('add items to cart');
        window.location.href = '../store.html'
    }else{
        
    }
}
pageAccess()

        return (
            <body>
    <div class="logo">

        <h1><span>C</span>offeeworks</h1>
    </div>

    <nav class="mainNav">
        <ul>
            <a href="../store.html" id='homeColor'>Home</a>
            <a href="../login.html">Login</a>
            <a href="../visit.html">Visit</a>
        </ul>
    </nav>
    <main id="checkOutContainer">
        <div class="container-fluid white">
            <div class="row ">
                <div class="col-lg-6 border border-white">
                        <p><b>Add Coupon</b></p>
                        <input id="coupon" value="" placeholder="enter coupon code"></input>
                        <button id="coupon-btn">Generate</button>
                </div>

            <div class="col-lg-6 border border-white">
            <p><b>Shipping</b></p>
                <select name="" id="shipping">
                        <option value="">Collect from warehouse</option>
                    <option value="">Courier(Cash on delivery)</option>
                </select>
            </div>
        </div>
        </div>
        <div id="summary"> 
                <p><b>Order Summary</b></p>
                <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th>Product name</th>
                        <th>#</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody id="checkOutItems">
                      <tr>
                        <td>a</td>
                        <td>d</td>
                        <td>a</td>
                      </tr>
                    </tbody>
                  </table>
                    <span id="checkOutItems">
                     </span>
            <div id="cartTotal">
                <p>Total Price <span id="total" class="final"></span></p>
                <p>VAT 14% <span id="vatPrice" class="final"></span></p>
                <p>Grand Total <span id="grandTotal" class="final"></span></p>
            </div>
        </div>
        <button type="submit" id='book'>Place Order</button>
    </main>
</body>
        )
    }
}

export default CheckOut
