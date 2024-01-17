function changeImageLinkText() {
  // Ottieni tutti gli elementi container
  const containers = document.querySelectorAll(".container");

  // Per ogni elemento container
  for (const container of containers) {
    // Ottieni il testo dall'elemento h4
    const text = container.querySelector("h4").textContent;

    // Cambia il testo del link dell'immagine
    container.querySelector("img").src = `https://mc-heads.net/body/${text}`;
  }
}