function displayHome() {
  let pageOutlet = document.getElementById('page-outlet');

  pageOutlet.innerHTML = `
    <div class="header">
      <h1 class="header__title">India</h1>
      <p class="header__caption">Delhi India Gate</p>
      <a class="header__button" href="#" onclick="explore()">Explore</a>
    </div>
  `;
}
