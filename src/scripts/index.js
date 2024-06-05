import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../public/data/DATA.json";

const navdrawer = document.querySelector("#navdrawer");
const hero = document.querySelector(".hero");
const drawer = document.querySelector("#drawer");
const main = document.querySelector("main");

navdrawer.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const restoranList = document.querySelector("#data-kuliner");
  data.restaurants.forEach((restaurant) => {
    restoranList.innerHTML += `
        <div class="cards">
        <img src="${restaurant.pictureId}" alt="Foto Restaurant ${restaurant.name}" tabindex="0" />
        <div class="card-body">
        <p tabindex="0" style='color:#FDD663 ;' >Rating: ${restaurant.rating}</p>
          <h3 tabindex="0" style='color:#F4511E ;' >Nama Restaurant : ${restaurant.name}</h3>
          <p tabindex="0" style='color:red ;'>City : ${restaurant.city}</p>
          <p tabindex="0">Best Seller : ${restaurant["bestSeller "]}</p>
          <p tabindex="0">Deskripsi Restaurant : <br>${restaurant.description}</p>
        </div>
      </div>
        `;
  });
});
