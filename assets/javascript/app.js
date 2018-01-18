
$(".top_image1 ,.top_image2 , .choice2 , .choice").hide();

function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);
//$('.form').hide();

   var config = {
    apiKey: "AIzaSyC2DZjWu4XlEXQ9OYs5CjaArRF_7vPp7CY",
    authDomain: "rpsgame-d268f.firebaseapp.com",
    databaseURL: "https://rpsgame-d268f.firebaseio.com",
    projectId: "rpsgame-d268f",
    storageBucket: "",
    messagingSenderId: "656169863266"
  };
  firebase.initializeApp(config);
   var database = firebase.database();
   var player1 = "";
    var player2 = "";
   var key = 0;
    var x = 1;
    var name = "";
    var name2 = "";

   //recieve and inputs player 1 into firebase database
$("#button").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();
 // Get inputs
      name = $("#namer").val().trim();
      $("#user").text(name);
      $(".top_image1 , .choice").show();
      $(".form").hide();
        key++;
       
         
      if (key === 3){
         	 database.ref().remove();
         	}
         	else{
 		// Change what is saved in firebase
   
      database.ref('players/name').push ({
				
				player1: name,
				key: key,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			}) 
		
      
      
      }});
   //recieve and inputs player 2 into firebase database

$("#button2").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();
 // Get inputs
      name2 = $("#namer2").val().trim();
      $("#user2").text(name);
      $(".top_image2 , .choice2 ").show();
      $(".form2").hide();
        key++;
       
         
      if (key === 3){
         	 database.ref().remove();
         	}
         	else{
 		// Change what is saved in firebase
   
      database.ref('players/name').push ({
				
				player2: name2,
				key: key,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			}) 
		
      
      
      }});





      
    
//display player 1
     database.ref('players/name').on("child_added", function(childSnapshot) {
      // full list of items to the well
      $("#user").text(childSnapshot.val().player1);
      player1 = childSnapshot.val().player1;
      key = childSnapshot.val().key;
      if(player1){
      	 $(".form").hide();

      }
       
      
      console.log(key);


    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

     //display player 2
     database.ref('players/name').on("child_added", function(childSnapshot) {
      // full list of items to the well
      $("#user2").text(childSnapshot.val().player2);
       player2 = childSnapshot.val().player2;
     
      key = childSnapshot.val().key;
      if(player2){
      	 $(".form2").hide();

      }
       
    
      console.log(key);
      console.log(player2);


    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

//display opponent info
      /*  database.ref('players/jig'+ x ).orderByChild("player").limitToLast(1).on("child_added", function(childSnapshot) {
      // full list of items to the well
      $("#user2").text(childSnapshot.val().name);
     
       
      console.log(player);
      console.log(key);


    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });*/
     //database.ref().remove();

     