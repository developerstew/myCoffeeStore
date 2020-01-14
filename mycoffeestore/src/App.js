import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <body>
    <div class="logo">
        <h1><span>C</span>offeeworks</h1>
        <form class="form-inline" id="searchBar">
                <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
    </div>

    <nav class="navbar sticky-top">
            <a class="navbar-brand text-white" href="store.html" id='homeColor'>Home</a>
            <a class="navbar-brand text-white" href="login.html">Login</a>
            <a class="navbar-brand text-white" href="visit.html">Visit</a>
            <a class="navbar-brand text-white" id="cartNavBtn">Cart <span id="cartCount"></span></a>            
            <div id="cartData">
                    <div id="showCart" >
                        </div>
                            <div class="cartBottom">You have <span id="countCart">0</span> items in your cart!</div>
                            <div class="cartBottom">Total Cart: R<span id="totalCart">0</span></div>
                            <button id="checkOutBtn">CHECKOUT</button>
                </div>
          </nav>
    <main>
        <h3>Our top selection</h3>
        <div id="first">
            <div class="firstImages cartItem">
                <a href="itemsForSale/pureCup.html"> 
                <img src="https://media.takealot.com/covers_tsins/56237514/56237514-1A-pdpxl.jpg" alt="">
                </img>
                </a>
                <p>Just add water</p>
                <button class="addToCart" data-name="pureCup" data-price="500" data-image="https://media.takealot.com/covers_tsins/56237514/56237514-1A-pdpxl.jpg">Add to Cart</button>
            </div>

            <div class="firstImages cartItem">
                <a href="itemsForSale/espresso.html"><img
                        src="https://cnet2.cbsistatic.com/img/ptlJe0_K-sHGRG9w4p35B05cc7Y=/970x0/2018/09/25/5e77b244-f560-4884-872e-9e81d55e454a/espressotoria-black.jpg"
                        alt="">
                </img>
                </a>
                <p>Espresso Machine</p>
                <button class="addToCart" data-name="Espresso machine" data-price="1500" data-image="https://cnet2.cbsistatic.com/img/ptlJe0_K-sHGRG9w4p35B05cc7Y=/970x0/2018/09/25/5e77b244-f560-4884-872e-9e81d55e454a/espressotoria-black.jpg">Add to Cart </button>
            </div>


            <div class="firstImages cartItem">
                <a href="itemsForSale/candy.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL12Q7v7yOgXBB9ggt_NZqeHMlaxdFAig2w9gxIBC84JDLQW5Lkw" alt="">
                </img>
                </a>
                <p>Something Sweet</p>
                <button class="addToCart" data-name="sweet candy" data-price="50" data-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL12Q7v7yOgXBB9ggt_NZqeHMlaxdFAig2w9gxIBC84JDLQW5Lkw">Add to Cart</button>
            </div>

            <div class="firstImages cartItem">
                <a href="itemsForSale/coffeeCapsules.html">
                <img src="https://www.super-espresso.com/wp-content/uploads/2013/10/Nespresso-Capsules.jpg" alt="">
                </img>
                </a>
                <p>Coffee Capsules</p>
                <button class="addToCart" data-name="Capsules" data-price="700" data-image="https://www.super-espresso.com/wp-content/uploads/2013/10/Nespresso-Capsules.jpg">Add to Cart</button>
            </div>

            <div class="firstImages cartItem">
                <a href="itemsForSale/jack.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwHxsIw61xwdcyjPrhZHpU8gy9hCY7Rv8beEEuBi5Gt9iPboa6A" alt="">
                </img>
                </a>
                <p>For the classy</p>
                <button class="addToCart" data-name="Jack Daniels Coffee" data-price="1000" data-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwHxsIw61xwdcyjPrhZHpU8gy9hCY7Rv8beEEuBi5Gt9iPboa6A">Add to Cart</button>
            </div>

        </div>

        <div id='second'>
            <h3>New and fresh</h3>

            <div class="secondImages cartItem">
                <a href="itemsForSale/organic.html">
                <img src="https://images-na.ssl-images-amazon.com/images/I/811Wj4LfQ1L._SX425_.jpg" alt="">
                </img>
                </a>
                <p>Keep it organic</p>
                <button class="addToCart" data-name="organic coffee" data-price="500" data-image="https://images-na.ssl-images-amazon.com/images/I/811Wj4LfQ1L._SX425_.jpg">Add to Cart</button>
            </div>

            <div class="secondImages cartItem">
                <a href="itemsForSale/additives.html">
                <img src="http://x776.co/wp-content/uploads/2018/11/starbucks-coffee-packs-starbucks-iced-coffee-buy-online-starbucks-iced-coffee-packets.jpg" alt="">
                </img>
                </a>
                <p>Frappuccino</p>
                <button class="addToCart" data-name="Frappuccino" data-price="400" data-image="http://x776.co/wp-content/uploads/2018/11/starbucks-coffee-packs-starbucks-iced-coffee-buy-online-starbucks-iced-coffee-packets.jpg">Add to Cart</button>
            </div>

            <div class="secondImages cartItem">
                <a href="itemsForSale/decaf.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1qn-VVki6ncjPUUFZTDZ4jR8GKhnhenApOCMHJz6OaSTNYWj" alt="">
                </img>
                </a>
                <p>Delicious Decaf</p>
                <button class="addToCart" data-name="decaf" data-price="300" data-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1qn-VVki6ncjPUUFZTDZ4jR8GKhnhenApOCMHJz6OaSTNYWj">Add to Cart</button>

            </div>

            <div class="secondImages cartItem">
                <a href="itemsForSale/machine.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuNjednF-dWi-DJB5kXt2CXSlca2DAEH6xDHTX65-DvhAjoP4VA" alt="">
                  </img>
                  </a>
                <p>For the machine</p>
                <button class="addToCart" data-name="machine coffee" data-price="100" data-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuNjednF-dWi-DJB5kXt2CXSlca2DAEH6xDHTX65-DvhAjoP4VA">Add to Cart</button>
            </div>

            <div class="secondImages cartItem">
                <a href="itemsForSale/flavoured.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoMxtzDPUzv9yCB3gDUbZK6vhtbBdAetBKroWza58bAVD49H5" alt="">
                </img>
                </a>
                <p>Adventurous</p>
                <button class="addToCart" data-name="hazelnut coffee" data-price="500" data-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoMxtzDPUzv9yCB3gDUbZK6vhtbBdAetBKroWza58bAVD49H5">Add to Cart</button>
            </div>

        </div>
    </main>

    <footer>
        <div id='contactDeets'>
            <p><b>Contact</b></p>
            <p> &#x1f4f1 +27 87 441 8839</p>
            <p>coffeeworks@gmail.com</p>
        </div>
        <p id='cert'>Coffeeworks Company &copy;||Developed by Harmony33</p>
    </footer>
    </body>
    </div>
  );
}

export default App;
