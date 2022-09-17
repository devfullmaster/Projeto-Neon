const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

    function openDropdown(event) {
        event.preventDefault();

        dropdown.classList.toggle('active');
    }

    btnDropdown.addEventListener('click', openDropdown);
    dropdown.addEventListener('mouseleave', openDropdown);

    const header = document.getElementById('js-header');

    function fixedMenu(){
        if (window.pageXOffset > 80) {
            header.classList.add('fixed-menu');
        } else {
            header.classList.remove ('fixed-menu');
        }
    }

    document.addEventListener('scroll', fixedMenu);