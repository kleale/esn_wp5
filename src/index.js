console.log("Hello World!");
import $ from 'jquery';

//==================
// news open
//==================
$('.media.op').on('click', function () {
    $('.media.op').toggleClass('opened');
});
// streamblock
$('.streamblock .opener_bottom').on('click', function () {
    $(this).toggleClass('opened');
    $('.streamblock').toggleClass('hide-all');
});
$('.streamblock .opener_right').on('click', function () {
    $(this).toggleClass('opened');
    $('.streamblock').toggleClass('hide-list');
});


$('.openable .frow').on('click', function () {
    $(this).toggleClass('active');
});

//cheked stream
$('.stream-list >div em').on('click', function () {
    console.log(this);
    $(this).parent().toggleClass('checked');
});

// change filter position on mobile

$(window).resize(function () {
    resize();
});
$(document).ready(function () {
    resize();
});
function resize() {
    if ($(window).width() < 480) {
        //Mobile
        //$(".filter").insertAfter("#mobile-filter-holder");
    }
    else if ($(window).width() < 990) {
        //Tablet
        $(".filter").insertAfter("#mobile-filter-holder");
    }
    else {
        //Desktop
        //Leave original layout
    }

}

// bar menu to aside

$(window).resize(function () {
    menuToAside();
});
$(document).ready(function () {
    menuToAside();
});
function menuToAside() {
    if ($(window).width() < 990) {
        $("#navbarOpener").insertAfter("#mobile-menu-holder");
        var gameName = $(".mr-auto").find(".active").find("a").html();
        //console.log(gameName);
        $("#navbarDropdown").html(gameName);
        $("#navbarOpener").css("display","block");
        $("#navbarOpener").animate({"opacity":1});
        console.log('< 990');
    }
    else {
        console.log('> 990');
        $("#navbarOpener").css("display","flex");
        $("#navbarOpener").animate({"opacity":1});
        $("#navbarOpener").insertAfter("#site-logo");
    }
}

//sidebarOpener
$(document).ready(function(){
    $("#sidebarOpener").on("click", function() {
        $('body').toggleClass('hidesidebar');
    });
})

// pubg chart circle color on hoover
// $(document).ready(function() {
//   $('.tt').hover(function(){
//     $(this).prev().toggleClass('circle-light');
//     });
// });


//????
$(document).ready(function(){
    $(".prp").on( "click", function() {
      $(this).find('.prt em').toggle();
      $(this).find('.prt .prm').html($(this).text() == 'скрыть' ? 'еще' : 'скрыть');
      $(this).toggleClass('open')
    });
  })

// JS - ./js/index.js
// import './js/func_init.js'

// spider graphs
//import Highcharts from 'highcharts';
//import HighchartsMore from 'highcharts/highcharts-more.js';
//import HighchartsExporting from 'highcharts-exporting.js';
//import highchartsTheme from 'highcharts-theme.js';

//==================
// Bootstrap (example)
//https://getbootstrap.com/docs/4.3/getting-started/webpack/
//==================
//import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
//import Popper from 'popper.js/dist/popper.min.js'
import BootstrapJs from 'bootstrap/dist/js/bootstrap.min.js'

//==================
// SCSS
//==================
import './scss/main-theme/main.scss'

// CSS (example)
// import './css/main.css'
//==================
// вcтавил тупо в хеадер из-за путей на сервере
'./fonts/fontawsome/css/all.my.css'

//==================
// dropdown clickable inside
//==================
// $('.dropdown-menu').on("click.bs.dropdown", function (e) { 
//     e.stopPropagation(); 
//     //e.preventDefault();
// });

$('#fgames .dropdown-menu').on("click.bs.dropdown", function (e) {
    e.stopPropagation();
    //e.preventDefault();
});

//==================
// enable bootstrap tooltips
//==================
$(function () {
    $('[data-toggle="tip"]').tooltip();
    $('.tt').tooltip();
})

//==================
// enable medium-zoom
//==================
// npm install medium-zoom
import mediumZoom from 'medium-zoom'
mediumZoom('[data-zoomable]', {
    margin: 24,
    background: '#2d3a44db',
    scrollOffset: 40
    //container: '#zoom-container',
    //template: '#zoom-template',
  })

//const zoom = mediumZoom()
// zoom.attach(
//   document.querySelectorAll('[data-zoomable]')
// )


//==================
// OverlayScrollbars https://kingsora.github.io/OverlayScrollbars/#!overview
//==================
import OverlayScrollbarsCss from 'overlayscrollbars/css/OverlayScrollbars.min.css'
// import OverlayScrollbars from 'overlayscrollbars/js/jquery.overlayScrollbars.min.js'
// document.addEventListener("DOMContentLoaded", function () {
//     OverlayScrollbars(document.querySelectorAll(".scroller"), {
//         scrollbars: {
//             autoHide: "move"
//         }
//     });
// });

//==================
// PAGES js navi only dev pager
//==================
import "./js/dev/jquery.cookie.min.js"
$(document).ready(function () {
    setNavigation();
    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);

        $("#hpages a").each(function () {
            var href = $(this).attr('href');
            if (path === href) {
                $(this).addClass('active');
            }
        });
    }
});
// .dev pager

/*
 * Third party
 */
//= ../assets/js/chosen.jquery.js
//= ../assets/js/screenfull.js
//= ../assets/js/perfect-scrollbar.jquery.min.js

//= ../assets/js/bootstrap-switch.min.js
//= ../assets/js/owl.carousel.min.js
//= ../assets/js/jquery.countdown.min.js
//= ../assets/js/jvfloat.js
//= ../assets/js/jquery.touchSwipe.min.js

//= ../assets/js/jquery.montage.min.js

//= ../assets/js/fancy/jquery.fancybox.pack.js
//= ../assets/js/fancy/helpers/jquery.fancybox-thumbs.js

/*
 * Custom
 */
//= part/app.js


$(window).resize(function () {
    mobileBlocks();
});
$(document).ready(function () {
    mobileBlocks();
});

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

//{% if vars.sess.u.id == 18 %}
function mobileBlocks() {
    if ($(window).width() < 990) {
        $("#news-mobileblock").html($("#newsBlock").html());
        $("#mnews-mobileblock").html($("#mnews").html());

        //$("#articles-blockSmall").addClass("hidden");
        $("#match-inspector").addClass("hidden");
        
        $("#rightcol").hide();
        $("#mnews").hide();
        //$("#articles-blocksmall").hide();
        $("#newsBlock").hide();
        
    }
    else {
        $("#newsBlock").html($("#news-mobileblock").html());
        //$("#mnews").html($("#mnews-mobileblock").html());

        //$("#articles-blocksmall").addClass("visible").removeClass("hidden");
        $("#match-inspector").addClass("visible").removeClass("hidden");

        $("#rightcol").show();
        $("#mnews").show();
        //$("#articles-blocksmall").show();
        $("#newsBlock").show();
    }
}

$('#blockselector input').change(function(){
    switch (this.id) {
        case "showNews":
            $("#news-mobileblock").addClass("visible").removeClass("hidden");
            $("#mnews-mobileblock").addClass("hidden").removeClass("visible");
            $("#match-inspector").addClass("hidden").removeClass("visible");
            break;
        case "showArticles":
            $("#news-mobileblock").addClass("hidden").removeClass("visible");
            $("#mnews-mobileblock").addClass("visible").removeClass("hidden");
            $("#match-inspector").addClass("hidden").removeClass("visible");
            break;
        // case "showMatches":
        //     $("#news-mobileblock").addClass("hidden").removeClass("visible")
        //     $("#mnews-mobileblock").addClass("hidden").removeClass("visible")
        //     $("#match-inspector").addClass("visible").removeClass("hidden")
        //     break;
        default:
            $("#news-mobileblock").addClass("visible").removeClass("hidden");
                    $("#mnews-mobileblock").addClass("hidden").removeClass("visible");
                    $("#match-inspector").addClass("hidden").removeClass("visible");
    }
});

// Dealing with Textarea Height
function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }
  
// let textarea = document.querySelector(".textareacom textarea");
// textarea.addEventListener("keyup", () => {
//   textarea.style.height = calcHeight(textarea.value) + "px";
// });


$.fn.ready(function() {
    // Spoiler
    $(document).on('click', '.spoiler-btn', function (e) {
        e.preventDefault()
        $(this).parent().children('.spoiler-body').collapse('toggle')
    });
});


//
//themeSelect
$('#themeToggle').on('click', function () {
    var element = document.body;
    element.classList.toggle("dark-mode");
});
