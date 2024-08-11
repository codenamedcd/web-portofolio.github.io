const projects = [
  {
    judul: "Word Counter",
    subjudul: "Penghitung jumlah kata dan huruf serta pengubah kapital",
    link: "https://wordcounter-dcd.vercel.app/",
  },
  {
    judul: "PT Laskar Jaya",
    subjudul: "Landing page persewaan alat berat",
    link: "https://codenamedcd.github.io/laskarjaya/",
  },
  {
    judul: "Sedotinaja",
    subjudul: "Landing page layanan sedot tinja",
    gambar: "asset/sedotinaja.png",
    link: "https://codenamedcd.github.io/sedotinaja/",
  },
  {
    judul: "To Do List",
    subjudul: "Catatan rencana kegiatan sehari-hari",
    link: "https://todolist-dcd.vercel.app/",
  },
  {
    judul: "Type Test Custom",
    subjudul: "Tes kecepatan ketikan dengan kata-kata custom",
    link: "https://typetestcustom.vercel.app/",
  },
  {
    judul: "Random Number Generator",
    subjudul: "Pembuat angka acak + desimal & pengurutan",
    link: "https://randomnumber-generator.vercel.app/",
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
