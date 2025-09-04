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

setInterval(cambiarSlide,6000);

function ocultarTextoInfos() {
    const array_new_divs_info = [
        '<a href="https://wa.me/56944093539?text=Hola%20quisiera%20más%20información" target="_blank"><i class="bi bi-whatsapp"></i><b>Whatsapp</b></a>',
        '<a href=""><i class="bi bi-instagram"></i><b>Instagram</b></a>',
        '<a href=""><i class="bi bi-envelope"></i><b>Gmail</b></a>',
    ];

    const array_new_divs_info_little_devices = [
        '<a href="https://wa.me/56944093539?text=Hola%20quisiera%20más%20información" target="_blank"><i class="bi bi-whatsapp"></i></a>',
        '<a href=""><i class="bi bi-instagram"></i></a>',
        '<a href=""><i class="bi bi-envelope"></i></a>',
    ];

    const array_old_divs_info = [
        '<i class="bi bi-whatsapp "></i><b>Whatsapp: +569 4409 3539</b>',
        '<i class="bi bi-instagram"></i><b>Instagram: @comtyr.spa</b>',
        '<i class="bi bi-envelope"></i><b>Gmail: comtyrspa@gmail.com | rodolfoarriagada.recicla@gmail.com</b>',
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

// var animation = { duration: 40000, easing: (t) => t }

// var slider = new KeenSlider("#my-keen-slider", {
//   loop: true,
//   renderMode: "performance",
//   drag: false,
//   created(s) {
//     s.moveToIdx(5, true, animation)
//   },
//   updated(s) {
//     s.moveToIdx(s.track.details.abs + 5, true, animation)
//   },
//   animationEnded(s) {
//     s.moveToIdx(s.track.details.abs + 5, true, animation)
//   },
// })

// var slider_2 = new KeenSlider("#my-keen-slider-2", {
//   loop: true,
//   renderMode: "performance",
//   drag: false,
//   created(s) {
//     s.moveToIdx(5, true, animation)
//   },
//   updated(s) {
//     s.moveToIdx(s.track.details.abs + 5, true, animation)
//   },
//   animationEnded(s) {
//     s.moveToIdx(s.track.details.abs + 5, true, animation)
//   },
// })

// const parrafoCamionPluma = document.getElementById("parrafo-camion-pluma");
// const parrafoGruaHorquilla = document.getElementById("parrafo-grua-horquilla");
// const camionPlumaTitulo = document.querySelector(".camion-pluma-titulo");
// const gruaHorquillaTitulo = document.querySelector(".grua-horquilla-titulo");

// function textoCarrusel(){
//   if(window.matchMedia("(max-width:862px)").matches){
//     if(camionPlumaTitulo.classList.contains("ocultar")){
//       camionPlumaTitulo.classList.remove("ocultar");
//       parrafoCamionPluma.classList.add("ocultar");
//       gruaHorquillaTitulo.classList.remove("ocultar");
//       parrafoGruaHorquilla.classList.add("ocultar");
//     }
//   } else{
//     if(parrafoCamionPluma.classList.contains("ocultar")){
//       parrafoCamionPluma.classList.remove("ocultar");
//       camionPlumaTitulo.classList.add("ocultar");
//       parrafoGruaHorquilla.classList.remove("ocultar");
//       gruaHorquillaTitulo.classList.add("ocultar");
//     }
//   }
// }

// window.addEventListener("resize",textoCarrusel);
// window.addEventListener("load",textoCarrusel);


const rectangulo = document.querySelector('.rectangulo-nosotros-1');
const rectangulo_2 = document.querySelector('.rectangulo-nosotros-2')
const row_nosotros_1 = document.querySelector('.row-1-nosotros');
const row_nosotros_2 = document.querySelector('.row-2-nosotros');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target === row_nosotros_1) {
      rectangulo.classList.add("transicion-rectangulo-nosotros");
    } else if(entry.isIntersecting && entry.target === row_nosotros_2){
      rectangulo_2.classList.add("transicion-rectangulo-nosotros");
    }
  });
}, {
  threshold: 0.9 // porcentaje visible necesario (90%)
});

observer.observe(row_nosotros_1);
observer.observe(row_nosotros_2);

const parrafos_carrusel = document.querySelectorAll(".texto-carrusel > p");

function cambiarContenidoParrafoCarrusel(){
  if(window.matchMedia("(max-width:800px)").matches){
    parrafos_carrusel.forEach((parrafo)=>{
      parrafo.classList.add("ocultar");
    });
  } else{
    parrafos_carrusel.forEach((parrafo)=>{
      parrafo.classList.remove("ocultar");
    });
  }
}

window.addEventListener("resize", cambiarContenidoParrafoCarrusel);
window.addEventListener("load", cambiarContenidoParrafoCarrusel);

const row_ubicacion = document.querySelector(".row-ubicacion");
const row_contacto = document.querySelector(".row-contacto");
const camiones_fletes_divs = document.querySelectorAll('.camion-flete');
const residuo_divs = document.querySelectorAll(".contenedor-residuos > div");


const observer_contacto_nosotros = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if(entry.target === row_ubicacion){
          row_ubicacion.classList.add("bounce-in-right");
          observer_contacto_nosotros.unobserve(row_ubicacion);
      } else if(entry.target === row_contacto){
          row_contacto.classList.add("bounce-in-left");
          observer_contacto_nosotros.unobserve(row_contacto);
      } else if(entry.target.classList.contains('camion-flete')){
          entry.target.classList.add('aparecer');
      } else if(entry.target.id === 'residuo-aluminio' || 'residuo-chatarra' || 'residuo-fierro' || 'residuo-cobre' || 'residuo-bronce' || 'residuo-acero'){
          entry.target.classList.add('aparecer');
      }
    }
  })
},{
  threshold: 0.7
});

camiones_fletes_divs.forEach((div)=>{
  observer_contacto_nosotros.observe(div);
});

residuo_divs.forEach((div)=>{
  observer_contacto_nosotros.observe(div);
});

observer_contacto_nosotros.observe(row_ubicacion);
observer_contacto_nosotros.observe(row_contacto);

function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight

  function markup(remove) {
    wrapperMarkup(remove)
    dotMarkup(remove)
    arrowMarkup(remove)
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment)
  }
  function createDiv(className) {
    var div = document.createElement("div")
    var classNames = className.split(" ")
    classNames.forEach((name) => div.classList.add(name))
    return div
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft)
      removeElement(arrowRight)
      return
    }
    arrowLeft = createDiv("arrow arrow--left")
    arrowLeft.addEventListener("click", () => slider.prev())
    arrowRight = createDiv("arrow arrow--right")
    arrowRight.addEventListener("click", () => slider.next())

    wrapper.appendChild(arrowLeft)
    wrapper.appendChild(arrowRight)
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper)
      removeElement(wrapper)
      return
    }
    wrapper = createDiv("navigation-wrapper")
    slider.container.parentNode.appendChild(wrapper)
    wrapper.appendChild(slider.container)
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots)
      return
    }
    dots = createDiv("dots")
    slider.track.details.slides.forEach((_e, idx) => {
      var dot = createDiv("dot")
      dot.addEventListener("click", () => slider.moveToIdx(idx))
      dots.appendChild(dot)
    })
    wrapper.appendChild(dots)
  }

  function updateClasses() {
    var slide = slider.track.details.rel
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active")
    })
  }

  slider.on("created", () => {
    markup()
    updateClasses()
  })
  slider.on("optionsChanged", () => {
    console.log(2)
    markup(true)
    markup()
    updateClasses()
  })
  slider.on("slideChanged", () => {
    updateClasses()
  })
  slider.on("destroyed", () => {
    markup(true)
  })
}

var slider = new KeenSlider("#my-keen-slider", {}, [navigation])

var slider_1 = new KeenSlider("#my-keen-slider-1", {
  loop: true,
  mode: "free",
  slides: {
    perView: 3,
    spacing: 10, // separación en p
  },
});

function sliderResponsive() {
  if(window.matchMedia("(min-width:1400px)").matches){
    slider_1.update({
      slides: { perView: 3, spacing: 10}
    })
  }
  else if (window.matchMedia("(min-width: 990px)").matches) {
    slider_1.update({
      slides: { perView: 2, spacing: 10 },
    });
  } else if (window.matchMedia("(min-width: 660px)").matches) {
    slider_1.update({
      slides: { perView: 1, spacing: 10 },
    });
  } else {
    slider_1.update({
      slides: { perView: 1, spacing: 10 },
    });
  }
}

window.addEventListener("resize", sliderResponsive);
window.addEventListener("load", sliderResponsive);

document.querySelector(".arrow-left").addEventListener("click", () =>
  slider_1.prev()
);
document.querySelector(".arrow-right").addEventListener("click", () =>
  slider_1.next()
);