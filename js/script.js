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
   $(function () { 
       
       //po kliknieciu wywoluje tekst
       
    $('#box').click(function(){
    alert('you just clicked a box');
    });
    
       //po nie wpisaniu niuczego wyswietli sie alert czy nie zapomniales wpisac tekstu ?
    $('input').blur(function(){
        
      if($(this).val() == ""    ) {
         $(this).css('border', 'solid 1px red');
          $('#box').text('Forgot to add a text?');
         }  
    });
    
  
       $('input').keydown(function(){
                      //jesli argument input jest pusty 
            if($(this).val() !== "" ) {
                $(this).css('border', 'solid 1px #777');
                $('#box').text('Thanks for that');
           
                    };              
            
                          
                        });
       
       // po najechaniu na element zmienia tekst "najechałes"
      $('#box').hover(function() {
          
         $(this).text('you hovered in!'); 
          
      }, function() {
           $(this).text('you hovered out!'); 
      } ) ;
    
});

