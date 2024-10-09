// Start of Sign in page

// End of Sign in page


// Start of Sign up page

// End of Sign up page


// Start of Admin Dashboard page
// Sidebar menu
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

// Toggle sidebar when menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('shift'); // Shift content when sidebar opens
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    // If the click is outside the sidebar and not on the menu icon, close the sidebar
    if (!isClickInsideSidebar && !isClickOnMenuIcon && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        content.classList.remove('shift'); // Shift content back when sidebar closes
    }
});

// End of Admin Dashboard page
