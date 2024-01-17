function changeImageLinkText() {
  // Ottieni tutti gli elementi container
  const cols = document.querySelectorAll(".container");

  // Per ogni elemento col
  for (const col of cols) {
    // Ottieni il testo dall'elemento h4
    const text = col.querySelector("h4").textContent;

    // Cambia il testo del link dell'immagine
    col.querySelector("img").src = `https://mc-heads.net/body/${text}`;
  }
}