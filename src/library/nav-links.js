document.addEventListener("DOMContentLoaded", () => {
    const resetNav = () => {
        let activeTabs = document.querySelectorAll('.text-gray-100');
        activeTabs.forEach(function(tab) {
            tab.className = tab.className.replace('text-gray-100', '');
        });
    }

    const navClick = event => {
        resetNav();
        event.target.parentElement.className += ' text-gray-100';
    }
      
    const menuNav = document.getElementById('menu');
    menuNav.addEventListener('click', navClick, false);
    resetNav();
});