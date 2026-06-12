// Dynamic Navigation Blur Styling on Scroll
window.addEventListener('scroll', () => {
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 20);
});



document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('header');
  if (section) {
    var currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    function activeClass(href, extraClass) {
      var name = href.toLowerCase();
      return (name === currentFile) ? (extraClass ? extraClass + ' active-nav' : 'active-nav') : (extraClass || '');
    }

    section.innerHTML = `<nav id="main-nav">
    <a href="index.html" class="nav-brand"><span>Tutoring</span> By Dominic</a>
    <ul class="nav-links">
      <li><a href="index.html" class="${activeClass('index.html')}">Home</a></li>
      <li><a href="services.html" class="${activeClass('services.html')}">Services</a></li>
      <li><a href="about.html" class="${activeClass('about.html')}">About</a></li>
      <li><a href="https://www.wyzant.com/match/tutor/90090521/contact?direct=true" class="${activeClass('contact.html','nav-cta')}">Contact</a></li>
    </ul>
  </nav>`;
  }

  var section = document.querySelector('footer');
  if (section) {
    section.innerHTML = `<span>Tutoring By Dominic · d.paul.couture@gmail.com</span>
  <span>Lee, NH and surrounding areas · Online & In-Person · By appointment only</span>`;
  }
});