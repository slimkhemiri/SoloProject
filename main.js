//Declare arrays of the answers
var answer1=['dolphin','DOLPHIN','Dolphin']
var answer2=['butterfly','BUTTERFLY','Butterfly']
var answer3=['penguin','PENGUIN','Penguin']
var text ;
//input:string
//output:popup type text 
//loop throught the array,if your guess is into the array return yourGuess is right
//if not return YourGuess is wrong
var guess1 = function(yourGuess){
  for(var i=0;i<yourGuess.length;i++){
      if(answer1.includes(yourGuess)){
         text="Congratulation " + yourGuess + " Is Right"
          return {text,correct:true}
      }
      text="Sorry, Your Guess Is Wrong ! "
      return {text,correct:false}
  }
}
var guess2 = function(yourGuess){
  for(var i=0;i<yourGuess.length;i++){
      if(answer2.includes(yourGuess)){
         text="Congratulation " + yourGuess + " Is Right"
          return {text,correct:true}
      }
      text="Sorry, Your Guess Is Wrong ! "
      return {text,correct:false}
  }
}
var guess3 = function(yourGuess){
  for(var i=0;i<yourGuess.length;i++){
      if(answer3.includes(yourGuess)){
        text="Congratulation " + yourGuess + " Is Right"
        return {text,correct:true}
      }
       text="Sorry, Your Guess Is Wrong ! "
      return {text,correct:false}
  }
}
//if yourGuess is right turn the next page
//if not return to the home page

$('#check').click(function(){
 
  alert( guess1($('#guess').val()).text)
  if ( guess1($('#guess').val()).correct){
    $(location).attr('href',"index3.html")
  }
  if ( !guess1($('#guess').val()).correct){
    $(location).attr('href',"index.html")
  }

})

$('#check2').click(function(){
 
  alert( guess2($('#guess2').val()).text)
  if ( guess2($('#guess2').val()).correct){
    $(location).attr('href',"index5.html")
  }
  if ( !guess2($('#guess2').val()).correct){
    $(location).attr('href',"index.html")
  }

})

$('#check3').click(function(){
  alert( guess3($('#guess3').val()).text)
  if ( guess3($('#guess3').val()).correct){
    $(location).attr('href',"index7.html")
  }
  if ( !guess3($('#guess3').val()).correct){
    $(location).attr('href',"index.html")
  }

})
//countdown from 15 to 0
//if time equal to 0 before your submit alert that time is over and go back to home page
var timeleft = 15;
var Timer = setInterval(function(){
timeleft--;
document.getElementById("countdown").textContent = timeleft;
if(timeleft <= 0)
    clearInterval(Timer);
 if(timeleft==0){
  alert("Time Is Over Play Again !")
  $(location).attr('href',"index.html")
 }   
},1000);



