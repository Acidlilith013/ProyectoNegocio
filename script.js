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
