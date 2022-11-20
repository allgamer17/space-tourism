let menuArea = document.querySelector('.header-navbar-links-group');

function menuOpener() {
    if (menuArea.classList.contains('hide-menu') == true) {
        menuArea.classList.remove('hide-menu')
    }else {
        menuArea.classList.add('display-menu')
    }
};

function menuCloser() {
    if(menuArea.classList.contains('hide-menu') == false) {
        menuArea.classList.add('hide-menu');
    }else {
        menuArea.classList.add('hide-menu');
    }
}