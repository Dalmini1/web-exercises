const form = document.querySelector("form");
const paragrafo = document.querySelector("p");

const nome = document.getElementById("nome");
const sesso = document.getElementById("sesso");
const ateneo = document.getElementById("ateneo");
const cap = document.getElementById("cap");
const studente = document.getElementById("studente");
const lavoro = document.getElementById("lavoro");

function onFormError(e, fieldName) {
  e.preventDefault();
  paragrafo.textContent = `Hai dimenticato il ${fieldName}`;
}
function onFormSucces(e) {
  e.preventDefault();
  paragrafo.textContent = `hai compilato tutti i campi`;
}

form.onsubmit = function (e) {
  if (nome.value === "") {
    return onFormError(e, "nome");
  }

  if (sesso.value === "") {
    return onFormError(e, "sesso");
  }

  if (ateneo.value === "") {
    return onFormError(e, "ateneo");
  }

  if (cap.value === "") {
    return onFormError(e, "cap");
  }

  if (studente.value === "") {
    return onFormError(e, "studente");
  }

  if (lavoro.value === "") {
    return onFormError(e, "lavoro");
  }
  return onFormSucces(e);
};

// if (cap.value === "" || nome.value === "");

//   {
//     e.preventDefault();
//     paragrafo.textContent = "NON SONO COMPILATI TUTTI I CAMPI";
//   }
