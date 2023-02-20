new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const navToggler = document.querySelector(".main-nav__toggle");
const navigation = document.querySelector(".main-nav__list");

navToggler.hidden = false;
navigation.classList.add("main-nav__list--enabled");

navToggler.addEventListener("click", () => {
  navigation.classList.toggle("main-nav__list--opened");
  navToggler.classList.toggle("main-nav__toggle--opened");
});

const map = L.map("map").setView(
  {
    lat: 59.968321,
    lng: 30.317462,
  },
  17
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "../img/map-pin.svg",
  iconSize: [38, 50],
  iconAnchor: [16, 50],
});

const marker = L.marker(
  {
    lat: 59.968321,
    lng: 30.317462,
  },
  {
    icon: mainPinIcon,
  }
);

marker.addTo(map);

const mapBox = document.querySelector(".map__box");
mapBox.classList.remove("map__no-js");

const header = document.querySelector(".header");
header.classList.remove("header--no-js");
