// nav bar //
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('closeBtn');

    if (menuIcon && menuOverlay && closeBtn) {
        menuIcon.addEventListener('click', function() {
            menuOverlay.style.display = 'flex';
        });

        closeBtn.addEventListener('click', function() {
            menuOverlay.style.display = 'none';
        });

        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                menuOverlay.style.display = 'none';
            }
        });
    } else {
        console.error('One or more elements not found:', 
            {menuIcon: !!menuIcon, menuOverlay: !!menuOverlay, closeBtn: !!closeBtn});
    }
});