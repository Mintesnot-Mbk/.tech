/*============================ toggle icon navbar ================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*============================Scroll section active link ================*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    /*============================ sticky navbar ================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================== remove toggle icon and and navbar when click navbar link (scroll)========*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*============================ scroll reveal ================*/

ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*============================ typed js ================*/

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer','DevOps Engineer.!','Back-end Engineer.!','Front-end Engineer.!','Android Developper.!','Digital Marketer.!','Graphics Designer.!','Technical mentor.!'],
    typeSpeed: 101,
    backSpeed: 102,
    backDelay: 1001,
    loop: true
});

/*===========================Function About Me===============================*/
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  /*===========================Function Software Engineering===============================*/

  function softWare() {
    var dots = document.getElementById("dots_one");
    var moreText = document.getElementById("more_one");
    var btnText = document.getElementById("myBtn_one");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  /*===========================Function Digital Marketing===============================*/

  function digitalMarketing() {
    var dots = document.getElementById("dots_two");
    var moreText = document.getElementById("more_two");
    var btnText = document.getElementById("myBtn_two");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  /*===========================Function Graphics Design===============================*/

  function graphicsDesign() {
    var dots = document.getElementById("dots_three");
    var moreText = document.getElementById("more_three");
    var btnText = document.getElementById("myBtn_three");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
