let myClass = document.getElementsByClassName("myDiv");

for (let i = 0; i < myClass.length; i++)

    {
        myClass[i].onclick = function()
        
            {
                myClass[i].classList.toggle("myDiv21");
            }
    }

    let myClass1 = document.getElementsByClassName("myDiv2");

for (let i = 0; i < myClass1.length; i++)

    {
        myClass1[i].onclick = function()
        
            {
                myClass1[i].classList.toggle("myDiv22");
            }
    }

    let myClass2 = document.getElementsByClassName("myDiv3");

for (let i = 0; i < myClass2.length; i++)

    {
        myClass2[i].onclick = function()
        
            {
                myClass2[i].classList.toggle("myDiv23");
            }
    }


    let myClass3 = document.getElementsByClassName("myDiv4");

for (let i = 0; i < myClass3.length; i++)

    {
        myClass3[i].onclick = function()
        
            {
                myClass3[i].classList.toggle("myDiv24");
            }
    }


    /*Equipo*/

   document.addEventListener("DOMContentLoaded", () => {
  const gato = document.getElementById("gato-saltarin");
  const miembros = document.querySelectorAll(".team-member");

  miembros.forEach((miembro) => {
    miembro.addEventListener("click", () => {
      const rect = miembro.getBoundingClientRect();
      const scrollY = window.scrollY;

      // Posición centrada sobre el miembro
      const top = rect.top + scrollY - 100;
      const left = rect.left + rect.width / 2 - 40;

      // Simula salto con transform
      gato.style.transform = "translateY(-30px)";
      gato.style.top = `${top}px`;
      gato.style.left = `${left}px`;

      // Vuelve a posición normal después del salto
      setTimeout(() => {
        gato.style.transform = "translateY(0)";
      }, 300);
    });
  });
});

/*Sobre nosotros*/

// Lista de servicios ofrecidos por La Michería House
const servicios = [
  {
    texto: "Selección cuidada de arena, comida y accesorios probados por gateros y veterinarios.",
    imagen: "public/arena-chuches.png"
  },
  {
    texto: "Asesoría nutricional 1:1 (pienso, húmedo a BARF) con planes de transición sin estrés.",
    imagen: "public/asesorias-gatunas.png"
  },
  {
    texto: "Eventos artísticos con feromonas y música suave para michis y humanos.",
    imagen: "public/cero-estres.png"
  },
  {
    texto: "Taller exprés de cepillado sin drama para humanos y felinos.",
    imagen: "public/cepillado.png"
  },
  {
    texto: "Diagnóstico de “arenero ideal” (tamaño, tipo de arena y ubicación en casa).",
    imagen: "public/areneros.png"
  },
  {
    texto: "Sesiones guiadas de juego según la personalidad y energía previamente mapeadas.",
    imagen: "public/juego-activo.png"
  },
  {
    texto: "Control de peso ideal, para gatos ágiles.",
    imagen: "public/peso.png"
  },
  {
    texto: "Recomendaciones de vacunas, antiparasitarios y revisiones (WhatsApp o email).",
    imagen: "public/vacunas.png"
  },
  {
    texto: "Zona de prueba de rascadores y camitas: si tu gato no lo aprueba, no te lo llevas.",
    imagen: "public/rascadores-camitas.png"
  },
  {
    texto: "Retrato gigante, la cara más linda del michi.",
    imagen: "public/photocall.png"
  },
  {
    texto: "Tarjeta de puntos: cada compra suma descuentos y donaciones a colonias de gatos.",
    imagen: "public/tarjeta-puntos.png"
  }
];

let indice = 0;

// Muestra el siguiente servicio en el contenedor #output
function mostrarSiguiente() {
  const output = document.getElementById("output");

  if (indice < servicios.length) {
    const servicio = servicios[indice];
    output.innerHTML = `
      <div class="servicio">
        <p>${servicio.texto}</p>
        <img src="${servicio.imagen}" alt="${servicio.texto}" class="servicio-img" />
      </div>
    `;
    indice++;
  } else {
    output.innerHTML = "<p>🐾 ¡Ya viste todos los servicios!</p>";
  }
}

// Reinicia el recorrido de servicios
function reiniciarServicios() {
  indice = 0;
  document.getElementById("output").innerHTML = "<p>🐾 ¡Vamos de nuevo!</p>";
}

