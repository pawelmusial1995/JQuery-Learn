//script.js

//wywoływanie JQuery

//   $(function () {

//  });  
    //alert('hello?');
    
    //button function click hide
   // $('button').click(function(){
   //    $('#box').fadeOut(1000);    
   // });
    
   //adding a border to our level 2 , 3, 4 paragraph
   //$('h2, h3 , h4').css('border', 'solid 1px red');
    
    //select div 
   // $('div#container').css('border', 'solid 1px red');
  
    //select classes
     // $('p.lead').css('border', 'solid 1px red');
    
   // $('li:first').css('border', 'solid 1px red');
    
    //$('p:even').css('border', 'solid 1px red');
    
    //$('div em').css('border', 'solid 1px red');
    
    //$('div > p').css('border', 'solid 1px red');
    
    //headers selector
    
   // $(':header').css('border', 'solid 1px red');
    
    //containes selector
    
    //$('div:contains("Paul!")').css('border', 'solid 1px red');
    
    /*****************
    * jQUERY EVENT METHODS
    ********************* */
    
    //click method
  // $(function () { 
       
       //po kliknieciu wywoluje tekst
       
   // $('#box').click(function(){
   // alert('you just clicked a box');
   // });
    
       //po nie wpisaniu niuczego wyswietli sie alert czy nie zapomniales wpisac tekstu ?
  //  $('input').blur(function(){
        
   //   if($(this).val() == ""    ) {
      //   $(this).css('border', 'solid 1px red');
      //    $('#box').text('Forgot to add a text?');
      //   }  
   // });
    
  
      // $('input').keydown(function(){
                      //jesli argument input jest pusty 
     //       if($(this).val() !== "" ) {
      //          $(this).css('border', 'solid 1px #777');
      //          $('#box').text('Thanks for that');
           
//};              
          
                          
                  //      });
       
       // po najechaniu na element zmienia tekst "najechałes"
 //     $('#box').hover(function() {
          
 //        $(this).text('you hovered in!'); 
          
   //   }, function() {
 //          $(this).text('you hovered out!'); 
    //  } ) ;
    
//});

/**************
* jQUeryy CHAINING
***************** */

//zsuwa sie nadu pasek

     
 // $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();
   
     
/**************
* jQUeryy HIDE/SHOW
***************** */
    // $(function () { 
         
   //$('h1').hide();  
  // $('div.hidden').show(); 
         
         
    //faade in
      //   $('div.hidden').hide(); 
      //   $('p').fadeOut();
   //  $('div.hidden').fadeIn(); 
    
         
      //   $('#box1').click(function() {
        //    $(this).fadeTo(1000, 0.25, function() {
                // animation is complite
                
              //  $(this).slideUp();
          //  }); 
             
             //   });
         
    //   $('div.hidden').slideDown();
        
        // $('button').click(function() {
         //    $('#box1').slideToggle();
         
      //   })
         
//});


/***************
* jQuery Animate Method
******************** */

  $(function () { 

      $('#left').click(function ()  {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            //animation is complete
        });  
      });
        
       $('#up').click(function ()  {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            //animation is complete
        });  
      });
       $('#right').click(function ()  {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            //animation is complete
        });  
      });
       $('#down').click(function ()  {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1px"
        }, function() {
            //animation is complete
        });  
      });


});


/*******************
* jQuery CSS
******************* */

  $(function () { 
        //for one style
      //$('#circle2').css('background','#8a8d22');
        
        //for multiply styles
      $('#circle2').css({ 
          'background':'#8a8d22',
          'display': 'inline-block', 
          'color': 'white',
          'text-align': 'center', 
          'line-height': '140px',
          'height': '140px',
          'width': '140px'}).addClass('circleShape');;
     
      
  });







