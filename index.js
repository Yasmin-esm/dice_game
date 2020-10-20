



var side_alt=["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];
function throwdice(){
	 //create a random integer between 1 and 6
	 var rand1=Math.floor(Math.random() * 6) + 1;
	 var rand2=Math.floor(Math.random() * 6) + 1;
	 var rand3=Math.round(Math.random()*5) + 1;
	 var rand4=Math.round(Math.random()*5) + 1;

	 // Set Image src
	 document.getElementById("mydice1").src="images/d" + rand1 + ".png";
	 document.getElementById("mydice2").src="images/d" + rand2 + ".png";
	 document.getElementById("hisdice1").src="images/e" + rand3 + ".png";
	 document.getElementById("hisdice2").src="images/e" + rand4 + ".png";

	 // Set Image alt
	 document.getElementById("mydice1").alt=side_alt[rand1];
	 document.getElementById("mydice2").alt=side_alt[rand2];
	 document.getElementById("hisdice1").alt=side_alt[rand3];
	 document.getElementById("hisdice2").alt=side_alt[rand4];

//var image1 = document.querySelectorAll("img")[0];
//image1.setAttribute("src", randomImageSource);


//document.querySelector(".img1").setAttribute("src",
                 //   "dice" + randomNumber1 + ".png");

	 who_won(rand1,rand2,rand3,rand4);
}

// Set appropriate gif: winner, looser, || tie
function who_won(rand1,rand2,rand3,rand4){
	  player_points=rand1 + rand2 ; // player's points
	  enemy_points=rand3 + rand4 ; // enemy's points
	  giffy=winner(player_points,enemy_points);


}

function winner(player, enemy){
	 if (player < enemy){// if player looses
 document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
 var audio=new Audio('audio1.mp3');
 audio.play();
	}
	 if (enemy < player){// if player wins
document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
var sound=new Audio('Mouse-Click.mp3');
sound.play();
 }
	 if (player==enemy){// if tie
		 document.querySelector("h1").innerHTML = "You are equall";
	}
}
