const cols = document.querySelectorAll(".col");

for (const col of cols) {
  const imageUrl = `https://mc-heads.net/body/${col.textContent}`;
  col.querySelector("img").src = imageUrl;
}
