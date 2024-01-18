function changeImageLinkText() {
    // Ottieni tutti gli elementi box
    const boxs = document.querySelectorAll(".box");

    // Per ogni elemento box
    for (const box of boxs) {
      // Ottieni il testo dall'elemento h4
      const text = box.querySelector("h4").textContent;

      // Cambia il testo del link dell'immagine
      box.querySelector("img").src = `https://mc-heads.net/body/${text}/3000px`;
    }
  }

  // Avvia la funzione al caricamento della pagina
  document.addEventListener("DOMContentLoaded", changeImageLinkText);