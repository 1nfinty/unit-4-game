$(document).ready(function() {
    //When page is loaded, random number will generate, selector applies value to html class
	var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
        $(".randomNumber").html(compPick); 
        
    //var defined/assigned to random generated number, selector applies value to html image
	var gemOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + gemOne); // logs value of gem value
		$("#img1").html("<img src=" + "assets/images/3-Star_Crystal.png" + " value=" + gemOne + ">"); 

	var gemTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/Crystal_cosmic.png" + " value=" + gemTwo + ">"); 

	var gemThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/Crystal_generic5.png" + " value=" + gemThree + ">");
	
	var gemFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/LightsaberCrystal-SWE.png" + " value=" + gemFour + ">");
    
        // set variables to start at 0	
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
        console.log("score: " + score); 
        
        // generates new values for random number and images
	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0;   //sets score back to 0
		$(".scoreDisplay").html(score); 

		gemOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/3-Star_Crystal.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/Crystal_cosmic.png" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/Crystal_generic5.png" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/LightsaberCrystal-SWE.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {  //creates newScore to score 0 by adding value of image clicked
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) {  ///if number matched, add to win and reset
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			} 
			else if(newScore > compPick) {  // else add to losses and reset
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 				
			}
		}); 

	}
        // at start when image is clicked, value is added to score and displays newScore value in html
	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) {  
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 
		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}
	}); 
}); 