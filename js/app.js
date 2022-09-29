$(document).ready(function () {
     var skillCards=$('.skill-card');
    var contactform= $('#contact_form');
    var buttonsubmit= $('#contact-form-submit');
    var inputEmail =$('#input_email');
    var inputMessage =$('#input_message');


    contactform.on("submit", function(e){
    var userEmail=inputEmail.val();
    var userMessage=inputMessage.val();

    if(userMessage.length === 0 && userEmail.length ===0){
      alert("Kindly Input Your Details")
    }

   else if(userMessage.length === 0){
    alert("Kindly Input a message");
  }
  else if(userEmail.length ===0){
    alert("Kindly Input Email");
  }
  else{
    buttonsubmit.html("<i class='fa fa-check mr-3'></i><span>Submitted</span>");
  }
    
      e.preventDefault();
    });
     
     skillCards.each(function (i,card) {
      $(this) .mouseover(function(){
     $(this).addClass('banner-content')
     $(this).removeClass('bg-custom')
      })
      $(this).mouseout(function(){
        $(this).addClass('bg-custom')
        $(this).mouseover('banner-content')
      })
     });
});

