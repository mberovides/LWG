//(function ($) {
//	"use strict"; // Start of use strict

/*==============================================================*/
// PR305-RequestQuoteForm
/*==============================================================*/	
var bookData = {};

var $selBookApptWindow;
var $selBookApptDoor;
var $selBookApptUrgency;


function hasBookApptForm() { 
    //<form id="bookApptForm" class="needs-validation" novalidate>
    return (($formBookAppt).length>0); 
}



//************** main init ************************
function addBookWindow(optID, detail) {  
    //if (!initBookApptWindows()) return;    
    
    var $hasOptAlready = ($selBookApptWindow).find('option[value="'+optID+'"]');
    if (($hasOptAlready).length>0) {
        // already here.. w
        return;
    }           
    var htmlOption  = `<option value="${optID}" data-submit="${detail}">${detail}</option>`;        
    $selBookApptWindow.append(htmlOption);            
} //addBookWindow

function addBookDoor(optID, detail) {     
    //if (!initBookApptDoors()) return;
    
    var $hasOptAlready = ($selBookApptDoor).find('option[value="'+optID+'"]');
    if (($hasOptAlready).length>0) {
        // already here.. w
        return;
    }           
    var htmlOption  = `<option value="${optID}" data-submit="${detail}">${detail}</option>`;        
    $selBookApptDoor.append(htmlOption);            
} //addBookOption


function addBookUrgency(optID, detail) { 
    return;
    
    //if (!initBookApptUrgency()) return;
    
    var $hasOptAlready = ($selBookApptUrgency).find('option[value="'+optID+'"]');
    if (($hasOptAlready).length>0) {
        // already here.. w
        return;
    }           
    var htmlOption  = `<option value="${optID}" data-submit="${detail}">${detail}</option>`;        
    $selBookApptUrgency.append(htmlOption);            
} //addBookOption



function bookWindows(opt, justUpdate) {        
        //console.log('-------------- '+opt );
        //<form id="bookApptForm"  class="needs-validation" novalidate="">
		//<form id="bookApptForm" class="needs-validation" novalidate="">
				
		if (!hasBookApptForm()) return; //var formBookAppt = $("#bookApptForm");

		//<input type="hidden" id="bookWindowsValue" name="bookWindowsValue" value="">				
		($formBookAppt).find("input[name='bookWindowsValue']").val('');		
    		
        ($formBookAppt).find('select[name="bookWindows"]').find('option').removeAttr('selected');
		($formBookAppt).find('select[name="bookWindows"]').find('option[value="'+opt+'"]').attr("selected",true);
    
        var $thisNiceSelect = ($formBookAppt).find('select[name="bookWindows"]')
                    .parent() // <div class="form-group">
                    .find('div.nice-select'); // nice-select
    
        if (typeof justUpdate === 'boolean') {            
            ($formBookAppt).find('select[name="bookWindows"]').find('option[value="-1"]').remove(); // remove -1            
            ($thisNiceSelect).find('ul li[data-value="-1"]').remove(); // remove -1            
            return;      
        }
    
        ($thisNiceSelect).find('ul li').each(function() { $(this).removeClass('selected'); });
            
        var $niceSelLI = ($thisNiceSelect).find('ul li[data-value="'+opt+'"]');
        $niceSelLI.addClass('selected');
        var spanSelected = $thisNiceSelect.find("span.current");
        spanSelected.text( $niceSelLI.text() );
    
        $("input#name").focus();
        ($formBookAppt).addClass("animated shake");
        setTimeout(function() { ($formBookAppt).removeClass("animated shake"); }, 1000);
}


function bookDoors(opt, justUpdate) {        				
		if (!hasBookApptForm()) return; //var formBookAppt = $("#bookApptForm");

		//<input type="hidden" id="bookDoorsValue" name="bookDoorsValue" value="">				
		($formBookAppt).find("input[name='bookDoorsValue']").val('');
		
		($formBookAppt).find('select[name="bookDoors"]').find('option:selected').removeAttr('selected');
		($formBookAppt).find('select[name="bookDoors"]').find('option[value="'+opt+'"]').attr("selected",true);
    
        var $thisNiceSelect = ($formBookAppt).find('select[name="bookDoors"]')
                    .parent() // <div class="form-group">
                    .find('div.nice-select'); // nice-select
    
    
        if (typeof justUpdate === 'boolean') {        
            ($formBookAppt).find('select[name="bookDoors"]').find('option[value="-1"]').remove(); // remove -1            
            ($thisNiceSelect).find('ul li[data-value="-1"]').remove(); // remove -1            
            return;      
        }
        
        ($thisNiceSelect).find('ul li').each(function() { $(this).removeClass('selected'); });
            
        var $niceSelLI = ($thisNiceSelect).find('ul li[data-value="'+opt+'"]');
        $niceSelLI.addClass('selected');
        var spanSelected = $thisNiceSelect.find("span.current");
        spanSelected.text( $niceSelLI.text() );
    
        $("input#name").focus();
        ($formBookAppt).addClass("animated shake");
        setTimeout(function() { ($formBookAppt).removeClass("animated shake"); }, 1000);
}

function bookUrgency(opt, justUpdate) {    
    
        //Project Timing
		if (!hasBookApptForm()) return; //var formBookAppt = $("#bookApptForm");
    
		//<input type="hidden" id="bookDoorsValue" name="bookDoorsValue" value="">				
        var $inUrgencyValue  = ($formBookAppt).find("input[name='bookUrgencyValue']");       
        if (($inUrgencyValue).length<=0) return;
        
        ($inUrgencyValue).val('');  
        

		//($formBookAppt).find('select option[value="-1"]').remove();
		($formBookAppt).find('select[name="bookUrgency"]').find('option:selected').removeAttr('selected');
		($formBookAppt).find('select[name="bookUrgency"]').find('option[value="'+opt+'"]').attr("selected",true);    
 
        ($formBookAppt).find('select[name="bookUrgency"]').find('option[value="-1"]').remove(); // remove -1            
    
    
        var $thisNiceSelect = ($formBookAppt).find('select[name="bookUrgency"]')
                    .parent() // <div class="form-group">
                    .find('div.nice-select'); // nice-select
    
        ($formBookAppt).find('select[name="bookUrgency"]').find('option[value="-1"]').remove(); // remove -1            
        ($thisNiceSelect).find('ul li[data-value="-1"]').remove(); // remove -1            
}



function dateToYYYYMMDD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);    
}

function dateToDDMMYYYY(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return ''+ (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/'  +  y;
}


function initBookFormSelectControls() {   
        
    var wasInit = false;
    
    wasInit = (typeof($selBookApptWindow) === 'object' && ($selBookApptWindow).length>0);
    if (!wasInit) {    
        //console.log(`=======> Initializing $selBookApptWindow <==================`);        
        $selBookApptWindow = ($formBookAppt).find("select[name='bookWindows']");
    }

    wasInit = (typeof($selBookApptDoor) === 'object' && ($selBookApptDoor).length>0);     
    if (!wasInit)  {  
        //console.log(`=======> Initializing $selBookApptDoor <==================`);        
        $selBookApptDoor = ($formBookAppt).find("select[name='bookDoors']");
    }
    
    wasInit = (typeof($selBookApptUrgency) === 'object' && ($selBookApptUrgency).length>0);         
    if (!wasInit) {
        //console.log(`=======> Initializing $selBookApptWindow <==================`);        
        $selBookApptUrgency = ($formBookAppt).find("select[name='bookUrgency']");   // TODO: Change to Window
    }
    
    //<select name="bookWindows"><option value="-1">How Many Windows (to be installed)?</option></select>    
    var hasServiceWindows = ($formBookAppt).find("input[name='bookWindowsValue']");
	if (hasServiceWindows.length==0) {                
        //<input type="hidden" id="bookWindowsValue" name="bookWindowsValue" value="">		
		$( '<input type="hidden" id="bookWindowsValue" name="bookWindowsValue" value="">' ).insertBefore( ($formBookAppt).find("select[name='bookWindows']") );
	}	

    // <select name="bookDoors"><option value="-1">How Many Doors (to be installed)?</option></select>    	    
	var hasServiceDoors = ($formBookAppt).find("input[name='bookDoorsValue']");
	if (hasServiceDoors.length==0) {                
        //<input type="hidden" id="bookDoorsValue" name="bookDoorsValue" value="">		
		$( '<input type="hidden" id="bookDoorsValue" name="bookDoorsValue" value="">' ).insertBefore( ($formBookAppt).find("select[name='bookDoors']") );
	}	
    
    if (false) {        
        var hasServiceUrgency = ($formBookAppt).find("input[name='bookUrgencyValue']");
        if (hasServiceUrgency.length==0) {                
            //<input type="hidden" id="bookDoorsValue" name="bookDoorsValue" value="">		
            $( '<input type="hidden" id="bookUrgencyValue" name="bookUrgencyValue" value="">' ).insertBefore( ($formBookAppt).find("select[name='bookUrgency']") );
        }	
    }
    
    //console.log(($selBookApptWindow).html());            
    //console.log(($selBookApptDoor).html());            
    //console.log(($selBookApptUrgency).html());               
}



function initBookFreeEstimateForm() {
	console.log("initBookFreeEstimateForm()...");
    
    if (typeof($formBookAppt) === 'undefined' || !hasBookApptForm()) $formBookAppt = $("#bookApptForm");
    
	if (!hasBookApptForm()) {
        console.log("bookApptForm not found!");
        return -1;
    }
    
    initBookFormSelectControls(); // Init Windows, Doors, Urgency    
    
    ($formBookAppt).find('select[name="bookWindows"]').on('change', function() { if (this.value != -1) { bookWindows(this.value, true); } });
	($formBookAppt).find('select[name="bookDoors"]').on('change', function() { if (this.value != -1) { bookDoors(this.value, true); } });
    //($formBookAppt).find('select[name="bookUrgency"]').on('change', function() { if (this.value != -1) { bookUrgency(this.value); } });
	
	//if selected remove -1
	// if only one choice... disabled dropdown
    	
	($formBookAppt).submit(function(e) {
        
		e.preventDefault();
		e.stopPropagation();    
        
		if (!hasBookApptForm()) {
			formError();	
			submitMSG(false, "Please fill in the Free-Estimate request form properly.");
			return; 	
		}
			
		var doTest  = $('[name=name]').val().match(/^yes$/gi); // && $('[name=name]').val().length === 0;
		if (doTest) {	                
				$('[name=name]').val('John Sample');				
				$('[name=email]').val('JohnSample@demo.com');
				$('[name=phoneNumber]').val('305-808-8080');
                //$('[name=eventDate]').val( dateToDDMMYYYY(new Date()) );
				$('[name=message]').val('TEST = I need these Windows/Doors installation ASAP!');

                //console.log(`=======> DoTest...<==================`);                                
                //console.log(`=======> bookWindows... <==================`);
                bookWindows(10014);
                //console.log(`=======> bookDoors... <==================`);                                
                bookDoors(20002);
                //console.log(`=======> bookUrgency... <==================`);                    
                bookUrgency(0);
				return -1;
		}
		
		var formIsInvalid 		= (($formBookAppt)[0].checkValidity() === false);						
        var formErrorStr        = '';       
        
        bookData.serviceMain    = pageSettings.service;
        bookData.serviceWindows	= '';
        bookData.serviceDoors	= '';
        bookData.serviceWhen	= '';                         
        bookData.serviceConv    = pageSettings.gaConvAG;
        
        
        var hasName = false;
        var hasEmailAddress = false;
        var hasPhoneNumber = false
        
        var hasWindow = false;
        var hasDoors = false;
        var hasStartTime = false;
        
        var hasNotes = false;
                
                
         if (formIsInvalid) {
            //$('#name').validator('validate');
            //var aaa = $('input#name').parent().find('.form-group'); // 
            //var hasError = $(aaa).parent().hasClass('has-error');
            //var aaaHtml = $('input#name').val();
            //console.log(`Validation ========== ${aaa.html()} ===================`);             
            // ???????????????????????
         }
                 
        console.log(`FORM-VALIDATION ========== ${!formIsInvalid} ===================`);             
       
        var $thisNiceSelect;   
        
        //=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= Windows =-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=
        
        if (true) {
            var $niceWindows = ($formBookAppt).find('select[name="bookWindows"]').parent().find('div.nice-select');
            var niceSelectedWindows  = ($niceWindows).find("ul li[class*='selected']").attr("data-value");        
            if (niceSelectedWindows !== "-1") {           
                var selWindows = ($formBookAppt).find('select[name="bookWindows"]').find('option[value="'+niceSelectedWindows+'"]');
                if (selWindows.length>0) {               

                    ($formBookAppt).find('select[name="bookWindows"]').find('option').removeAttr('selected');
                    $(selWindows).attr("selected",true);				

                    var selectedText = $(selWindows).attr("data-submit");							
                    if (selectedText === undefined) selectedText = $(selWindows).text();

                    if (selectedText !== undefined) {										
                        $('input[name=bookWindowsValue]').val(selectedText);
                        //===========================================================                                        
                        bookData.serviceWindows	= selectedText;                    
                        //===========================================================					
                        hasWindow = true; // OK.OK.OK	
                    }
                } // selWindows            
            } // niceSelectedWindows
        }
		
        
        //=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= Doors =-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=        
        
        if (true) {
            var $niceDoors = ($formBookAppt).find('select[name="bookDoors"]').parent().find('div.nice-select');
            var niceSelectedDoors   = ($niceDoors).find("ul li[class*='selected']").attr("data-value");        
            if (niceSelectedDoors !== "-1") {                        
                
                var selDoors = ($formBookAppt).find('select[name="bookDoors"]').find('option[value="'+niceSelectedDoors+'"]');
                if (selDoors.length>0) {               

                    ($formBookAppt).find('select[name="bookDoors"]').find('option').removeAttr('selected');
                    $(selDoors).attr("selected",true);				

                    var selectedText = $(selDoors).attr("data-submit");							
                    if (selectedText === undefined) selectedText = $(selDoors).text();

                    if (selectedText !== undefined) {										
                        $('input[name=bookDoorsValue]').val(selectedText);
                        //===========================================================                                        
                        bookData.serviceDoors = selectedText;                    
                        //===========================================================					
                        hasDoors = true; // OK.OK.OK	
                    }                    
                } // selDoors
                
            } // niceSelectedDoors
        }
        
        
        //=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= When =-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=        
        
        hasStartTime = true; // OK.OK.OK	
        bookData.serviceWhen = '';
         if (false) {
            var $niceStartTime = ($formBookAppt).find('select[name="bookUrgency"]').parent().find('div.nice-select');
            var niceSelectedWhen   = ($niceStartTime).find("ul li[class*='selected']").attr("data-value");        
            if (niceSelectedWhen !== "-1") {
                                
                var selWhen = ($formBookAppt).find('select[name="bookUrgency"]').find('option[value="'+niceSelectedWhen+'"]');
                if (selWhen.length>0) {               

                    ($formBookAppt).find('select[name="bookUrgency"]').find('option').removeAttr('selected');
                    $(selWhen).attr("selected",true);				

                    var selectedText = $(selWhen).attr("data-submit");							
                    if (selectedText === undefined) selectedText = $(selWhen).text();

                    if (selectedText !== undefined) {										
                        $('input[name=bookUrgencyValue]').val(selectedText);
                        //===========================================================                                        
                        bookData.serviceWhen = selectedText;                    
                        //===========================================================					
                        hasStartTime = true; // OK.OK.OK	
                    }                    
                } // selWhen                 
                
            } // niceSelectedWhen
         }
        
//        console.log(`=== bookData.serviceMain =======> ${bookData.serviceMain}`);
//        console.log(`===================================`);        
//        console.log(`=== bookData.serviceWindows ====> ${bookData.serviceWindows}`);
//        console.log(`=== bookData.serviceDoors ======> ${bookData.serviceDoors}`);
//        console.log(`=== bookData.serviceWhen =======> ${bookData.serviceWhen}`);
//        console.log(`===================================`);
//        console.log(`=== bookData.serviceConv =======> ${bookData.serviceConv}`);
            
		
		//<div id="msgSubmit" class="h4 text-center hidden"></div>
		$("#msgSubmit").removeClass().addClass('h4 text-center hidden').text('');
		
		if (formIsInvalid || !hasWindow || !hasDoors || !hasStartTime) {
			formError();
            
            //iw305PageLangIsEs 
            
            if (formIsInvalid)
			     submitMSG(false, "Please fill in the Free-Estimate request form properly."); 
            else if (!hasWindow)                
                submitMSG(false, "Please speficy how many Fences or Gates to be installed.");
            else if (!hasDoors)                
                submitMSG(false, "Please speficy how many Railing to be installed.");
            else if (!hasStartTime)                
                submitMSG(false, "Please speficy how soon you need these service.");
            else                
                submitMSG(false, "Please fill in the Free-Estimate request form properly.");             
			
            //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
            return; // not today
            //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		} 		
		
        //=-=-=-=-=-=-=-=-=-=-=-=-= Everything looks good -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=						
		submitBookAppt(); // this will be decided async...
	
	}); // ($formBookAppt).submit(function(e) { ... }


    function formSuccess(){
        ($formBookAppt)[0].reset();
        //submitMSG(true, "Message Submitted Successfully!");
    }

    function formError(){
        ($formBookAppt)
			.removeClass()
			.addClass('shake animated')
			.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            	$(this).removeClass().addClass('was-validated');	
        });
    }

    function submitMSG(valid, msg){		
		var msgClasses = "h4 text-left tada animated text-success";
        if(!valid){
			msgClasses = "h4 text-left text-danger";             
        } 
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
		
    var btnHtmlBeforeSubmitted = '';
	function disableBookApptBtn() {         
        // Book Appointment 
        var $btnSubmit = ($formBookAppt).find("button[type='submit']");
        if (!$btnSubmit.length) return; // not found
        
        ($btnSubmit).prop('disabled', true);
        //($formBookAppt).find("button[type='submit']").find("i.fa-paper-plane").addClass('fa-spin');
        //  Book Appointment 
        if (!btnHtmlBeforeSubmitted.length) {
            btnHtmlBeforeSubmitted = ($btnSubmit).html();
        }
        //  Get Free Event Quote 
        var newHtml = btnHtmlBeforeSubmitted.replace(/Submit\s+Reservation/ig, 'Submiting Reservation...');
        ($btnSubmit).html( newHtml );
        //console.log( "Html = "+newHtml );
    }
    
    function doneBookApptBtn() { 
        var $btnSubmit = ($formBookAppt).find("button[type='submit']");
        if (!$btnSubmit.length) return; // not found                
        var newHtml = btnHtmlBeforeSubmitted.replace(/Submit\s+Reservation/ig, 'Reservation Successfully Sent!');
        ($btnSubmit).html( newHtml );
    }
    
    function enableBookApptBtn() { 
        var $btnSubmit = ($formBookAppt).find("button[type='submit']");
        if (!$btnSubmit.length) return; // not found                
        ($btnSubmit).html( btnHtmlBeforeSubmitted );
        ($btnSubmit).removeAttr("disabled"); 
    }
    
	function submitBookAppt() {
       		
		console.log('submitBookAppt()...');	
				
		var name 	    = $("#name").val();
		var email 	    = $("#email").val();        
		var phone	    = $("#phoneNumber").val();		
        //var eventDate	= $("#eventDate").val();        
		var message     = $("#message").val();
		
		var apptServiceName		= pageSettings.service;
		var apptServiceDetails  = pageSettings.serviceDetails;
				
		if (apptServiceDetails === undefined) {
			formError();	
			submitMSG(false, "Please fill in the Reservation form properly.");
			return - 1; 		
		}	
				
		disableBookApptBtn();
		
		//var formData = $('#contactForm').serialize();                
        
//        console.log(`=== bookData.serviceMain =======> ${bookData.serviceMain}`);
//        console.log(`===================================`);        
//        console.log(`=== bookData.serviceWindows ====> ${bookData.serviceWindows}`);
//        console.log(`=== bookData.serviceDoors ======> ${bookData.serviceDoors}`);
//        console.log(`=== bookData.serviceWhen =======> ${bookData.serviceWhen}`);
//        console.log(`===================================`);
//        console.log(`=== bookData.serviceConv =======> ${bookData.serviceConv}`);        
        
        var formData = '&do=FreeEstimate'.concat(						
						'&name=',name,
						'&email=',email,
						'&phone=',phone,
                        '&message=',message,
            
                        '&serviceLang=',(pageSettings.langIsEspanish)?'Español':'English',            
                        '&serviceMain=',bookData.serviceMain,
                        '&serviceConv=',bookData.serviceConv,
						'&serviceWindows=',bookData.serviceWindows,
                        '&serviceDoors=',bookData.serviceDoors
                        //'&serviceWhen=',bookData.serviceWhen                        
		);		                        
        
        //var urlBookAppt = 'http://localhost:19800/doRequestEstimateIW813.ashx?key=IW1010101' + formData;		
        var urlBookAppt = 'https://api.codebyus.com/doRequestEstimateIW813.ashx?key=IW1010101' + formData;		        
		
		var submitBookAppt = urlBookAppt;
		
		//console.log('url = '+submitBookAppt);return;
		
		$("#msgSubmit").removeClass().addClass("h4 text-left").text("Submitting Request. Please hold...");		

		$.getJSON(submitBookAppt)			
			.done(function (response) {
			
				// apiVersion, apiStatus,apiCode, apiMsg						

				var strResponse = JSON.stringify(response);				
			
				if (response.apiCode == 200) {
					console.log('Event.Quote.Submitted.... RESPONSE.OK!');
					
					formSuccess(); // clear the form

                    // Submit.DONE!
					// enableBookApptBtn(); // will not enable it because will be redirected asap

					// Clear the form.
					$('#contactForm input,#contactForm textarea').val('');
					submitMSG(true, "Request Submitted Successfully!");
                    
                    doneBookApptBtn();

					if (typeof redirectToBookApptThankYouPage === 'function') { redirectToBookApptThankYouPage(name,apptServiceDetails); }                    
                    
					
				} else {
					
					// Error while submitting Book-Appt.
					// NOTIFY CLOUD.. just in case
					console.log('Book.Appointment.Submitted.... RESPONSE.FAILED '+ strResponse);					

//					$(formMessages)
//						.removeClass('success')
//						.addClass('error')
//						.addClass('alert-danger')	
//						.addClass('text-right')						
//						.text("Error while submitting contact form. Your message could not be sent.");
									
					//$('#secContactSent').addClass("animated flipInX").show();					
					//$('#secContactSent').fadeIn().removeClass("d-none");	
					
					enableBookApptBtn(); // back in business
					
					formError();
					submitMSG(false, "Error while submitting Estimate Request.");
				}

					
			}) // success
			.fail(function(jqxhr, textStatus, error ) {
					var strError  = textStatus + " === " + error;
					console.log('Submitting-Reservation-Form... FAILED.ERROR = '+ strError );
					formError();
					submitMSG(false, "Error while submitting Estimate request.");			
            
                    enableBookApptBtn(); // back in business
			})
			.always(function() {				
				console.log('ALWAYS = Submitting-Reservation-Form... DONE!' );
			});
	
			
	} // submitBookAppt()

} // initBookFreeEstimateForm();
	
//}(jQuery)); // End of use strict