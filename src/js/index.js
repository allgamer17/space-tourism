let menuArea = document.querySelector('.header-navbar-links-group');

function limpar() {
    menuArea.classList.remove('display-menu hide-menu')
}

function menuOpener() {
    if (menuArea.classList.contains('hide-menu') == false) {
        menuArea.classList.add('display-menu');
    }else {
        menuArea.classList.remove('hide-menu');
    }
};

function menuCloser() {
    if(menuArea.classList.contains('display-menu') == true) {
        menuArea.classList.add('hide-menu');
    }else {
        menuArea.classList.remove('display-menu');
    }
}