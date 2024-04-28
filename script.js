// toggle navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// owl carousel image slider
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:[
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>'
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// Modal gallery image
const thumbnails = document.querySelectorAll('.gallery-item');
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const src = this.getAttribute('src');
    document.getElementById('fullSizeImage').setAttribute('src', src);
  });
})