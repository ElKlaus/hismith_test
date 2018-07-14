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
    console.log('Check toggle button');
  });

  if ($(window).width() <= '680') {
    $("#footer_accordion").accordion({
      active: false,
      collapsible: true
    });
  };

  // $(window).resize(function() {
  //   if ($(window).width() <= '680') {
  //     $("#footer_accordion").accordion({
  //       active: false,
  //       collapsible: true
  //     });
  //   } else {
  //     console.log('afdadsf')
  //     $( "#footer_accordion" ).accordion().disable;
  //   };
  // });


  $(".nav_section__title").click(function() {
    $(this).children("span").toggleClass("nav_section__title-active");
  });

});
