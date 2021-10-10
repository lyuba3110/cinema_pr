const schemeSvg = document.querySelector(".scheme-svg");
const totalpricetag = document.querySelector(".price-total");
let cost = 800;
let totalprice = 0;
schemeSvg.addEventListener("click", function (event) {
    if (!event.target.classList.contains('booked')) {
      event.target.classList.toggle("active");
      totalprice = schemeSvg.querySelectorAll(".active").length * cost;
      totalpricetag.textContent = totalprice;
      
    }
  })
