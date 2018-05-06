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
	$(".randomRedBar").animate({width: "0px", opacity: 0.5}, 200);
}

function hoverTopTeam() {
	//$(this).css({'display', 'none'});
	slideInRedTeam();
}

function letGoTeam() {
	$(".randomRedBar").animate({width: "0px", opacity: 0.5}, 200);
}



function slideInRedHome() {
	var home = $("#home");
	var bottomX = home.height() + home.offset().top;

	var iDiv = document.createElement('div');
	iDiv.className = 'randomRedBar';
	iDiv.style.top = bottomX + 'px';
	document.getElementById("header").appendChild(iDiv);

	$(iDiv).animate({width: "60px", opacity: 1.0}, "slow");

}

function slideInRedTeam() {
	var team = $("#team");
	var bottomX = team.height() + team.offset().top;
	var leftness = team.offset().left; //$("#firstSpace").width() + $("#home").width();

	var iDiv = document.createElement('div');
	iDiv.className = 'randomRedBar';
	iDiv.style.top = bottomX + 'px';
	iDiv.style.left = leftness + 'px';
	document.getElementById("header").appendChild(iDiv);

	$(iDiv).animate({width: "60px", opacity: 1.0}, "slow");

}
