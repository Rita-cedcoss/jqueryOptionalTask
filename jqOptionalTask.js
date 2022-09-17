$(document).ready(function()
{
   $("<div class='heading1'>"+
  " <h1>Monday</h1> <h2>Tuesday</h2><h3>Wednesday</h3></div>"+
  "<div class='heading1'><h2>Thursday</h2><h1>Friday</h1><h1>Saturday</h1> </div>"+
  "<!-- Q3.  -->"+
  "<form> <label for='fname'>First name:</label><br> <input type='text' id='fname' name='fname'><br><label for='lname'>Last name:</label><br><input type=text' id='lname' name='lname'></form>"+
  "<!-- Q6. -->"+
  "<form><label for='fname'>First name:</label><br><input type='text' id='fname' name='fname'><br> <label for='lname'>Last name:</label><br><input type='text' id='lname' name='lname'>"+
  "<div id='days' name ='days' class='heading1 '><h1>Monday</h1><h2>Tuesday</h2><h3>Wednesday</h3><input id='btnradio' type='radio' checked/></div> </form>"+"<!-- Q7. -->"
  +"<ul><li>Html Tutorial</li><li>Mongodb Tutorial</li><li>Python Tutorial</li></ul>"+
  "<!-- Q8. -->"
  +"<ul><li>Html Tutorial</li><li>Mongodb Tutorial</li><li>Python Tutorial</li></ul><div id='liitem'></div> "+
  "<a href='https://www.w3schools.com/html/default.asp'>Html Tutorial</a>"+
  "<button id='btn1'>Animate height & width</button>"+
   "<div id='box' style='background:#B45F04;height:100px;width:100px;margin:6px;'></div>"
   +"<div><p>This is original paragraph. </p><p>Click me to see it fade.</p></div>"+
   "<button>Click to hide the following paragraphs</button>"+
   "<p>jQuery</p>"+"<p>jQuery Exercises</p>"
   +"<button id='enable'>(Enable) jQuery.fx.off = false)</button>"  
   +"<button id='disable'>(Disable) jQuery.fx.off = true)</button><br><br><button id='toggle'>Toggle animation</button>"
   +"<div style='background:#98bf21;height:100px;width:100px;margin:50px;'></div>"
   ).appendTo( "body" );
  
  $("body").css("background-color","red");

   $("div h1").css("background-color","yellow");
   
   $("form input").hide();
  var listItems = $( 'li' );
  var rawListItem = listItems[1]; // or listItems.get(0)
  var html = rawListItem.innerHTML;
  console.log(html);
  $( 'li' ).each(function( index, elem ) {
   $( elem ).prepend( '' + index + ': ' );
   $("a").attr("href", "https://www.w3schools.com/jquery/");

  $("a").text("Jquery Tuttorial");

  $( "#btn1" ).click(function() {
   $( "#box" ).animate({
    width: "300px",
    height: "300px", 
     }, 1500 );
 });
 $( "p" ).click(function() {
   $( this ).fadeTo( "slow", 0.40 );
 });
 $( "button" ).click(function() {
   $( "p" ).hide(3000);
 });

 $("#enable").click(function(){
   jQuery.fx.off = false;
}); 

$("#disable").click(function(){
   jQuery.fx.off = true;
});

$("#toggle").click(function(){
   $("div").toggle("slow");
});
});


})