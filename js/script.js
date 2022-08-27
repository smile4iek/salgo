function openForm() {
   document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
}
function openForm_2() {
   document.getElementById("myForm_1").style.display = "block";
}

function closeForm_2() {
   document.getElementById("myForm_1").style.display = "none";
}


 function burgerMenu(selector) {
   let menu = $(selector);
   let button = menu.find('.burger-menu_button', '.burger-menu_lines');
   let links = menu.find('.burger-menu_link');
   let overlay = menu.find('.burger-menu_overlay');
   
   button.on('click', (e) => {
     e.preventDefault();
     toggleMenu();
   });
   
   links.on('click', () => toggleMenu());
   overlay.on('click', () => toggleMenu());
   
   function toggleMenu(){
     menu.toggleClass('burger-menu_active');
     
     if (menu.hasClass('burger-menu_active')) {
       $('body').css('overlow', 'hidden');
     } else {
       $('body').css('overlow', 'visible');
     }
   }
 }
 
 burgerMenu('.burger-menu');
 if (window.jQuery) {
   var verJquery = jQuery.fn.jquery;
   // выведем версию jQuery в консоль
   console.log(verJquery);
 }

 const $scrollDown = document.querySelector('#MainCTA')
$scrollDown.onclick = function (e) {
   // отменяем стандартное действие браузера (переход по ссылке)
   e.preventDefault();
   scrollTo(0, 900);
   
 };

 
        jQuery(document).ready(function () {
     
  $(".phone").mask("+999 (99) 999-99-99"); 
 

 jQuery('form button').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });


});