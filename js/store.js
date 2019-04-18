/*var testObject = { 'one': 1, 'two': 2, 'three': 3 };
console.log('typeof testObject: ' + typeof testObject);
console.log('testObject properties:');
for (var prop in testObject) {
    console.log('  ' + prop + ': ' + testObject[prop]);
}

// Put the object into storage
localStorage.setItem('testObject', testObject);

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);






Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
*/
/*Because of short-circuit evaluation, getObject() will immediately return null if key is not in Storage. */

/*


var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));




var x = 5;

/*alert(x);*/
/*console.log(x);




var answer = 42;

typeof answer // returns number

console.log(typeof(answer));


x = "\"Do. Or do not. There is no try.\" - Yoda";

console.log(x)



var greeting = "Oh hi, " + "Mark" + "!"; // returns Oh hi, Mark!




var message = "Oh hi, ";
var firstName = "Mark";
var bam = "!";

var greeting = message + firstName + bam; // returns Oh hi, Mark!


var nope = 1 / "One"; 

console.log(typeof(nope));

x = nope / "two";


console.log(x);
console.log(typeof(x));


var beyond = 1 / 0; // returns Infinity

console.log(beyond);


var isChecked = true;

console.log(isChecked);
console.log(typeof(isChecked));



7 > 8; // returns false

/* Check if a variable is equal to a string */
/*var color = "Blue";

color === "Blue"; // returns true


console.log(color === "Blue");

console.log(7 > 8);


var empty = null;



var sym = $;
sym = Symbol();

console.log(sym);


var batman = {
  firstName: "Bruce", // string
  lastName: "Wayne", 
  location: "Gotham", 
  introduced: 1939, // number
  billionaire: true, // Boolean
  weakness: null // null
};

console.log(batman);*/

/*batman["firstName"]; */




/*var box = {
	id: "fiction",
	name: "Художественная", 
	subscriptionName: "",
	gift: true,
	subscriptionPrice: "1900"
};

var box_type = "";



console.log(box);



Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}



var box = {
	id: "fiction",
	name: "Художественная", 
	subscriptionName: "",
	gift: true,
	subscriptionPrice: "1900"
};

console.log('typeof box: ' + typeof box);
console.log('box properties:');
for (var prop in box) {
    console.log('  ' + prop + ': ' + box[prop]);
}

console.log(box.id);

// Put the object into storage
localStorage.setItem('box', box);
console.log(box);








// Retrieve the object from storage
var retrievedObject = localStorage.getItem('box.id');
console.log(retrievedObject);

console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);
console.log(retrievedObject);

var retrievedObject = localStorage.getItem('box');

console.log(retrievedObject);






Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
*/
/*Because of short-circuit evaluation, getObject() will immediately return null if key is not in Storage. */




/*var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));







Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}





var box = { id: "fiction",
	name: "Художественная", 
	subscriptionName: ""};

// Put the object into storage
localStorage.setItem('box', JSON.stringify(box));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('box');

/*doesnt work with box.id*/

/*console.log('retrievedObject: ', JSON.parse(retrievedObject));

console.log(retrievedObject);


var batman = {
  firstName: "Bruce",
  lastName: "Wayne", 
  secretIdentity: function() { // method
    return this.firstName + " " + this.lastName;
  }
}; 

batman.secretIdentity();
console.log(batman.secretIdentity());
console.log(batman.firstName);
console.log(retrievedObject.id);
console.log(box.id);



var ninjaTurtles = [
  "Leonardo",
  "Michelangelo",
  "Raphael",
  "Donatello"
];


ninjaTurtles.length; // returns 4

var leader = ninjaTurtles[0];*/
/*

localStorage.clear();

localStorage.setItem('key', 'value');

var x = localStorage.getItem('key');

console.log(x);

localStorage.removeItem('key');


*/
/*example of unstringifying — parse*/
/*
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

*/
/*In the form event listener, let's push any new input value into the array, then set the  localStorage to the new, updated value.

*/


// form event listener here
/*e.preventDefault();

itemsArray.push(input.value);
localStorage.setItem('items', JSON.stringify(itemsArray));
*/

/*??*/

/*const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

*/
/*
I'm going to add an event listener to the form that watches for a submit event - which will be any time you press enter on the form.
The e.preventDefault() will prevent the form from the default submit action, which we don't want, since we're not sending any data
to a server.
*/



/*********
Start of the Test
**********/


/*const CART = {
  KEY: 'bkasjbdfkjasdkfjhaksdfjskd',
  contents: [],
  init(){
                //check localStorage and initialize the contents of CART.contents
                let _contents = localStorage.getItem(CART.KEY);
                if(_contents){
                    CART.contents = JSON.parse(_contents);
                }else{
                    //dummy test data
                    CART.contents = [
                        {id:'fiction', name:'Художественная', qty:5, itemPrice: 1900},
                        {id:'mix', name:'Микс', qty:3, itemPrice: 1900}
                    ];
                    CART.sync();
                };
          }
       };     

   */


localStorage.clear();

  const CART = {
            KEY: 'bkasjbdfkjasdkfjhaksdfjskd',
            contents: [],
            init(){
                //check localStorage and initialize the contents of CART.contents
                let _contents = localStorage.getItem(CART.KEY);
                if(_contents){
                    CART.contents = JSON.parse(_contents);
                }else{
                    //dummy test data
                    CART.contents = [
                        {id:'fiction', name:'Художественная', qty:5, itemPrice: 1900},
                        {id:'mix', name:'Микс', qty:3, itemPrice: 1900}
                    ];
                    CART.sync();
                }
            },
            async sync(){
                let _cart = JSON.stringify(CART.contents);
                await localStorage.setItem(CART.KEY, _cart);
            },
            find(id){
                //find an item in the cart by it's id
                let match = CART.contents.filter(item=>{
                    if(item.id == id)
                        return true;
                });
                if(match && match[0])
                    return match[0];
            },
            add(id){
                //add a new item to the cart
                //check that it is not in the cart already
                if(CART.find(id)){
                    CART.increase(id, 1);
                }else{
                    let arr = PRODUCTS.filter(product=>{
                        if(product.id == id){
                            return true;
                        }
                    });
                    if(arr && arr[0]){
                        let obj = {
                            id: arr[0].id,
                            title: arr[0].title,
                            qty: 1,
                            itemPrice: arr[0].price
                        };
                        CART.contents.push(obj);
                        //update localStorage
                        CART.sync();
                    }else{
                        //product id does not exist in products data
                        console.error('Invalid Product');
                    }
                }
            },
            increase(id, qty=1){
                //increase the quantity of an item in the cart
                CART.contents = CART.contents.map(item=>{
                    if(item.id === id)
                        item.qty = item.qty + qty;
                    return item;
                });
                //update localStorage
                CART.sync()
            },
            reduce(id, qty=1){
                //reduce the quantity of an item in the cart
                CART.contents = CART.contents.map(item=>{
                    if(item.id === id)
                        item.qty = item.qty - qty;
                    return item;
                });
                CART.contents.forEach(async item=>{
                    if(item.id === id && item.qty === 0)
                        await CART.remove(id);
                });
                //update localStorage
                CART.sync()
            },
            remove(id){
                //remove an item entirely from CART.contents based on its id
                CART.contents = CART.contents.filter(item=>{
                    if(item.id !== id)
                        return true;
                });
                //update localStorage
                CART.sync()
            },
            empty(){
                //empty whole cart
                CART.contents = [];
                //update localStorage
                CART.sync()
            },
            sort(field='title'){
                //sort by field - title, price
                //return a sorted shallow copy of the CART.contents array
                let sorted = CART.contents.sort( (a, b)=>{
                    if(a[field] > b[field]){
                        return 1;
                    }else if(a[field] < a[field]){
                        return -1;
                    }else{
                        return 0;
                    }
                });
                return sorted;
                //NO impact on localStorage
            },
            logContents(prefix){
                console.log(prefix, CART.contents)
            }
        };
        
        let PRODUCTS = [];
        
        document.addEventListener('DOMContentLoaded', ()=>{
            //when the page is ready
            getProducts( showProducts, errorMessage );
            //get the cart items from localStorage
            CART.init();
            //load the cart items
            showCart();
        });
        
        function showCart(){
            let cartSection = document.getElementById('cart');
            cart.innerHTML = '';
            let s = CART.sort('qty');
            s.forEach( item =>{
                let cartitem = document.createElement('div');
                cartitem.className = 'cart-item';
                
                let title = document.createElement('h3');
                title.textContent = item.title;
                title.className = 'title'
                cartitem.appendChild(title);
                
                let controls = document.createElement('div');
                controls.className = 'controls';
                cartitem.appendChild(controls);
                
                let plus = document.createElement('span');
                plus.textContent = '+';
                plus.setAttribute('data-id', item.id)
                controls.appendChild(plus);
                plus.addEventListener('click', incrementCart)
                
                let qty = document.createElement('span');
                qty.textContent = item.qty;
                controls.appendChild(qty);
                
                let minus = document.createElement('span');
                minus.textContent = '-';
                minus.setAttribute('data-id', item.id)
                controls.appendChild(minus);
                minus.addEventListener('click', decrementCart)
                
                let price = document.createElement('div');
                price.className = 'price';
                let cost = new Intl.NumberFormat('en-CA', 
                                {style: 'currency', currency:'CAD'}).format(item.qty * item.itemPrice);
                price.textContent = cost;
                cartitem.appendChild(price);
                
                cartSection.appendChild(cartitem);
            })
        }
        
        function incrementCart(ev){
            ev.preventDefault();
            let id = parseInt(ev.target.getAttribute('data-id'));
            CART.increase(id, 1);
            let controls = ev.target.parentElement;
            let qty = controls.querySelector('span:nth-child(2)');
            let item = CART.find(id);
            if(item){
                qty.textContent = item.qty;
            }else{
                document.getElementById('cart').removeChild(controls.parentElement);
            }
        }
        
        function decrementCart(ev){
            ev.preventDefault();
            let id = parseInt(ev.target.getAttribute('data-id'));
            CART.reduce(id, 1);
            let controls = ev.target.parentElement;
            let qty = controls.querySelector('span:nth-child(2)');
            let item = CART.find(id);
            if(item){
                qty.textContent = item.qty;
            }else{
                document.getElementById('cart').removeChild(controls.parentElement);
            }
        }
        
        function getProducts(success, failure){
            //request the list of products from the "server"
            const URL = "https://prof3ssorst3v3.github.io/media-sample-files/products.json?";
            fetch(URL, {
                method: 'GET',
                mode: 'cors'
            })
            .then(response=>response.json())
            .then(showProducts)
            .catch(err=>{
                errorMessage(err.message);
            });
        }
        
        function showProducts( products ){
            PRODUCTS = products;
            //take data.products and display inside <section id="products">
            let imgPath = '../video-pages/img/';
            let productSection = document.getElementById('products');
            productSection.innerHTML = "";
            products.forEach(product=>{
                let card = document.createElement('div');
                card.className = 'card';
                //add the image to the card
                let img = document.createElement('img');
                img.alt = product.title;
                img.src = imgPath + product.img;
                card.appendChild(img);
                //add the price
                let price = document.createElement('p');
                let cost = new Intl.NumberFormat('en-CA', 
                                        {style:'currency', currency:'CAD'}).format(product.price);
                price.textContent = cost;
                price.className = 'price';
                card.appendChild(price);
                
                //add the title to the card
                let title = document.createElement('h2');
                title.textContent = product.title;
                card.appendChild(title);
                //add the description to the card
                let desc = document.createElement('p');
                desc.textContent = product.desc;
                card.appendChild(desc);
                //add the button to the card
                let btn = document.createElement('button');
                btn.className = 'btn';
                btn.textContent = 'Add Item';
                btn.setAttribute('data-id', product.id);
                btn.addEventListener('click', addItem);
                card.appendChild(btn);
                //add the card to the section
                productSection.appendChild(card);
            })
        }
        
        function addItem(ev){
            ev.preventDefault();
            let id = parseInt(ev.target.getAttribute('data-id'));
            console.log('add to cart item', id);
            CART.add(id, 1);
            showCart();
        }
        
        function errorMessage(err){
            //display the error message to the user
            console.error(err);
        }


