console.log("file esterno");

// in base a determinati eventi (click, hover, ecc)
// posso far eseguire del codice e cambiare la UI
function changeText() {
  let paragraph = document.getElementById("paragrafo");
  paragraph.textContent = "Elemento cliccato!";
  paragraph.style.color = "red";

  console.log(document.getElementsByClassName("heading")[0].textContent);

  console.log(document.getElementById("paragrafo"));
  console.log(paragraph.textContent);
  console.log(paragraph.classList);
  console.log(paragraph.style);
  console.log(paragraph.children);

  // non usare in produzione
  alert("ciao");
}
