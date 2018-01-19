var wins1 = 0;
var losses1 = 0;
var ties1 = 0;
var wins = 0;
var losses = 0;
var ties = 0;
var userGuess ="";
var computerGuess; 
  var key1 = 1;



$(".choice").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();
		// Get inputs
    $(".choice, .top_image1").hide();
		new Audio('assets/images/blop.mp3').play()


       userGuess = $(this).attr('value');

       database.ref('players/name/player1').push({
        userGuess: userGuess,
        //wins: wins,
        //losses: losses,
        //ties: ties,
        //computerGuess: computerGuess
  }); 

//-----------------------------------------------------------------///////
        database.ref('players/name/player2').orderByChild("computerGuess").limitToLast(1).on("child_added", function(childSnapshot) {
      // full list of items to the well
      var computerGuess = childSnapshot.val().computerGuess;
     // $("#user").append(userGuess);
   		console.log(computerGuess);
   		console.log(userGuess);
   				//__________________________________///////
   		//here is the gameplay syntax it determines if you win lose or tied
		
   		if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if ((userGuess === "r") && (computerGuess === "s")) {
          wins1++;
          $(".choice, .top_image1").show();
          database.ref('players/name/player2').remove();
          $(".totalwin1").text(wins1)
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses1++;
         $(".choice, .top_image1").show();
          $(".totallose1").text(losses1)
          database.ref('players/name/player2').remove();
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses1++;
          $(".choice, .top_image1").show();
          $(".totallose1").text(losses1)
          database.ref('players/name/player2').remove();
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins1++;
          $(".choice, .top_image1").show();
          $(".totalwin1").text(wins1)
          database.ref('players/name/player2').remove();
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins1++;
          $(".choice, .top_image1").show();
          $(".totalwin1").text(wins1)
          database.ref('players/name/player2').remove();
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses1++;
          $(".choice, .top_image1").show();
          $(".totallose1").text(losses1)
          database.ref('players/name/player2').remove();
        } else if (computerGuess === userGuess) {
        	console.log("hey");
          ties1++;
          $(".choice, .top_image1").show();
          $(" .totaltie1").text(ties1)
          database.ref('players/name/player2').remove();
        }}

        if (wins1 == 5){
        	//database.ref().remove();
        	//location.reload();
        
        	console.log("hey");
        	new Audio('assets/images/squish.mp3').play()
        	$("#exampleModal").show();
        	$(".result1").text("YOU WIN!!!!!!");
        	$(".result2").text("YOU LOSE!!!!!!");
        	
        	}


     
// Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
});
   //-------------------------------------------------------------------//
   //-----------------------------------------------------------------//
        $(".choice2").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();
      $(".choice2, .top_image2").hide();
      new Audio('assets/images/blop.mp3').play()
		// Get inputs
		computerGuess = $(this).attr('value');
       database.ref('players/name/player2').push({
        computerGuess: computerGuess,
        //wins: wins,
        //losses: losses,
        //ties: ties,
        //computerGuess: computerGuess
  });

        database.ref('players/name/player1').orderByChild("userGuess").limitToLast(1).on("child_added", function(childSnapshot) {
      // full list of items to the well
      
      
      var userGuess = childSnapshot.val().userGuess;
   		console.log(userGuess);
   		console.log(computerGuess)

   		//__________________________________///////
   		//here is the gameplay syntax it determines if you win lose or tied

   		if ((computerGuess === "r") || (computerGuess === "p") || (computerGuess === "s")) {
        if ((userGuess === "s") && (computerGuess === "r")) {
          wins++;
          $(".choice2, .top_image2").show();
            $(".totalwin").text(wins)
          database.ref('players/name/player1').remove();
          
         
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          losses++;
          $(".totallose").text(losses)
          database.ref('players/name/player1').remove();
          $(".choice2, .top_image2").show();
        } else if ((userGuess === "r") && (computerGuess === "s")) {
          losses++;
          $(".totallose").text(losses)
          database.ref('players/name/player1').remove();
          $(".choice2, .top_image2").show();
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          wins++;
          $(".totalwin").text(wins)
          database.ref('players/name/player1').remove();
          $(".choice2, .top_image2").show();
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          wins++;
          $(".totalwin").text(wins)
          database.ref('players/name/player1').remove();
           $(".choice2, .top_image2").show();
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          losses++;
          $(".totallose").text(losses)
          database.ref('players/name/player1').remove();
           $(".choice2, .top_image2").show();
        } else if (userGuess === computerGuess) {
        	console.log("hey");
          ties++;
          $(".totaltie").text(ties)
           $(".choice2, .top_image2").show();
          database.ref('players/name/player1').remove();
          

        }}

        if (wins == 5){
        	//database.ref().remove();
        	//location.reload();
        
        	console.log("hey");
        	new Audio('assets/images/squish.mp3').play()
        	$("#exampleModal").show();
        	$(".result1").text("YOU LOSE!!!!!!");
        	$(".result2").text("YOU WIN!!!!!!");
        	
        	}
	// Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
     
     }); //database.ref().remove();
      //computerGuess = ;
 $('.closer').on('click', function () {
 $("#exampleModal").hide();
 database.ref().remove();
      location.reload();


});
