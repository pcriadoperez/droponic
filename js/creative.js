/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict
    //JQuery FadeIn Page
    $('.join-waitlist').click(function(){
         fbq('track', 'Lead');
    });  
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    $('#invite-code').keyup(function(e){
        if(e.keyCode==13){
            $('#invite-submit').click();
        }
    });
    $('#invite-submit').click(function(){
        if($('#invite-code').val()=="FBSPECIAL"){
            $('.invite-input-modal').modal("hide");
            $('.tilt-trigger').click();
        }
    });
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    //Stop join-waitlist link click to take you to top of the page
    $('.join-waitlist').click(function (event) {
        event.preventDefault();
    });
    
    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');
        $('.toggle').toggleClass('hidden show');
    });
    //Color pick name change
    $(".brown-color-circle").click(function(){
        $('.color-name').html("Cozy Brown");
        $('.color-name').css('color',  '#C4B989');
    });
    $(".blue-color-circle").click(function(){
        $('.color-name').html("Ocean Blue");
        $('.color-name').css('color','#8CAB96');
    });
    $(".green-color-circle").click(function(){
        $('.color-name').html("Spring Green");
        $('.color-name').css('color', '#CBD49D');
    });
    $(".gray-color-circle").click(function(){
        $('.color-name').html("Silver gray");
        $('.color-name').css('color', '#B8BAAD');
    });
                                   
    // Initialize WOW.js Scrolling Animations
    new WOW().init();
    

})(jQuery); // End of use strict
