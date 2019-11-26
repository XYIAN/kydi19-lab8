/* global $ */

$(document).ready(function(){

  //Event Listeners
  $(".q5choice").on("click", function()
  {
  	$(".q5choice").css("background-color",""); //resets background color
  	$(this).css("background-color","rgb(255, 255, 0)"); 
  });
      
      
  if($("#totalScore").val() >= 80)
  {
      $("#totalResponse").html("Congrats you passed!"); 
      $("#totalResponse").css("color" , "green"); 
  }
  else if($("#totalScore").val() < 80)
  {
      $("#totalResponse").html("Sorry you failed!"); 
      $("#totalResponse").css("color" , "red"); 
  }
      
});//end doc ready