// Start of Sign in page
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
})()
// End of Sign in page


// Start of Sign up page

// End of Sign up page


// Start of Admin Dashboard page
// Sidebar menu
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const verticalMenu = document.getElementById('vertical-menu');
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.vertical-navigation-menu a');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            verticalMenu.style.display = 'none';
        } else {
            verticalMenu.style.display = 'flex';
        }
    });

    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickInsideMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideSidebar && !isClickInsideMenuIcon) {
            sidebar.classList.remove('active');
            verticalMenu.style.display = 'flex';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');

            sections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(sectionId).style.display = 'block';
        });
    });

    // Initially display the home section
    document.getElementById('home').style.display = 'block';
});
// End of Admin Dashboard page
