/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    //fancy
    $(".fancybox-thumb").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });
    
    //team-pop
    $('.team-pop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip teamtip"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
    });
    
    $(".ibg").mousemove(function( event ) {
      $(".ibg").css('transform', 'translate(' + event.pageY /40 + 'px, ' + -event.pageX /40+ 'px)');
    });
    
    // dropdown hide
    $(document).click(function(){
      $("#dropdown").hide();
    });
    
    // bar toggle on mobile
    $("#menu-toggle").click(function() {
      $("body").toggleClass("menu-open");
      $(this).toggleClass("active");
      $(".bar").toggleClass("hiddenbar");
	});
    
    // tabs on mobile
    function setScale(){
      if ($(window).width()  < 768) {
        $('.mtb').each(function(i, elm) {
          $(elm).text($(elm).next('ul').find('li.active a').text());
        });
        $('.mtb').on('click', function(e) {
            e.preventDefault();
            $(e.target).toggleClass('open').next('ul').slideToggle();
        });
        $('.stm_nav_block a[data-toggle="tab"]').on('click', function(e) {
            e.preventDefault();
            $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
        });
      }
      else{
        $('.stm_nav_block').css( "display", "table");
      }
    } //window
    setScale();
    $(window).on("resize", setScale);
        
    // scrolls in tabs and blocks
    $('.tse-sc').perfectScrollbar(); 
    $('.ps').perfectScrollbar();
    //$('.table-responsive').perfectScrollbar();
    
    // bar toggle on mobile
    $(".stage em").click(function() {
      $(".stage").toggleClass("stage-open");
	});
    
    // checkbox to switch
    //$("[name='score']").bootstrapSwitch(); 
    
    // js label in inputs
    $(".withJsLabel input[type='text']").jvFloat();
    
  }); //end ready

}(jQuery));