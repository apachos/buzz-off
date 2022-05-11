function explore() {
  fetch('http://localhost:3000/api/attractions')
    .then(response => response.json())
    .then(data => {
      let pageOutlet = document.getElementById('page-outlet');
      pageOutlet.innerHTML = `
        <div class="attractions">
          <div class="carousel">
            ${attractions.forEach(attraction => {
              slideHtml += `
                <div class="carousel__slide">
                <h3><a href="${attraction.site}">${attraction.name}</a></h3>
                <address>${attraction.address}</address>
                <p>(ranked #${attraction.rank})</p>
                <q>${attraction.description}</q>
                </div>
              `;
            })}
            <a class="carousel__prev" onclick="plusSlides(-1)">❮</a>
            <a class="carousel__next" onclick="plusSlides(1)">❯</a>
          </div>
        </div>
      `;
      showSlides(slideIndex);
    })
    .catch(error => console.error('Error:', error));
}