var wins = 0;
var losses = 0;
var ties = 0;
var userGuess;
var computerGuess; 
  var key1 = 1;


$(".choice").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();
		// Get inputs
       userGuess = $(this).attr('value');
       database.ref('players/name').update({
        userGuess: userGuess,
        //wins: wins,
        //losses: losses,
        //ties: ties,
        //computerGuess: computerGuess
  });
        database.ref('players/name').orderByChild("name").limitToLast(1).on("child_added", function(childSnapshot) {
      // full list of items to the well
      userGuess = childSnapshot.val().userGuess;
      $("#user2").text(userGuess);
   		console.log(userGuess);
     
// Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
     //database.ref().remove();
       //computerGuess = ;
      console.log(userGuess);

       if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }}
      });