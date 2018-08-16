$(document).ready(function(){
	// Activate the main slider	
	var main_slider = $("#mainSlider");
if (main_slider.length){
main_slider.jCarouselLite({
btnNext: "#sliderBtnNext",
btnPrev: "#sliderBtnPrev",
visible: 1
});
}
// jQuery image change on hover
	$("div#breadcrumbsContainer ul li p a img, a.breadcrumbs img, img.ribbon, .section2 img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "Over.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("Over", "");
            $(this).attr("src", src);
        });

// menu
$(document).ready(function(){  
  
    $("ul.subnav").parent().append("<span></span>"); //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)  
  
    $("ul.topnav li span").click(function() { //When trigger is clicked...  
  
        //Following events are applied to the subnav itself (moving subnav up and down)  
        $(this).parent().find("ul.subnav").slideDown('fast').show(); //Drop down the subnav on click  
  
        $(this).parent().hover(function() {  
        }, function(){  
            $(this).parent().find("ul.subnav").slideUp('slow'); //When the mouse hovers out of the subnav, move it back up  
        });  
  
        //Following events are applied to the trigger (Hover events for the trigger)  
        }).hover(function() {  
            $(this).addClass("subhover"); //On hover over, add class "subhover"  
        }, function(){  //On Hover Out  
            $(this).removeClass("subhover"); //On hover out, remove class "subhover"  
    });  
  
});
// Activate tabs
$(document).ready(function(){
$('#tabs div').hide();
$('#tabs div:first').show();
$('#tabs ul li:first').addClass('active');
$('#tabs ul li a').click(function(){ 
$('#tabs ul li').removeClass('active');
$(this).parent().addClass('active'); 
var currentTab = $(this).attr('href'); 
$('#tabs div').hide();
$(currentTab).show();
return false;
});
});

// Activate the togglebox on hover	
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide();
//slide up and down when hover over heading 2
$("h3").hover(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).next(".togglebox").slideToggle("slow");
return true;
});
});

// Activate the togglebox on click
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox1").hide();
//slide up and down when click over heading 2
$("h2").click(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).next(".togglebox1").slideToggle("slow");
return true;
});
});
// Activate the toggle-content on click
$('.toggle-content').hide();
    $('.toggle-title').click(function(){
        $(this).next().slideToggle(300);
        $(this).children('span.open-toggle').toggleClass('closed');
        $(this).attr('title', ($(this).attr('title') == 'Close') ? 'Open' : 'Close');
        return false;
    });     

// Activate the contactform

$(function(){
	$('#contact_form').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var post_url = form.attr('action');
		var post_data = form.serialize();
		$('#loader', form).html('<img src="images/loader.gif" /> Please Wait...');
		$.ajax({
			type: 'POST',
			url: post_url, 
			data: post_data,
			success: function(msg) {
				$(form).fadeOut(500, function(){
					form.html(msg).fadeIn();
				});
			}
		});
	});
});
// Activate the prettyPhoto
 $(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto();
  });

	// Project gallery over --------------------------------------------- //
	
	$('div#portfolio-sidebar a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7"
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
		$('div#portfolio-sidebar1 a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
	$('div#portfolio a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
		$('div#portfolio1 a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
		$('div#portfolio2 a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
		$('div#portfolio3 a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
		$('div#article .articleBody a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.7" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
	
});
