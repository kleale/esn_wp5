/*
 Scripts for match page
*/

(function ($) {
  'use strict';

  $(document).ready(function () {
    // Stream list search fast live filter
    $(function() {
      $("#strm-filter").keyup(function(){
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
        // Loop through the comment list
        $("#index_stream li").each(function(){
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
        // Update the count
        /*
        var numberItems = count;
          $("#filter-count").text("Number of Comments = "+count);
        */
      });
    });
    
    // Log search fast live filter
    $(function() {
      $("#logfilter").keyup(function(){
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
        // Loop through the comment list
        $("#loglist > div").each(function(){
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
        // Update the count
        /*
        var numberItems = count;
          $("#filter-count").text("Number of Comments = "+count);
        */
      });
    });
    
	/* Приклеиваем иконочное меню страницы матча */
    
    if (document.getElementById('m-fast')) {
      $('#m-fast').affix({
        offset: {
          top: 0,
          bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true))
          }
        }
      })
    }
    
    // Переключение вкладок стандартных блоков на страница матча
    $('.stm_nav_block a').click(function (e) {
      e.preventDefault()
      $(this).tab('show');
      //$('.tse-sc').TrackpadScrollEmulator('recalculate');
    })
    
    // Переключение вкладок блока стримов
    $('.stream_menu li').click(function (e) {
      e.preventDefault()
      $(this).tab('show');
      //$('.tse-sc').TrackpadScrollEmulator('recalculate');
    })
    
    //Мобильное меню матча с иконками
    $('body').scrollspy({ target: '#m-fast', offset : 100 })
    
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
    
    // Компактный заголовок страницы матча
    $("#head-toggle").click(function() {
      $(".m-head").toggleClass("m-head_compact");
	});
    
    // player menu toggle
    $("#player-menu").click(function() {
      $("#srteamslider").toggleClass("toggled_stream");
      $(this).toggleClass("active");
	});
    $("#stream_menu a").click(function() {
      $("#srteamslider").removeClass("toggled_stream");
      $("#player-menu").removeClass("active");
    });
    
/*fullscreen https://github.com/sindresorhus/screenfull.js*/
    var target = $('#srteamslider')[0];
    /*
    $('#stream-expand').click(function () {
        if (screenfull.enabled) {
            screenfull.request(target);
        }
        else{}
    });
    
    $('#stream-compress').click(function() {
        if (screenfull.enabled) {
            screenfull.exit(target);
        }
    });
    
    if (screenfull.enabled) {
        document.addEventListener(screenfull.raw.fullscreenchange, function () {
            //console.log('Am I fullscreen? ' + (screenfull.isFullscreen ? 'Yes' : 'No'));
            if (screenfull.isFullscreen) {
                $('#stream-compress').css( 'display' , 'block' );
                $('#stream-expand').hide();
                $(target).addClass('expanded');
                  
                    var srteamtoggle = $('.srteamtoggle').outerHeight();
                    var currentHeight = $('.stm_koef').outerHeight();
                    var upcurrentHeight = $('.st_inner').outerHeight();
                    var st_brand_top = 100 + upcurrentHeight;
                    var st_brand_bottom = 35 + currentHeight;
                    $('.st_brand').css( 'top' , st_brand_top );
                    $('.st_brand').css( 'bottom' , st_brand_bottom );
                    var st_brand = $('.st_brand').outerHeight();
                    if ( st_brand < 80) { 
                        $('.st_brand').hide(); 
                    }
                    else {
                        $('.st_brand').show(); 
                    }
                  
            }
            else{
                $('#stream-expand').show();
                $('#stream-compress').hide();
                $(target).removeClass('expanded');
            }
        });
    }
  */
  // end fullscreen
    
  
  $('#stream-expand').click(function () {
    $('#stream-compress').css( 'display' , 'block' );
    $('#stream-expand').hide();
    $(target).addClass('expanded');
    $('body').addClass('noscroll');
  });
  $('#stream-compress').click(function() {
    $('#stream-expand').show();
    $('#stream-compress').hide();
    $(target).removeClass('expanded');
    $('body').removeClass('noscroll');
  });
  
    
    
    
  }); //end ready

}(jQuery));