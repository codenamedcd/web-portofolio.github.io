const projects = [
  {
    judul: "Word Counter",
    subjudul: "Penghitung jumlah kata dan huruf (buat logbook msib wkwkwk)",
    link: "https://codenamedcd.github.io/wordcounter/",
  },
];

// function add
function parseprojectsToCards() {
  const cards = [];

  for (let i = 0; i < projects.length; i++) {
    const currentCard = projects[i];

    // add new div
    const divCard = document.createElement("a");
    divCard.classList.add("card");

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
    // set link
    divCard.setAttribute("href", currentCard.link);

    divCard.appendChild(divTitle);

    cards.push(divCard);
  }

  return cards;
}

function main() {
  const secTwo = document.querySelector(".sec-2");

  const parsedCards = parseprojectsToCards();

  for (let i = 0; i < parsedCards.length; i++) {
    secTwo.append(parsedCards[i]);
  }

  document.body.append(secTwo);
}

main();
