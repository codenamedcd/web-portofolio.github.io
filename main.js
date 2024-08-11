async function fetchProjects() {
  try {
    const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=fen1AlfGZzc6C6Y10cOqXFDDh4DoQs-QOFxTcoa5ToDIcej1cMl9wEOWIGxl3ux4lAC--7IWROTtOu-lfeEP9mrXIKlonxI6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC_dfo7s-po659wYhaS0ztT7FCljDKE6nffwqSnGHSYkALHbXnFqXFow-1yvhzPNew&lib=MT1sBbLVbyVEhU-P00BezE-yAraNgWYpr'); // Replace with your API URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const projects = await response.json(); // Assuming the API returns JSON
    return projects;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return []; // Return an empty array in case of an error
  }
}

function parseprojectsToCards(projects) {
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

async function main() {
  const secTwo = document.querySelector(".sec-2");

  // Fetch projects data from the API
  const projects = await fetchProjects();

  // Parse and add cards to the page
  const parsedCards = parseprojectsToCards(projects);

  for (let i = 0; i < parsedCards.length; i++) {
    secTwo.append(parsedCards[i]);
  }

  document.body.append(secTwo);
}

main();
