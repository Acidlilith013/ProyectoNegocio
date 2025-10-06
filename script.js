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
  const members = document.querySelectorAll(".team-member");

  members.forEach(member => {
    member.addEventListener("click", () => {
      alert(`Has seleccionado a ${member.querySelector("h2").textContent}`);
    });
  });
});