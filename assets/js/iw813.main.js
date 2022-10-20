function reportCopyrightCloudEnfringement() {};

function initFilters() {         

        return ; // PR305
    
        $(".filterBtn").click(function() {

            var value = $(this).attr('data-filter');                
            console.log(`************* CLICK =  ${value} *************************`);			

            if(value == "all")
            {                    
                $('.filter').show('1000').find(".service-item-box").show('1000');
            }
            else
            {                    
                $(".filter").not('.'+value).hide('3000').find(".service-item-box").hide('1000');
                $('.filter').filter('.'+value).show('1000').find(".service-item-box").show('3000');
            }            

            if ($(".filterBtn").removeClass("btnSelected")) { $(this).removeClass("btnSelected"); }
            $(this).addClass("btnSelected");            

        }); //click()
                        
        //getParameterByName
        var filterBy  = getParameterByName('filter');            
        //console.log(`******************************************* ${filterBy} *******************************************`);			

        if (false && filterBy && filterBy.match(/(water|wet)/gi)) 
            $(".filterBtn[data-filter='filterWet']").click();

        else if (false && filterBy && filterBy.match(/dry/gi)) 
            $(".filterBtn[data-filter='filterDry']").click();

        else $(".filterBtn[data-filter='all']").click();

        //$(".filterBtn[data-filter='all']").addClass("btnSelected");
            
}; //initFilters

//// $('html, body').animate({  scrollTop: $(hash).offset().top-78}, 800, function() { window.location.hash = hash; });	 

function pageLangIsEnglish() {
    var pageIsEnglish = (typeof pageSettings.langIsEspanish !== undefined && !pageSettings.langIsEspanish);    
    
    //console.log(typeof pageSettings.langIsEspanish);        
    //console.log(pageIsEnglish) ;       
    
    return pageIsEnglish;
}

function redirectToBookApptThankYouPage(custName,serviceDetail) { 		    
	const convService = pageSettings.gaConvAG.replace(/[-~\s]/gi, '') || 'none';	
	var urlBookApptPath =  (pageLangIsEnglish()) ? 'service-free-estimate-request-done.html' : 'service-free-estimate-request-done-es.html';
    urlBookApptPath += '?quote='+convService+'&from='+custName+'&service='+serviceDetail;	
	window.location = window.location.hash+urlBookApptPath;	
	return false;	
}

$(window).on('load', function () {    
    console.log('on.load...') ;        
    //console.log('Preloader...')        
    //$('.preloader').fadeOut();    
}); // on.load


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function initImpactWindows() {		                    
        
        console.log('initImpactWindows()...') ;
                
		//var hash = $('#secContactUs');
		//$('html, body').animate({  scrollTop: $(hash).offset().top-60}, 800, function() { window.location.hash = hash; });	         

		if (typeof pageInit === 'function') {
			console.log(`${pageSettings.client}.Core.Init()`);
            
            pageSettings.isLoaded = true;
			pageInit();	                       
                        
			//if (!(window.location+'').match(/bookappt/gi)) redirectToBookApptThankYouPage('John-Sample-Test','SampleTest');
			reportCopyrightCloudEnfringement();
			console.log(`${pageSettings.client}.Page.Service [ ${pageSettings.service} ] - Loaded()`);			
		}
            
        // Switch Page Language    
        var hasLanguageUrl = ((typeof pageSettings.langSwitchUrl !== undefined) && (pageSettings.langSwitchUrl.length > 0));   
        if (false && hasLanguageUrl) {
            var langUrl = window.location.hash + pageSettings.langSwitchUrl + '?lang=change';                        
            $(".setLang").each(function() {                
                    var value = $(this).attr('href');                    
                    if (value.length > 0) {                        
                         $(this).attr('href', value.replace('#',langUrl));                        
                    }
            });            
        }
        
    
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $formBookAppt = $("#bookApptForm");    
        if (typeof initBookFreeEstimateForm  === 'function') { initBookFreeEstimateForm(); }
        $('[data-toggle="tooltip"]').tooltip()
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             
        
        // WOW JS
        if ($(".wow").length) {  }        
        var wow = new WOW({
            boxClass:     'wow',      // Animated element css class (default is wow)
            animateClass: 'animated', // Animation css class (default is animated)
            offset:       20,         // Distance to the element when triggering the animation (default is 0)
            mobile:       true,       // Trigger animations on mobile devices (default is true)
            live:         true,       // Act on asynchronously loaded content (default is true)
          });
        //console.log('WOW = ' + $(".wow").length);
        wow.init();
        
                
        
		$(window).on('scroll',function() {
            // Header Sticky
            var scrolled = $(window).scrollTop();            
            if (scrolled > 120) {  
                $('.navbar-area').addClass("is-sticky");
            }
            else {
                $('.navbar-area').removeClass("is-sticky");
            }
            
            if (scrolled > 600) { $('.go-top').addClass('active'); }
            if (scrolled < 600) { $('.go-top').removeClass('active'); }               
        });  
        
        //TODO: WHO IS THIS?
        $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
        });       
              
    
        
        if (true) {
            
            $('.home-slides').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                autoplayTimeout: 7000,                  
                autoplayHoverPause: true,
                autoplay: true,
                startPosition: 0,                
                items: 1,
                animateOut: 'fadeOut',
                navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next-1'></i>"]
            });
            //var homeSlide = $(".home-slides").data('owlCarousel');
            //homeSlide.jumpTo(3);
            

            $(".home-slides").on("translate.owl.carousel", function(){                
                
                var removeClasses = "animated flipInX flipInY fadeInLeft fadeInUp bounceInLeft delayp1 delayp2 delayp3 delayp6 delay1s delay2s delay3s";
                $(".main-banner-content .btn-box .btn").removeClass(removeClasses).css("opacity", "0");                     
                $(".main-banner-content .btn-box .video-btn").removeClass(removeClasses).css("opacity", "0");  
                
                $(".main-banner-content .sub-title").removeClass(removeClasses).css("opacity", "0");                  
                $(".main-banner-content h1").removeClass(removeClasses).css("opacity", "0");                     
                $(".main-banner-content h2").removeClass(removeClasses).css("opacity", "0");          
                $(".main-banner-content p").removeClass(removeClasses).css("opacity", "0");                  
                
            });

            $(".home-slides").on("translated.owl.carousel", function(){                                
                $(".main-banner-content .sub-title").addClass("animated fadeInLeft").css("opacity", "1");
                $(".main-banner-content h1").addClass("animated fadeInLeft delayp1").css("opacity", "1");                
                $(".main-banner-content h2").addClass("animated fadeInLeft delayp2").css("opacity", "1");                
                
                $(".main-banner-content p").addClass("animated fadeInUp delayp1s").css("opacity", "1");
                
                $(".main-banner-content .btn-box .btn").addClass("animated flipInX delay2s").css("opacity", "1");
                $(".main-banner-content .btn-box .video-btn").addClass("animated flipInX delay2s").css("opacity", "1");
            });            
            
        }
        
        // Popup Video
        if (false) {
            $('.popup-youtube').magnificPopup({
                showCloseBtn: true,
                disableOn: 320,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
                
            
        
        // Mean-Menu
        var firstTimeClick = true;
		jQuery('.mean-menu').meanmenu({ meanScreenWidth: "991" });
        
        //$('.mean-expand').click();         
        $('.meanmenu-reveal-no-now').on('click', function(e) {
            console.log('Menu.FirstTime = '+firstTimeClick);
            
            if (firstTimeClick) {
                //mean-expand mean-clicked
                //$('#mnDeals a.mean-expand').click();                 
                $('#mnDeals ul.dropdown-menu').delay(1000).slideDown(1000);                
                firstTimeClick = false;                              
            }            
        }); // onClick      
        
        // Sidebar Modal
        $(".burger-menu").on('click',  function() { 
            
            $('.sidebar-modal').toggleClass('active'); 
            //$('.imgUs').removeClass('img-fluid'); 
            //$('.imgUs').toggleClass('wow flipInX');  
            
        });
        $(".sidebar-modal-close-btn").on('click',  function() {  
            $('.sidebar-modal').removeClass('active');             
            //$('.imgUs').removeClass('wow flipInX');  
        });
        
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
        });
        	
        
        // Services Details Image
		$('.caro-services-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            items: 1,
            animateOut: 'fadeOut',
            navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next-1'></i>"]
        });
        
        
		// Why Choose Us Image Slides
		$('.why-choose-us-slides').owlCarousel({
            smartSpeed: 950,
            autoplay: 200,        
            autoplayTimeout: 3000,  
            autoplayHoverPause: true, // Stops autoplay            
			loop: true,			
			nav: true,
			dots: true,			            
            items: 1,
            animateOut: 'fadeOut',
            navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next-1'></i>"]
        });
        
        
        // secTrustedArea		
    
        //$("#secTrustedArea").find('.owl-carousel').owlCarousel({
        $('.trusted-slides').owlCarousel({
            smartSpeed: 950,
            autoplay: 200,        
            autoplayTimeout: 1000,  
            autoplayHoverPause: true, // Stops autoplay            
			loop: true,
			nav: false,
			dots: false,		            
            margin: 10,
            navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next-1'></i>"],
			responsive: {
                0: { items: 2, },
                576: { items: 2,},
                768: { items: 4, },
                1200: { items: 5, }
            }            
        });		        
        
        $('.accordion').find('.accordion-title').on('click', function(){
            //TODO: CHECK THIS WITH BS4
            
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');		
        });
        
    
    $('.lazyWinGallery').Lazy({     
                imageBase: "assets/img/owl-gallery-windows/",
                scrollDirection: 'vertical',
                effect: "fadeIn",
                effectTime: 4000,
                threshold: 0,            
                visibleOnly: true,
                onError: function(element) { console.log('error loading ' + element.data('src')); }
         });
    
       
        // TwentyTwenty JS
        //$(function(){ $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});        });
        	

        function doModal(title, bodylines, btnText) {
            var bodyText = bodylines.join("<br>");               
            //style="height: 400px;"
            $('#modalTitle').text(title);        
            $("#modalContent").html( bodyText );
            //$("#divModalContent").text( bodyText );                
            $('#btnModalAction').text(btnText);               
            //$('#modalInfo').modal();			
  
            var modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'), {keyboard: true});
            modalInfo.show()
            
        }
    

        $('#footerShowTerms').on('click', function(e) {        
                var spContent = ["Loading...","","","",""];
                doModal('Terms & Condition', spContent,"Close");
                e.preventDefault();            
            });

        $('#footerShowPrivacy').on('click', function(e) {
                //<li><a id="footerShowPrivacy" href="#">Privacy Policy</a></li>
                var spContent = ["Loading...","","","",""];
                doModal('Privacy Policy', spContent,"Close");
                e.preventDefault();            
            });
                  
  

        if ($(window).width() < 797) {
                //$('.header-contact-info i .fas .fa-clock').remove();			
                //$('ul.header-contact-info li .fa-clock').remove();			
        }		


        var $mailTo = $('a[href^="mailto:"]');
        $mailTo.each(function () {
                // <p><a href="mailto:info@none.com">info@none.com</a></p>            
                var $elem = $(this);
                var elemMailToHref = $elem.attr("href");

                var newMailToHref = elemMailToHref.replace('@none.com','@LauriesWeldingGroup.com');            
                var newMailToText = newMailToHref.replace('mailto:','');

                $elem.attr("href", newMailToHref); 
                $elem.text(newMailToText);              
        });
        
       $('#imgLogoFooter').click(function (e) {            
                $("html, body").animate({ scrollTop: "0" },  500);
                    e.preventDefault();
                    e.stopPropagation();            
                    return false;            
       });  

        //$('#eventdatepicker').datepicker();          
                
        if (typeof onPageLoaded === 'function') { 
            onPageLoaded(); 
            console.log('onPageLoaded()... ' + pageSettings.service + ' ... DONE!');            
        }                        
        if (typeof initServiceList === 'function') { initServiceList(); }    
        if (typeof initFilters === 'function') { initFilters(); }
           
        if (false) {
            
            $("a[rel^='prettyPhoto']").prettyPhoto({
                        theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
                        show_title: false, /* true/false */
                        // custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
                        animation_speed: 'fast', /* fast/slow/normal */
                        allow_resize: true, 
                        callback: function(){}, /* Called when prettyPhoto is closed */	           
                        social_tools: ''
               });
        }
    
        // Nice Select JS
        $('select').niceSelect();
        
        var pswpElement = document.querySelectorAll('.pswp')[0];
    
        if (false) {
                // build items array
                var items = [
                    { src: '/assets/img/owl-WhyUs/iw305-owl-wu-10.jpg', w: 600, h: 600},
                    { src: '/assets/img/owl-WhyUs/iw305-owl-wu-20.jpg', w: 600, h: 600 },
                    { src: '/assets/img/owl-WhyUs/iw305-owl-wu-30.jpg', w: 600, h: 600, title: '...'  },
                    { src: '/assets/img/owl-WhyUs/iw305-owl-wu-40.jpg', w: 600, h: 600 },
                    { src: '/assets/img/owl-WhyUs/iw305-owl-wu-50.jpg', w: 600, h: 600 },
                    { src: '/assets/img/owl-WhyUs/iw305-owl-wu-60.jpg', w: 600, h: 600 }            
                ];

                // define options (if needed)
                var options = {
                    // optionName: 'option value'
                    // for example:
                    index: 0 // start at first slide
                };
                
                $('#footerSiteMap').on('click', function(e) {                        
                        e.preventDefault();    
                        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                        gallery.init();
                });
        }  
        
} // initImpactWindows(0)