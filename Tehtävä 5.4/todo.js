document.querySelector("#update-input").addEventListener("click", submitHandler);

// Asetetaan event listener koko listalle eikä vain yksittäiselle lista-alkiolle (engl. item)
document.querySelector("#todo").addEventListener("click", listClickHandler); // Changed event listener to #todo

function addListItem(text) {
  var listItem = document.createElement("li");
  listItem.textContent = text;
  document.querySelector("#todo").append(listItem);
};

function submitHandler(e) {

  e.preventDefault();

  var inputValue = document.querySelector("#type-input").value;

  if (inputValue.trim() !== '') 
  {    
    addListItem(inputValue);
    document.querySelector("#type-input").value = '';
  }

  

  // TODO: implement this function
}

// HUOM!!! Jotta voidaan viitata yksittäiseen lista-alkioon, PITÄÄ KÄYTTÄÄ e.target. Pelkkä
// e EI RIITÄ, koska e itsessään ON TAPAHTUMA (tässä tapauksessa klikkaus), ja e.target 
// vasta on asia, jota klikattiin.   
function listClickHandler(e) {
  // Jos lista-alkiolla ei ole vielä luokkaa "done", se yliviivataan ja lisätään em. luokkaan.
  // Luokka pitää kirjaa yliviivatuista alkioista. 
  if (!(e.target.classList.contains("done"))) {
    e.target.style.textDecoration = "line-through";
    e.target.classList.add("done");
  }

  else 
  {
    e.target.parentNode.removeChild(e.target);
  }
}