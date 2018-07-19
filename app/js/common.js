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

  
  
  //========content_accordion========//
  $("#content_accordion").accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    activate: function( event, ui ) {
      ui.oldHeader.children(".article-arrow").removeClass("article-arrow-active");
      ui.newHeader.children(".article-arrow").addClass("article-arrow-active");
      ui.newHeader.parents(".content-list-item").addClass("content-list-item-active");
      ui.oldHeader.parents(".content-list-item").removeClass("content-list-item-active");
    }
  });
  //========content_accordion end========//



  //========footer_accordion========//
  const footerAccInit = () => $("#footer_accordion").accordion({
    active: false,
    collapsible: true,
    activate: function( event, ui ) {
      ui.oldHeader.children("span").removeClass("nav_section__title-active");
      ui.newHeader.children("span").addClass("nav_section__title-active");
      ui.oldHeader.closest(".content-list-item").addClass("content-list-item-active");
    }
  });

  if ($(window).width() <= '680') {
    footerAccInit();
  };

  $(window).resize(function() {
    if ($(this).width() <= '680') footerAccInit();
  });
 //========footer_accordion========//


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
