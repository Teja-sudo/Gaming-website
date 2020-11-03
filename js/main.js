function hamburgerMenu(){
    var navMenu = document.getElementById('nav-menu-container');
    navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
}

$('#nav-menu-container a').on('click', function (e) {
       if (this.hash !== '') {
         e.preventDefault();
    
         const hash = this.hash;
    
         $('html, body')
           .animate({
             scrollTop: $(hash).offset().top - 80
           },800);
       }
     });