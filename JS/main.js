$(function() 
        {
        	// Variable (array) to hold days of week
	        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	        // Variable that holds value of day of week
	        var dayOfWeekIndex = (new Date()).getDay();
	      	// Variable that is CURRENT day of week 
	       	var dayOfWeek = weekdays[dayOfWeekIndex];
	        // Variable that is any other day of weeks besides today
	        var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());

	        var dayOfWeekPast;
	        // Variable that stores value of time, a number (0-24)
	        var hourOfDay = new Date().getHours();
	        // Qualitative variable that shows morn/noon/eve
	        var timeOfDay;
	        // choose day of week other than current one
	        if (dayOfWeekPastIndex == dayOfWeekIndex) 
	        {
	          dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
	        } 
	        else 
	        {
	          dayOfWeekPast = weekdays[dayOfWeekPastIndex];
	        }
	        // assign time of day to the hour
	        if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
	          timeOfDay = "morning";
	        } 
	        else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
	          timeOfDay = "afternoon";
	        } 
	        else { 
	          timeOfDay = "evening";
	        }
	        // Outputs a string inside an array
	        $(".greetingScript").typed({
	            strings: ["Greetings to you, this " + dayOfWeek + " " + timeOfDay + "." + "^2000<br> Welcome to Project Mulilo's website. ^1000<br> We provide clean cookstoves in Africa. ^1000<br> Click to find out more."],
	            typeSpeed: 30
	            // backDelay: 500,
	        });
	    });

		// Makes down arrow bounce after greeting script runs
			setTimeout(function() {
				$(".downarrow").removeClass("animated bounce")
			}, 0);
			setTimeout(function() {
				$(".downarrow").addClass("animated bounce")
			}, 15000);


	    // Changes background image from gif to jpg
		// $(function() {
		// 	var body = $("body");
		// 	var newBackgroundImage = ("url(IMG/redgradient.jpg)");
		// 	function nextBackground() 
		// 	{
		// 	  body.css("background", newBackgroundImage);
		// 	}
		// 	setTimeout(nextBackground, 23000);
		// });