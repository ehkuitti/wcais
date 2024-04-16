// Omaa kokeilua

// document.querySelector("#update-input").addEventListener("click", submitHandler(e));

// function submitHandler(e) {
//   e.preventDefault();

//   document.querySelector("#receive-input").replace(document.querySelector("#type-input"));

//   // TODO: implement this function
// };

document.querySelector("#update-input").addEventListener("click", submitHandler);

function submitHandler(e) 
{
  // Estetään, ettei selain yritä lähettää lomaketta submit-nappia painettaessa
  e.preventDefault();

  // Otetaan nykyinen inputboxin arvo talteen muuttujaan
  var inputValue = document.querySelector("#type-input").value;

  if (inputValue.trim() == '') 
  {
    return;
  }

  else 
  {
    // Korvataan input fieldin sisältö. Vaatii .innerText, koska korvataan teksti, eikä itse
    // elementtiä. HUOM! .innerText on <p>:n metodi, joka #receive-input on. Vastaava input
    // fieldin metodi on .value. Tämän takia seuraavissa erit, vaikka näyttävät tekevän
    // samoja asioita.
    document.querySelector("#receive-input").innerText = inputValue;
    document.querySelector("#type-input").value = "";

  }

  }