const items = [
  {
    judul: "PT Laskar Jaya",
    subjudul: "Landing Page Persewaan Alat Berat (Tailwind CSS)",
    gambar: "asset/ptlaskarjaya.png",
    link: "https://codenamedcd.github.io/laskarjaya/",
  },
  {
    judul: "Sedotinaja",
    subjudul: "Landing Page Layanan Sedot Tinja",
    gambar: "asset/sedotinaja.png",
    link: "https://codenamedcd.github.io/sedotinaja/",
  },
];

// function add
function parseItemsToCards() {
  const cards = [];

  for (let i = 0; i < items.length; i++) {
    const currentCard = items[i];

    // add new div
    const divCard = document.createElement("a");
    divCard.classList.add("card");

    const divImg = document.createElement("div");
    divImg.classList.add("image");

    const targetImg = document.createElement("img");
    divImg.appendChild(targetImg);

    const divTitle = document.createElement("div");
    divTitle.classList.add("title-card");

    const targetTitle = document.createElement("h2");
    const targetSubtitle = document.createElement("p");
    divTitle.appendChild(targetTitle);
    divTitle.appendChild(targetSubtitle);

    // set title
    targetTitle.textContent = currentCard.judul;
    // set subtitle
    targetSubtitle.textContent = currentCard.subjudul;
    // set src img
    targetImg.setAttribute("src", currentCard.gambar);
    // set link
    divCard.setAttribute("href", currentCard.link);

    divCard.appendChild(divImg);
    divCard.appendChild(divTitle);

    cards.push(divCard);
  }

  return cards;
}

function main() {
  const secOne = document.querySelector(".sec-1");

  const parsedCards = parseItemsToCards();

  for (let i = 0; i < parsedCards.length; i++) {
    secOne.append(parsedCards[i]);
  }

  document.body.append(secOne);
}

main();
