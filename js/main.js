function hamburgerMenu(){
    var navMenu = document.getElementById('nav-menu-container');
    navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
}

