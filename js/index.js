const menuButton = document.getElementById('menu')
const links = document.querySelectorAll('.hide')
const sidebar = document.querySelector('.sidebar')


menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidesidebar'); hideLinks()
})

function hideLinks() {
    links.forEach(link => {
        link.classList.toggle('hide')
    })
}