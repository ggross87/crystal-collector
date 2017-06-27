
	
	//var num = 0;
	var randomNumArray = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
	var userNumArray = [1,2,3,4,5,6,7,8,9,10,11,12];
	var rand = randomNumArray[Math.floor(Math.random()* randomNumArray.length)];
	
	
	var win = 0;
	var lose = 0;
	
	
randomNumber (){
	$(userNumArray)
}
	
	for (var i=0; i < userNumArray.length; i++){
		var	numBtn = $("#bottom");
		numBtn.attr("bottom", userNumArray[i]);
		numBtn.text("Total Score: " + userNumArray[i]);
		$("button").append(numBtn);
	}
	
	document.getElementById("top-num").innerHTML = "Match This Number to Win: " + rand;
	

	document.onkeyup = function(event) {

	function play(){
    document.getElementById('flex-container').style.display = "block";

}

     //function randomNumber {
     	//var 
    // }


};


	