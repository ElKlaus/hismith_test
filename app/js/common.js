$(function() {

  let $menu = $("#my-menu").mmenu({
    navbar: {
      title: ''
    },
    extensions: ["fullscreen", "fx-menu-slide", "border-none"]
  });
  
  let mmMenu = $("#my-menu").data( "mmenu" );

	$(".toggle-mnu").click(function() {
    mmMenu.open();
    
		return false;
  });

  $(".my-menu_top-line .toggle-mnu").click(function() {
    mmMenu.close();
  });

  $("#content_accordion").accordion({
    active: false,
    collapsible: true
  });

  if ($(window).width() <= '680') {
    $(".footer__nav_list").attr("id", "footer_accordion")
    $("#footer_accordion").accordion({
      active: false,
      collapsible: true
    });
  };
  
  // $(window).resize(function() {
  //   if ($(window).width() <= '680') {
  //     $(".footer__nav_list").attr("id", "footer_accordion")
  //   } else {
  //     console.log('Check check accordeon');
  //     $(".footer__nav_list").removeAttr("id", "footer_accordion")
  //   };
  // });

  $(".content-item-title").click(function() {
    console.log('content item arrow check')

    $(this).children(".article-arrow").toggleClass("article-arrow-active");
  });

  $(".nav_section__title").click(function() {
    $(this).children("span").toggleClass("nav_section__title-active");
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
    }
  });
});
