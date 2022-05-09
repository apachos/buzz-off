function explore() {
  fetch('http://localhost:3000/api/attractions')
    .then(response => response.json())
    .then(data => displayAttractions(data))
    // .then(releaseBugs())
    .catch(error => console.error('Error:', error));
}

function displayAttractions(attractions) {
  let pageOutlet = document.getElementById('page-outlet');
  let attractionHtml = `
    <div class="attractions">
      <pre>${JSON.stringify(attractions, null, 2)}</pre>
    </div>
  `;

  pageOutlet.innerHTML = attractionHtml;
}
