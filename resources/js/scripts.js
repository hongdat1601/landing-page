$(document).ready(function(){$(".about-section").waypoint(function(a){"down"==a?($("nav").addClass("sticky"),$(".sticky").css("height","120px")):$("nav").removeClass("sticky")},{offset:"80%"})}),$(".nav-icon").click(function(){$(".main-nav").slideToggle(200),$(".nav-icon").hasClass("fa-bars")?($(".nav-icon").removeClass("fa-bars"),$(".nav-icon").addClass("fa-times")):($(".nav-icon").addClass("fa-bars"),$(".nav-icon").removeClass("fa-times"))});