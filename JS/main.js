// Function that calculates day of week and time of day
$(function() 
        {
        	// Array of days of week
	        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	        // Index that is value of day of week
	        var dayOfWeekIndex = (new Date()).getDay();
	      	// Variable that is CURRENT day of week 
	       	var dayOfWeek = weekdays[dayOfWeekIndex];
	        // Variable that is any other (randomly-selected) day of weeks besides today
	        var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());
	        var dayOfWeekPast;
	    
	        // If randomly-selected day is equal to current day...
	        	// take the mod of (index + 1) and divide by array length and return that
	       	// else return that day 	
		        if (dayOfWeekPastIndex == dayOfWeekIndex) 
		        {
		          dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
		        } 
		        else 
		        {
		          dayOfWeekPast = weekdays[dayOfWeekPastIndex];
		        }

	        // Variable that stores value of time, a number (0-24)
	        var hourOfDay = new Date().getHours();
	        // Qualitative variable that shows morn/noon/eve
	        var timeOfDay;
		        if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
		          timeOfDay = "morning";
		        } 
		        else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
		          timeOfDay = "afternoon";
		        } 
		        else { 
		          timeOfDay = "evening";
		        }

	        // "Types" a string using variables above
	        $(".greetingScript").typed({
	            strings: ["Greetings to you, this " + dayOfWeek + " " + timeOfDay + "." + "^2000<br> Welcome to Project Mulilo's website. ^1000<br> We provide clean cookstoves in Africa. ^1000<br> Click to find out more."],
	            typeSpeed: 30
	        });
	    });

			// Makes down arrow bounce after greeting script runs
			setTimeout(function() {
				$(".downarrow").removeClass("animated bounce")
			}, 0);
			setTimeout(function() {
				$(".downarrow").addClass("animated bounce")
			}, 15000);


	   