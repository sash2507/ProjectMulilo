$(document).ready(function() {
	
	//Enables toggling of nav
	function toggleNav() { 			
		$("nav ul").slideToggle();
	}
	$("#menu-button").click(toggleNav);

	//Removes default styling of nav ul (display: none) at 480px and below
	function windowResized () { 
		var width = $(window).width(); 
		var menu = $("nav ul"); 
		if(width > 480 && menu.is(':hidden')) {
			menu.removeAttr('style'); 
			} 
		}

	// Slidetoggles text upon click of <h4>
		$(".learn-more").click(function() {
			$(this).next().slideToggle();
	});

	// Image Slider event handlers
		$("#slider img").eq(0).show();
		var current = 0;
		setInterval(function() {
			$("#slider img").eq(current).hide();
			current++;
			if(current >= $("#slider img").length) 
			{
				current = 0;
			}
			$("#slider img").eq(current).show();
		}, 2000);

	// Timeline event handlers
	$(".cntl").cntl({
		revealbefore: 500,
		anim_class: "cntl-animate",
		onreveal: null
	});

	// Change background color upon scroll/Hide logo upon scroll
	$(window).scroll(function() {
		($(this).scrollTop());
		    if ($(this).scrollTop() >= 2600)
		    {
		    	$(".cntl").css("background-color", "#FFF0F5");
		    }
		    else
		    {
		    	$(".cntl").css("background-color", "white");
	    }
	 });

	// Donate Button on-click event handlers
	$("#donate-button").click(function() {
		donationMessage();
		$(".donate-box").fadeIn(); 
		$(".donate-box").html(donationMessage);
	});

	// Function that calculates proportion of a randomly-selected object property to donation amount entered in input
		function donationMessage () {
			var donation = $("#donation-amount").val();
			var things = {
				//pizza = key, price = its value
				pizza: 2.50,
			    coffee: 2,
			    "weekly metrocard": 31,
			    dinner: 40,
			    "uber ride": 12,
			    "movie ticket": 15,
			    sneaker: 75,
			    "glass of wine": 12,
			    croissant: 4,
			    "annual magazine subscription": 80,
			    manicure: 20,
			};

			var cookstove = 50;
			var donation_to_cookstove = donation / cookstove;

			function pickRandomProperty(obj) {
			    var result;
			    var count = 0;
			    for (var key in things) {
			        if (Math.random() < 1 / ++count) {
			        	result = key;
			        }
			    }
			    return result;   
			}

	// Function that pluralizes the object value 
			var objKey = pickRandomProperty(things);
			var objVal = things[objKey]; 
			function checkPlural (objVal, objKey) {
				if (objVal > 1 || objVal < 1) {
					return objKey + "s";
				} else {
					return objKey;
				}
			}
			var pluralKey = checkPlural(objVal, objKey);
			var donationDividedByObjVal = (donation / objVal).toFixed(2);
			return "Your donation of $" + donation + " helps fund " + donation_to_cookstove + " clean cookstoves to a family, and is the equivalent of " + donationDividedByObjVal +  " " + pluralKey;		
		}
});