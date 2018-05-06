function init_topButtons() {

	//$(".topButton")
	//document.getElementById("team").style.display = "none";
	$("#home").hover(function() {hoverTopHome();}, function() {letGoHome();});
	$("#team").hover(function() {hoverTopTeam();}, function() {letGoTeam();});
}

function hoverTopHome() {
	slideInRedHome();
}

function letGoHome() {
	$(".randomRedBar").remove();
}

function hoverTopTeam() {
	//$(this).css({'display', 'none'});
	slideInRedTeam();
}

function letGoTeam() {
	$("#team").css({ opacity: 1.0});
}

function slideInRedHome() {
	var home = $("#home");
	var bottomX = home.height() + home.offset().top;



	document.getElementById("meetUs").innerHTML = bottomX;

	var iDiv = document.createElement('div');
	iDiv.className = 'randomRedBar';
	iDiv.style.top = bottomX + 'px';
	document.getElementById("header").appendChild(iDiv);

	$(iDiv).animate({width: "60px", opacity: 1.0}, "slow");

}

function slideInRedTeam() {
	var team = $("#team");
	var bottomX = team.height() + team.offset().top;
	///var leftness = 


	document.getElementById("meetUs").innerHTML = bottomX;

	var iDiv = document.createElement('div');
	iDiv.className = 'randomRedBar';
	iDiv.style.top = bottomX + 'px';
	iDiv.style.top = 
	document.getElementById("header").appendChild(iDiv);

	$(iDiv).animate({width: "60px", opacity: 1.0}, "slow");

}
