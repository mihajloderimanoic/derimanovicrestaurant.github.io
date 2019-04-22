// Scroll
$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      $("#scrollModal").css("height", "0");
      $("#burger").removeClass("change");
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 60
          },
          1000
        );
        return false;
      }
    }
  });
});

// Modal
var modal = document.getElementById("modalMenu");
var btn = document.getElementById("menuAll");
var closeModal = document.getElementById("closeModal");

btn.onclick = function() {
  modal.style.display = "block";
};

closeModal.onclick = function() {
  modal.style.display = "none";
};

// Featured
var slideIndex = 1;
var groupIndex = 1;
var x = window.matchMedia("(max-width: 600px)");

myFunction(x);
x.addListener(myFunction);

function myFunction(x) {
  if (x.matches) {
    showSlides(slideIndex);
  } else {
    showGroup(groupIndex);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("dish");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].parentElement.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].parentElement.style.display = "grid";
}

function showGroup(n) {
  var i, j;
  var group = document.getElementsByClassName("group");
  var slides = document.getElementsByClassName("dish");
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "block";
  }

  if (n > group.length) {
    groupIndex = 1;
  }
  if (n < 1) {
    groupIndex = group.length;
  }
  for (i = 0; i < group.length; i++) {
    group[i].style.display = "none";
  }

  group[groupIndex - 1].style.display = "grid";
}

function plusSlides(n) {
  if (x.matches) {
    showSlides((slideIndex += n));
  } else {
    showGroup((groupIndex += n));
  }
}

var hearth = document.querySelectorAll(".hearth");
var people = document.querySelectorAll(".dishL");

hearth.forEach((hearth, index) => {
  hearth.addEventListener("click", () => {
    if (!hearth.classList.contains("liked")) {
      hearth.setAttribute("src", "img/h2.png");
      hearth.classList.add("liked");
      people[index].innerHTML++;
    } else {
      hearth.setAttribute("src", "img/h1.png");
      hearth.classList.remove("liked");
      people[index].innerHTML--;
    }
  });
  hearth.onmouseover = () => {
    if (hearth.attributes[1].value == "img/h1.png") {
      hearth.setAttribute("src", "img/h2.png");
    }
  };
  hearth.onmouseout = () => {
    if (hearth.classList.contains("liked")) {
      hearth.setAttribute("src", "img/h2.png");
    } else {
      hearth.setAttribute("src", "img/h1.png");
    }
  };
});

// Gallery
var slideIndexG = 0;
var galImg = document.querySelectorAll(".gall img");
var modalG = document.getElementById("modalGallery");
var slidesG = document.querySelectorAll(".gallImage");
var galNext = document.getElementsByClassName("nextG");
var galPrev = document.getElementsByClassName("prevG");
var closeG = document.getElementById("close");

galImg.forEach((img, index) => {
  img.addEventListener("click", () => {
    modalG.style.display = "block";
    for (i = 0; i < slidesG.length; i++) {
      slidesG[i].style.display = "none";
    }
    slidesG[index].style.display = "block";
    slideIndexG = index;
  });
});

galNext[0].onclick = function() {
  slidesG[slideIndexG].style.display = "none";
  if (slideIndexG == slidesG.length - 1) {
    slideIndexG = 0;
  } else {
    slideIndexG++;
  }
  slidesG[slideIndexG].style.display = "block";
};

galPrev[0].onclick = function() {
  slidesG[slideIndexG].style.display = "none";
  if (slideIndexG == 0) {
    slideIndexG = slidesG.length - 1;
  } else {
    slideIndexG--;
  }
  slidesG[slideIndexG].style.display = "block";
};

closeG.onclick = function() {
  modalG.style.display = "none";
};

// Burger
var burger = document.getElementById("burger");
var scrollModal = document.getElementById("scrollModal");

burger.onclick = function() {
  burger.classList.toggle("change");
  if (scrollModal.style.height === "100vh") {
    scrollModal.style.height = "0";
  } else {
    scrollModal.style.height = "100vh";
  }
};
