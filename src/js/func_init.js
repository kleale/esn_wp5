/*
 * Third party func
 */

(function ($) {
  'use strict';

  $(document).ready(function () {
    // checkbox to switch
    $("[name='score']").bootstrapSwitch();
  
 $('.m-item').on('click', function (e) {
        var $this = $(e.currentTarget);
        if (e.ctrlKey == true) {
          window.open($this.attr('data-href'));
        } else {
          window.location.href = $this.attr('data-href');
        }
    });
    $(".m-item .tresult").click(function (event) {
        event.stopPropagation();
        alert("boo tresult");
    });
    $(".m-item .dice-win").click(function (event) {
        //event.stopPropagation();
        //alert("boo dice");
    });

    //tip
    $('.tip').tooltip({
      container: 'body'
    });

    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    //piks popover
    $('.hpop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>',
        'content': function(){
            var txt = '<figure><img src="../img/heroh.jpg"></figure>';
            txt += '<h2>Beastmaster</h2>';
            txt += '<u><b class="gren">81й</b> в рейтинге</u>';
            txt += '<u><b class="red">21.5%</b> побед</u>';
            txt += '<em>Melee, Disabler, Durable, Iniciator, Nuker</em>';
            return txt;
        }
    });

    //icon-pop
    $('.icon-pop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip i-pop"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
    });

    //tour-name-pop
    $('.tour-pop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip t-pop"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
    });
  
    
    
  }); //end ready
  
}(jQuery));