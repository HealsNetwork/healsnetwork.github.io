const images = document.querySelectorAll(".col-lg-6 img");

for (const image of images) {
  const h4 = image.parentNode.querySelector("h4");
  const text = h4.textContent;

  image.src = `https://mc-heads.net/body/${text}`;
}
