const divs_carrusel = document.querySelectorAll(".vista-carrusel");
const navbar = document.querySelector(".navbar");
const boton_menu = document.getElementById("boton-menu");
const lista_anchors = document.getElementById("lista-anchors");
const infos_contacto = document.querySelectorAll(".contacto-info");
const menu_desplegable = document.querySelector(".menu-desplegable");
const acordeon_menu = document.querySelector(".acordeon-menu");

function toggleBotonMenu(){
    if(window.innerWidth <= 800){
        menu_desplegable.classList.add("show");
        lista_anchors.classList.add("ocultar");
    } 

    if(window.innerWidth > 800){
        menu_desplegable.classList.remove("show");
        lista_anchors.classList.remove("ocultar");
        lista_anchors.classList.add("menu");
    }
}


boton_menu.addEventListener("click",()=>{
    if (acordeon_menu.style.maxHeight && acordeon_menu.style.maxHeight !== "0px") {
        acordeon_menu.style.maxHeight = "0";
    } else {
        acordeon_menu.style.maxHeight = acordeon_menu.scrollHeight + "px";
    }
});

window.addEventListener("resize", toggleBotonMenu);
window.addEventListener("DOMContentLoaded", toggleBotonMenu);

let index = 0;

function cambiarSlide(){
    

    divs_carrusel.forEach(slide => {
        slide.classList.remove("mostrar");
    });

     
    divs_carrusel[index].classList.add("mostrar");

    index = (index + 1) % divs_carrusel.length
}

cambiarSlide();

setInterval(cambiarSlide,9000);



function ocultarTextoInfos() {
    const array_new_divs_info = [
        '<a href=""><i class="bi bi-whatsapp"></i><b>Whatsapp</b></a>',
        '<a href=""><i class="bi bi-instagram"></i><b>Instagram</b></a>',
        '<a href=""><i class="bi bi-envelope"></i><b>Gmail</b></a>',
    ];

    const array_new_divs_info_little_devices = [
        '<a href=""><i class="bi bi-whatsapp"></i></a>',
        '<a href=""><i class="bi bi-instagram"></i></a>',
        '<a href=""><i class="bi bi-envelope"></i></a>',
    ];

    const array_old_divs_info = [
        '<i class="bi bi-whatsapp "></i><b>Whatsapp: </b>+569 4409 3539',
        '<i class="bi bi-instagram"></i><b>Instagram:</b>@comtyr.spa',
        '<i class="bi bi-envelope"></i><b>Gmail:</b>comtyrspa@gmail.com | rodolfoarriagada.recicla@gmail.com',
    ];

    let index = 0;
    let data;

    if (window.matchMedia("(max-width: 580px)").matches) {
        data = array_new_divs_info_little_devices;
    } else if (window.matchMedia("(max-width: 1134px)").matches) {
        data = array_new_divs_info;
    } else {
        data = array_old_divs_info;
    }

    infos_contacto.forEach(element => {
        element.innerHTML = data[index];
        index++;
    });
}

window.addEventListener("resize", ocultarTextoInfos);
window.addEventListener("load", ocultarTextoInfos);

const rectangulo = document.querySelector('.rectangulo-nosotros-1');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      observer.unobserve(rectangulo);
    }
  });
});

observer.observe(rectangulo);

const parrafo_rectangulo = document.querySelector(".rectangulo-nosotros-1 > p");



function cambiarTextoParrafo(){
    const html_corto_parrafo_rectangulo = "<b>ComtyrSPA</b> es una empresa comprometida con la gestión responsable de <em>residuos industriales</em>, el <em>arriendo de maquinaria</em> y la prestación de <em>servicios de fletes</em>. Nos dedicamos a ofrecer soluciones integrales que promueven el <b>reciclaje y el cuidado del medioambiente</b>, conscientes de la importancia de minimizar el impacto ambiental en todas nuestras operaciones.";
    const html_completo_parrafo_rectangulo = "<b>ComtyrSPA</b> es una empresa comprometida con la gestión responsable de <em>residuos industriales</em>, el <em>arriendo de maquinaria</em> y la prestación de <em>servicios de fletes</em>. Nos dedicamos a ofrecer soluciones integrales que promueven el <b>reciclaje y el cuidado del medioambiente</b>, conscientes de la importancia de minimizar el impacto ambiental en todas nuestras operaciones. <br><br>Nuestro compromiso es brindar un servicio eficiente y confiable, alineado con prácticas sostenibles que contribuyen a un futuro más limpio y responsable para la industria y la comunidad.";

    if (window.matchMedia("(max-width: 560px)").matches) {
        parrafo_rectangulo.innerHTML = html_corto_parrafo_rectangulo;
    } else if (window.matchMedia("(min-width: 561px)").matches) {
        parrafo_rectangulo.innerHTML = html_completo_parrafo_rectangulo;
    }
}

window.addEventListener("resize",cambiarTextoParrafo);
window.addEventListener("load",cambiarTextoParrafo)





