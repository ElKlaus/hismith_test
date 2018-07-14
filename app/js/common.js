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

  $("#accordion").accordion({
      active: false,
      collapsible: true
  })
  
  $(".nav_section__title").click(function() {
    $(this).children("span").toggleClass("nav_section__title-active");
  })

});
