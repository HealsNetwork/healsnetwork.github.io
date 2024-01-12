function changeImageLinkText() {
  // Ottieni tutti gli elementi col
  const cols = document.querySelectorAll(".col");

  // Per ogni elemento col
  for (const col of cols) {
    // Ottieni il testo dall'elemento h4
    const text = col.querySelector("h4").textContent;

    // Cambia il testo del link dell'immagine
    col.querySelector("img").src = `https://mc-heads.net/body/${text}`;
  }
}

// Avvia la funzione al caricamento della pagina
document.addEventListener("DOMContentLoaded", changeImageLinkText);