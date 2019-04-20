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

   


   /*let new_cart = [];
   // если есть корзина
   if (cur_cart) {
      $.each(cur_cart, function( index, value ) {
         // есть ли такое в корзине уже?
         // добавляем количество
         if ( (new_element[0] == value[0]) && (new_element[1] == value[1]) ) {
            new_element[2] += value[2];
            return new_cart.push(new_element);
         } else {
            return new_cart.push(value);
          }
      });

   // если нет корзины
   } else {
      new_cart = [ new_element ];
    }

   // сохранить в localStorage
   return localStorage.setItem('cart', new_cart);
});



/* alert(new_element);*/


// вывод пользователю после обновления корзины
$(window).bind('storage', function(tar) {
   if (tar.originalEvent.key == 'cart') {

      // обновить список выведенной корзины
      // формируем новый список в HTML
      let new_cart_list = '';
      $.each(tar.originalEvent.newValue, function(i, value) {
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

         var element = `<p> Hello </p>`;
                  
         return new_cart_list += element;
      });

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