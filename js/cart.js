$(function() {

  var data = {
      

     "boxes":{  
        "fiction":{  
           "name":"Художественная",
           "subscriptions":{  
              "p1pm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":900,
                 "boxType":"plain"
              },
              "p1pm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":2550,
                 "boxType":"plain"
              },
              "p1pm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":4800,
                 "boxType":"plain"
              },
              "p1gm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":1900,
                 "boxType":"gift"
              },
              "p1gm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":5250,
                 "boxType":"gift"
              },
              "p1gm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":9600,
                 "boxType":"gift"
              }
           }
        },
        "mix":{  
           "name":"Микс",
           "subscriptions":{  
              "p1pm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":900,
                 "boxType":"plain"
              },
              "p1pm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":2550,
                 "boxType":"plain"
              },
              "p1pm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":4800,
                 "boxType":"plain"
              },
              "p1gm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":1900,
                 "boxType":"gift"
              },
              "p1gm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":5250,
                 "boxType":"gift"
              },
              "p1gm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":9600,
                 "boxType":"gift"
              }
           }
        },
        "classic":{  
           "name":"Классика",
           "subscriptions":{  
              "p1pm1":{
                 "name":"1 месяц",
                 "months":1,
                 "price":900,
                 "boxType":"plain"
              },
              "p1pm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":2550,
                 "boxType":"plain"
              },
              "p1pm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":4800,
                 "boxType":"plain"
              },
              "p1gm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":1900,
                 "boxType":"gift"
              },
              "p1gm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":5250,
                 "boxType":"gift"
              },
              "p1gm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":9600,
                 "boxType":"gift"
              }
           }
        },
        "non-fiction":{  
           "name":"Нон-фикшн",
           "subscriptions":{  
              "p1pm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":900,
                 "boxType":"plain"
              },
              "p1pm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":2550,
                 "boxType":"plain"
              },
              "p1pm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":4800,
                 "boxType":"plain"
              },
              "p1gm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":1900,
                 "boxType":"gift"
              },
              "p1gm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":5250,
                 "boxType":"gift"
              },
              "p1gm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":9600,
                 "boxType":"gift"
              }
           }
        },
        "english":{  
           "name":"English Box",
           "subscriptions":{  
              "p1pm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":1000,
                 "boxType":"plain"
              },
              "p1pm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":2850,
                 "boxType":"plain"
              },
              "p1pm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":5400,
                 "boxType":"plain"
              },
              "p1gm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":2000,
                 "boxType":"gift"
              },
              "p1gm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":5550,
                 "boxType":"gift"
              },
              "p1gm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":10200,
                 "boxType":"gift"
              }
           }
        },
        "self-improvement":{  
           "name":"Саморазвитие и мотивация",
           "subscriptions":{  
              "p1pm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":1000,
                 "boxType":"plain"
              },
              "p1pm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":2850,
                 "boxType":"plain"
              },
              "p1pm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":5400,
                 "boxType":"plain"
              },
              "p1gm1":{  
                 "name":"1 месяц",
                 "months":1,
                 "price":2000,
                 "boxType":"gift"
              },
              "p1gm3":{  
                 "name":"3 месяца",
                 "months":3,
                 "price":5550,
                 "boxType":"gift"
              },
              "p1gm6":{  
                 "name":"6 месяцев",
                 "months":6,
                 "price":10200,
                 "boxType":"gift"
              }
           }
        }
     }
   };


/*  
  function getProducts(success, failure){
      //request the list of products from the "server"
      const URL = "https://github.com/eppelas/getyourbook/blob/master/js/products.json";
      fetch(URL, {
          method: 'GET',
          mode: 'cors'
      })
      //turns json to js method
      .then(response=>response.json())
      .then(success)
      .then(showProducts)

      .catch(failure);

      .catch(err=>{
          errorMessage(err.message);
      });
  };*/
  


  Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
  }

  Storage.prototype.getObject = function(key) {
      var value = this.getItem(key);
      return value && JSON.parse(value);
  }


  function updateCartItemsCount() {
    var cur_cart = localStorage.getObject('cart');
    if ( cur_cart && cur_cart.length && cur_cart.length > 0 ) {
      $('.cart-cont-num').removeClass('hidden').html(cur_cart.length)
    } else {
      $('.cart-cont-num').addClass('hidden').html('')
    }
  }

  function updateCartDOMElements() {
    updateCartItemsCount();
    renderCart();
  }

  function formatFormData(data){
   
    var code = 'p1'; //p1pm2 || p2jm6 etc. p1 wtf?, p - boxType, m6 - months



    var boxType = ''; //'p' || 'j'
    var months = 'm'; // m+number

    var quantity = 0;

    var product = ""; //fiction || mix || whatever
    
    // "p1pm3"

    var icon = 0;


    for (var i in data) {
      if (data[i] && data[i].name == 'product') {
        product = data[i].value;

      } else if (data[i] && data[i].name == 'months') {
        months = 'm'+data[i].value;

      } else if (data[i] && data[i].name == 'boxType') {
        boxType = data[i].value;

      } else if (data[i] && data[i].name == 'quantity') {
        quantity = data[i].value;
      }
    }

    code += boxType + months;
    delete_id = code;

    return [product, code, quantity];

  }




  function addToCart(cur_cart, new_element) {

    if (!cur_cart || cur_cart.length == 0) {
      cur_cart = [];
      cur_cart.push(new_element);

      return cur_cart;
    }
    
    if (!new_element) {
      return cur_cart;
    } 

    var isIncreased = false;

    for (var i in cur_cart){

      if (cur_cart[i][0] == new_element[0] && cur_cart[i][1] == new_element[1]){
        var quantity = cur_cart[i][2] * 1 + new_element[2] * 1;
        cur_cart[i][2] = quantity;
        // if quantity increased - stop checking
        return cur_cart;
      }
    }

    // if quantity was not increased - this is a new element, add it
    cur_cart.push(new_element);

    return cur_cart;
  }


  // Событие добавления в корзину
  $('.add_to_cart_button').click(function() {

    var $form = $(this).parents('form');
    var formData = $form.serializeArray();

    var new_element = formatFormData(formData);

    // забрать из localStorage что сейчас в корзине
    var cur_cart = localStorage.getObject('cart');

    var new_cart = addToCart(cur_cart, new_element);

     // сохранить в localStorage
    localStorage.setObject('cart', new_cart);

    updateCartDOMElements();
  });


  function renderCart() {
    var cur_cart = localStorage.getObject('cart');

    function getMonthsName(m){
      var length = m;

      m = ''+m;
      
      switch (m) {
        case '1':
          length = '1 месяц';
          break;
        case '3':
          length = '3 месяца';
          break;
        case '6':
          length = '6 месяцев';
          break;
        default:
          length = `${m} месяцев`;
          break;
      }
      return length
    }

    function getBoxType(b) {
      var boxtype = b;

      switch (b) {
        case 'plain':
          boxtype = 'Только книги';
          break;
        case 'gift':
          boxtype = 'Стандарт';
          break;
      }

      return boxtype
    }

    function getProductInfo(product_type) {
      return data.boxes[product_type] || data.boxes['fiction'];
    }

    function getProductSubscription(product_type, subscription) {
      var product_info = getProductInfo(product_type);
      return product_info.subscriptions[subscription] || {}
    }

    function getLineHtml(rowData) {

      var product_info = getProductInfo(rowData[0]);

      var product_subscription = getProductSubscription(rowData[0], rowData[1]);

      var product_name = product_info.name;
      var months = getMonthsName(product_subscription.months);
      var package = getBoxType(product_subscription.boxType);

      var price = product_subscription.price;
      var quantity = rowData[2];
      var total = price * quantity;


      rowHtml = `
        <tr class="product">
          <td class="description">
            <p class="product_name">${product_name}<p>
            <div> <p class="choice_name">Подписка: </p> <p class="user_choices"> ${months}</p> </div>
            <div> <p class="choice_name">Наполнение: </p> <p class="user_choices"> ${package}</p> </div>
          </td>
          <td class="cart_price">${price}</td>
          <td class="quantity">${quantity}</td>
          <td class="total">${total}</td>
          <td class="remove">
            <button class="cart-item-remove-btn btn btn-link text-danger" data-box-id="${rowData[0]}" data-subs-id="${rowData[1]}" ><img src="img/icon_delete.png"></button>
          </td>
        </tr>
      `;

      return rowHtml;
      
    }

    cartHtml = '';
    for (var i in cur_cart) {
      cartHtml += getLineHtml(cur_cart[i]);
    }

    $('.cart-vals').html(cartHtml);
  }



/*`<p> Hello </p> \
    <p>` + box_title + `</p> \
    <div class="user_choices"> \
    <p class="choice_name">Подписка:</p> \



*/



  updateCartDOMElements();


  $(document).on('click', '.cart-item-remove-btn', function() {
    var box_id = $(this).data('box-id');
    var subs_id = $(this).data('subs-id');
    var cur_cart = localStorage.getObject('cart');

    var new_cart = [];
    for (var i in cur_cart) {
      if ( cur_cart[i][0] != box_id || cur_cart[i][1] != subs_id  ) {
        new_cart.push(cur_cart[i]);
      }
    }
    localStorage.setObject('cart', new_cart);
    updateCartDOMElements();
  });




  $(window).bind('storage', function(tar) {
    console.log("FIRE");

    // updateCartDOMElements();


    //     // запрос новой итоговой цены

    //    /* return $.post('https://domain.com/link-to-request', tar.originalEvent.newValue, msg => {
    //        console.log(msg);
    //        // вывод общей цены
    //        return $('.total_price').html( msg.total_price );
    //     });*/
    //   }
  });



});


 