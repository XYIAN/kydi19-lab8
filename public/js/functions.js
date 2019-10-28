/* global $ */

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