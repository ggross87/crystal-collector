	window.onload = function() {
  $("#button-a").on("click", total.count);
  $("#button-b").on("click", total.count);
  $("#button-c").on("click", total.count);
  $("#button-d").on("click", total.count);
};
	
	//var num = 0;
	var randomNumArray = Math.floor((Math.random() * 100 +1) + 19);
	var userNumArray = Math.floor((Math.random() * 12) + 1);

	

	var win = 0;
	var lose = 0;
	
	

	function randomNumber (){
		
		var random= Math.floor((Math.random()* 12) +1);

		$("#bottom").html("<h1>Total score " + random);

		
	}
		
	
	document.getElementById("top-num").innerHTML = "Match This Number to Win: " + randomNumArray;
	

	document.onkeyup = function(event) {

	function play(){
    document.getElementById('flex-container').style.display = "block";

}

     //function randomNumber {
     	//var 
    // }


};


	