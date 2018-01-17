function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);
//$('.form').hide();

  var config = {
    apiKey: "AIzaSyATubwxoaZEi6Dan07TLXnM_mo1Xiy9b8s",
  authDomain: "myfirst-5f0b2.firebaseapp.com",
    databaseURL: "https://myfirst-5f0b2.firebaseio.com",
   projectId: "myfirst-5f0b2",
    storageBucket: "myfirst-5f0b2.appspot.com",
    messagingSenderId: "1004039478763"
 };
  firebase.initializeApp(config);
   var database = firebase.database();
   var player = 0;
   var key = 0;
    var x = 1;
    var name = "";
   
$("#button").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();

      // Get inputs
      name = $("#namer").val().trim();
      $("#user").text(name);
      $(".form").hide();
        key++;
        player++;
         
      if (key === 3){
         	 database.ref().remove();
         	}
         	else{
         		

         // Change what is saved in firebase
      database.ref('players/name').push({
        name: name,
        player: player,
        key: key,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        
      

      })
      
      
      }});




      
    
//display your name
     database.ref('players/name').orderByChild("name").limitToLast(1).on("child_added", function(childSnapshot) {
      // full list of items to the well
      $("#user2").text(childSnapshot.val().name);
      player = childSnapshot.val().player;
      key = childSnapshot.val().key;
       
      console.log(player);
      console.log(key);


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

     