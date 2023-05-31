const toggleBtn = document.getElementById('check-5');
const body = document.body;
const header = document.getElementById('header');
const main = document.getElementById('Home');

const section = document.getElementById('projetos');
const footer = document.getElementById('footer');


toggleBtn.addEventListener("click", function () {
    header.classList.toggle("white-mode-header");
    main.classList.toggle("white-mode-main");
    
    section.classList.toggle("white-mode-section");
    footer.classList.toggle("white-mode-footer");
    body.classList.toggle("white-mode:hover");
}
)

