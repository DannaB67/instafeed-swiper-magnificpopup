$(document).ready(function($) {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'USEID',
        limit: 100,
        resolution: 'standard_resolution',
        accessToken: 'ACCESS_TOKEN',
        sortBy: 'most-recent',
		resolution: 'standard_resolution',
        filter: function(image) {
            if (image.type == 'image') {
                image.template = '<img src="' + image.images.standard_resolution.url + '" />';
            } else {
                image.template = '<video width="100%" controls loop><source src="' + image.videos.standard_resolution.url + '" type="video/mp4"/></video>';
            }
            return true;
        },
        template: '<div class="swiper-slide instaimg popup-gallery"><a href="{{image}}" title="{{caption}}" target="_blank" id="{{id}}"><span class="overlay-insta"><span class="overlay-txt"><i class="fa fa-heart-o fa-lg-insta"></i><span class="overlay-txt-lg">{{likes}}</span><br><br>@{{model.user.username}}</span></span><img src="{{image}}" alt="{{caption}}" class=""/></a></div>',
		
		
		after: function () {

				var swiper5 = new Swiper('.swiper5', {
					  autoHeight: true,
					  spaceBetween: 0,
					  //pagination: {
							//el: '.swiper-pagination',
							//clickable: true,
						//},
					  loop: true,
					  speed:2000,
					  autoplay: {
								delay: 3000,
							  },
					  // Default parameters
					  slidesPerView: 3,
					  spaceBetween: 10,
					  breakpoints: {
						1024: {
						  slidesPerView: 3,
						  spaceBetween: 5,
						},
						768: {
						  slidesPerView: 2,
						  spaceBetween: 5,
						},
						480: {
						  slidesPerView: 2,
						  spaceBetween: 5,
						},
						320: {
						  slidesPerView: 2,
						  spaceBetween: 5,
						}
					  }
					});
			}
    });


    userFeed.run();

}); 
$(document).ready(function ($) {
	// This will create a single gallery from all elements that have class "gallery-item"
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return  '<br>'+'<a href="https://www.instagram.com/Hewlettjewelers/" target="_blank"><i class="fa fa-instagram fa-lg-insta"></i> <span class="follow">Follow Us</span></a>'+'<br><br>' + item.el.attr('title');
			}
		}
	});
}); 


/*$(document).ready(function ($) {
	
	//const markup = '<div class="mfp-iframe-container"><div class="mfp-close"></div>'+
				   //'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				   //'</div>';
	
	// This will create a single gallery from all elements that have class "gallery-item"
    $(document).ready(function ($) {
	// This will create a single gallery from all elements that have class "gallery-item"
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return  '<br>'+'<a href="https://www.instagram.com/Hewlettjewelers/" target="_blank"><i class="fa fa-instagram fa-lg-insta"></i> <span class="follow">Follow Us</span></a>'+'<br><br>' + item.el.attr('title');
			}
		},
	
	    callbacks: {
			elementParse: function(item) {
			  console.log(item.el[0].className);
			  if(item.el[0].className == 'video') {
				item.type = 'iframe',
				item.iframe = {
				   patterns: {
					 instagram: {
						index: 'instagram.com',
						id: url => {
						  const m = url.match(/(?:https?:\/\/(?:www\.)?)?instagram\.com\/p\/(\w+)/);
						  if (!m || !m[1]) {
							return null;
						  }

						  return m[1];
						  },
						src: '//instagram.com/p/%id%/embed/',
					 }
				   }
				}
			  } else {
				 item.type = 'image',
				 item.tLoading = 'Loading image #%curr%...',
				 item.mainClass = 'mfp-img-mobile',
				 item.image = {
				   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				   titleSrc: function(item) {
				   return  '<br>' + '<a href="https://www.instagram.com/Hewlettjewelers/" target="_blank"><i class="fa fa-instagram fa-lg-insta"></i> <span class="follow">Follow Us</span></a>'+'<br><br>' + item.el.attr('title');
				 }
			  }

    }
  }
});
}); */
