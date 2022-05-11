let slideIndex = 1;

function explore() {fetch('http://localhost:3000/api/attractions')
.then(response => response.json()).then(data => {
let pageOutlet = document.getElementById('page-outlet');
pageOutlet.innerHTML = `<div class="attractions">
<div class="carousel">
${attractions.forEach(attraction => {slideHtml += `
<div class="carousel__slide">
<h3><a href="${attraction.site}">${attraction.name}</a></h3>
<address>${attraction.address}</address>
<p>(ranked #${attraction.rank})</p>
<q>${attraction.description}</q>
</div>`;})}<a class="carousel__prev" onclick="plusSlides(-1)">❮</a>
<a class="carousel__next" onclick="plusSlides(1)">❯</a></div></div>`;
showSlides(slideIndex);)}).catch(error => console.error('Error:', error));
}

function displayAttractions(attractions) {
  let pageOutlet = document.getElementById('page-outlet');
  let attractionHtml = `
  <div class="attractions">
    <div class="carousel">
      ${addSlides(attractions)}
      <a class="carousel__prev" onclick="plusSlides(-1)">❮</a>
      <a class="carousel__next" onclick="plusSlides(1)">❯</a>
    </div>
  </div>
  `;

  pageOutlet.innerHTML = attractionHtml;
  showSlides(slideIndex);
}

function addSlides(attractions) {
  let slideHtml = '';

  attractions.forEach(attraction => {
    slideHtml += `
      <div class="carousel__slide">
        <h3><a href="${attraction.site}">${attraction.name}</a></h3>
        <address>${attraction.address}</address>
        <p>(ranked #${attraction.rank})</p>
        <q>${attraction.description}</q>
      </div>
    `;
  });
  return slideHtml;
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName('carousel__slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
