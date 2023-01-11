// navbar
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          document.getElementById('navbarSite').classList.add('fixed-top').css('background:white');
        } else {
          document.getElementById('navbarSite').classList.remove('fixed-top');
        } 
    });
  }); 

