// navbar
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
          document.getElementById('navbarSite').classList.add('fixed-top');
        } else {
          document.getElementById('navbarSite').classList.remove('fixed-top');
        } 
    });
  }); 

