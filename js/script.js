
// // Scroll to Top

// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {       
//         $('#return-to-top').fadeIn(200);    
//     } else {
//         $('#return-to-top').fadeOut(200);   
//     }
// });
// $('#return-to-top').click(function() {      
//     $('body,html').animate({
//         scrollTop : 0                       
//     }, 500);
// });


var nav = document.getElementById("nav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuItems");
var close = document.getElementById("close-btn");

nav.style.height = "60px";
main.style.marginTop = "60px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "300px") {
	nav.style.height = "60px";
	main.style.marginTop = "60px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
	//to open
	else if (nav.style.height <= "60px") {
	nav.style.height = "300px";
	main.style.marginTop = "300px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	
	}

};
