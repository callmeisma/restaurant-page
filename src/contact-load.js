const contactLoad = () => {
  let content = document.getElementById("content");

  let hero = document.createElement("div");
  hero.setAttribute("class", "hero-contact");
  content.appendChild(hero);

  let touch = document.createElement("div");
  touch.setAttribute("class", "banner");

  let touchContent = document.createElement("div");
  touchContent.setAttribute("class", "touch-content");

  let touchTitle = document.createElement("h3");
  touchTitle.setAttribute("class", "touch-title");
  touchTitle.innerHTML = "Get in Touch";

  touchContent.appendChild(touchTitle);

  let touchSubtitle = document.createElement("p");
  touchSubtitle.setAttribute("class", "touch-text");
  touchSubtitle.innerHTML =
    "Quo dicit complectitur comprehensam in, denique albucius iudicabit pro";

  touchContent.appendChild(touchSubtitle);

  let touchButton = document.createElement("button");
  touchButton.setAttribute("class", "button");
  touchButton.innerHTML = "Message";

  touchContent.appendChild(touchButton);

  touch.appendChild(touchContent);

  content.appendChild(touch);
};

export { contactLoad };
