import { homeLoad } from "./home-load";
import { menuLoad } from "./menu-load";
import { contactLoad } from "./contact-load";

// homeLoad();
contactLoad();

function clearContent() {
  if (document.getElementById("content").hasChildNodes() === true) {
    let items = document.getElementById("content");
    while (items.firstChild) {
      items.removeChild(items.lastChild);
    }
  }
}

document.addEventListener("click", function (e) {
  if (e.target.innerHTML === "Eli's Bakery") {
    clearContent();
    homeLoad();
  } else if (e.target.innerHTML == "Menu" || e.target.innerHTML == "See Menu") {
    clearContent();
    menuLoad();
  } else if (e.target.innerHTML == "Contact") {
    clearContent();
    contactLoad();
  }
});
