$(document).ready(function(){
/****************************
*****************************

Main slider

*****************************
****************************/

$(".slogancontainer").carouFredSel({
	responsive:true,
	height: 220,
	width: "62%",
	circular: true,
	infinite: true,
	scroll: {
		fx : "fade"
	},
	
	items: {
		visible: 1,
		start: "random",
		height: 220
	},
	
	auto: 3000,
	next: {
		button: "#next",
		key: "right"
	}
});

/*** mobile menu **/

$('.openmenu').click(function() {
	   $(this).toggleClass("open");
	   $('nav.main ul').toggleClass("open");

});










// nõlvad ************************/
/** nolvad kirjeldus **/

$('.nolv').click(function() {
	   $(this).toggleClass("show");

	});

$('.nolv').mouseleave(function() {
	   $(this).removeClass("show");

	});


//fancybox
$("a.video").click(function() {

    $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'     : 680,
            'height'        : 495,
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
                 'wmode'        : 'transparent',
                'allowfullscreen'   : 'true'
            }
        });

    return false;
});







$("a.fancybox").fancybox();


$("#galerii").tabs(	{ 
fx: { opacity: 'toggle' },
	select: function(event, ui) {
		jQuery(this).css('height', jQuery(this).height());
		jQuery(this).css('overflow', 'hidden');
	},
	show: function(event, ui) {
		jQuery(this).css('height', 'auto');
		jQuery(this).css('overflow', 'visible');
	},
}
); 


	



}); /* <--- ready function end*/