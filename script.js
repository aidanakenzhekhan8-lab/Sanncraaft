function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    toggleMenu();
}
