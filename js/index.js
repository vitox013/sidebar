const menuButton = document.getElementById('menu')
const links = document.querySelectorAll('.hide')
const sidebar = document.querySelector('.sidebar')



menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidesidebar');  hideLinks(); animatedLinks()
})

function hideLinks() {
    links.forEach(link => {
        link.classList.toggle('hide')
    })
};

function animatedLinks() {

    links.forEach((link) => {
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
    });
};
