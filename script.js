$(document).ready(function(){
				$(window).scroll(function(){
					if(this.scrollY>20){  //pirosra vált a menusor ha lefelé görgetek*/
						$('.navbar').addClass('sticky');
					}else{
						$('.navbar').removeClass('sticky');
					}
					
				})
				
				
				//toggle menu
				$('.menu-btn').click(function(){
					$('.navbar .menu').toggleClass('active');
					$('.menu-btn i').toggleClass('active');
				});
				
				//owl carousel
				$('.carousel').owlCarousel({
					margin: 20,
					loop: true,
					autoplayTimeOut: 2000,
					autoplayHoverPause: true,
					responsive: {
						0:{
							items: 1,
							nav: false
						},
						600:{
							items: 2,
							nav: false
						},
						1000:{
							items: 3,
							nav: false
						}
					
					
					}
				});
				
				
			});	

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
