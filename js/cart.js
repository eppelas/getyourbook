/*localStorage.clear();
*/




var data = {
   "cart": [
      ["fiction", "p1pm1", 1],
      ["mix", "p1pm3", 1],
      ["fiction", "p1pm6", 3]
   ],   
   "boxes": {
      "fiction": {
         "name":"Художественная",
         "face_price":900,
         "subscriptions": {
            "p1pm1": {
               "name":"1 месяц",
               "months":1,
               "price":900,
               "boxType":"plain"
             },
            "p1pm3": {
               "name":"3 месяца",
               "months":3,
               "price":2550,
               "boxType":"plain"
             },
            "p1pm6": {
               "name":"6 месяцев",
               "months":6,
               "price":4800,
               "boxType":"plain"
             }
          }
       },
      "mix": {
         "name":"Микс",
         "face_price":900,
         "subscriptions": {
            "p1pm1": {
               "name":"1 месяц",
               "months":1,
               "price":900,
               "boxType":"plain"
             },
            "p1pm3": {
               "name":"3 месяца",
               "months":3,
               "price":2550,
               "boxType":"plain"
             }
          }
       }
    }
 };




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
            /*.then(showProducts)*/

            .catch(failure);

            /*.catch(err=>{
                errorMessage(err.message);
            });*/
        };


/*alert(cart);*/


/*Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}*/



// Событие добавления в корзину
$('.add_to_cart_button').click(function() {
   // собираем данные
   var new_element = ["fiction", "p1pm1", 1];
   
   console.log(new_element);


   // забрать из localStorage что сейчас в корзине
   var cur_cart = localStorage.getItem('cart');

   


   let new_cart = [];
   // если есть корзина
   if (cur_cart) {
      console.log(cur_cart); 
      for (var index in cur_cart) {
        var value = cur_cart[index]
         // есть ли такое в корзине уже?
         // добавляем количество
         if ( (new_element[0] == value[0]) && (new_element[1] == value[1]) ) {
            new_element[2] += value[2];
            return new_cart.push(new_element);
         } else {
            return new_cart.push(value);
          }
      }

   // если нет корзины
   } else {
      new_cart = [ new_element ];
    }

   // сохранить в localStorage
   return localStorage.setItem('cart', new_cart);

   createCart(); 

});





//  document.addEventListener('DOMContentLoaded', ()=>{
  

$(function createCart(i, value) {
           var box_title = data.boxes[ value[0] ].name;
           var { months } = data.boxes[ value[0] ].subscriptions[ value[1] ];
           let lenght = '--';
           switch (months) {
              case 1:
                 lenght = '1 месяц';
                break;
              case 3:
                 lenght = '3 месяца';
                break;
              case 6:
                 lenght = '6 месяцев';
                break;
           }

           var element = `<p> Hello </p> \
            <p>` + box_title + `</p> \
            <div class="user_choices"> \
            <p class="choice_name">Подписка:</p> \
            <p>` + lenght + `</p> `;
                    
           return new_cart_list += element;
        });




$(function() { // onload

 var cur_cart = localStorage.getItem('cart');

  // вывод пользователю после обновления корзины


  $(window).bind('storage', function(tar) {
    console.log("FIRE")
     if (tar.originalEvent.key == 'cart') {

        // обновить список выведенной корзины
        // формируем новый список в HTML
        let new_cart_list = '';
        $.each(tar.originalEvent.newValue, 
          /*function(i, value) {
           var box_title = data.boxes[ value[0] ].name;
           var { months } = data.boxes[ value[0] ].subscriptions[ value[1] ];
           let lenght = '--';
           switch (months) {
              case 1:
                 lenght = '1 месяц';
                break;
              case 3:
                 lenght = '3 месяца';
                break;
              case 6:
                 lenght = '6 месяцев';
                break;
           }

           var element = `<p> Hello </p> \
            <p>` + box_title + `</p> \
            <div class="user_choices"> \
            <p class="choice_name">Подписка:</p> \
            <p>` + lenght + `</p> `;
                    
           return new_cart_list += element;
        }*/
        );

        // пихаем в список новый HTML
        $('.cart_list_class').html( new_cart_list );


      

        // запрос новой итоговой цены

       /* return $.post('https://domain.com/link-to-request', tar.originalEvent.newValue, msg => {
           console.log(msg);
           // вывод общей цены
           return $('.total_price').html( msg.total_price );
        });*/
      }
  });

});



