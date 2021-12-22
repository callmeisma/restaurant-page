const homeLoad = () => {
  let content = document.getElementById("content");
  // hero
  let hero = document.createElement("div");
  hero.setAttribute("class", "hero");

  let heroContent = document.createElement("div");
  heroContent.setAttribute("class", "hero-content");

  let heroTitle = document.createElement("h1");
  heroTitle.setAttribute("class", "hero-text");
  heroTitle.innerHTML = "Pinch of Perfect";

  heroContent.appendChild(heroTitle);

  hero.appendChild(heroContent);

  content.appendChild(hero);

  // banner
  let banner = document.createElement("div");
  banner.setAttribute("class", "banner");

  let bannerContent = document.createElement("div");
  bannerContent.setAttribute("class", "banner-content");

  let bannerTitle = document.createElement("h3");
  bannerTitle.setAttribute("class", "banner-title");
  bannerTitle.innerHTML = "Traditional Recipes Made Modern.";

  bannerContent.appendChild(bannerTitle);

  let bannerSubtitle = document.createElement("p");
  bannerSubtitle.setAttribute("class", "banner-text");
  bannerSubtitle.innerHTML =
    "Lorem ipsum dolor sit amet, reque adipisci at vix. Vim tale hinc doming eu, dolore virtute argumentum ad sit. Laboramus similique eos ut, ad perfecto vituperata sed.";

  bannerContent.appendChild(bannerSubtitle);

  let bannerButton = document.createElement("button");
  bannerButton.setAttribute("class", "button");
  bannerButton.innerHTML = "See Menu";

  bannerContent.appendChild(bannerButton);

  banner.appendChild(bannerContent);

  let bannerImg = document.createElement("div");
  bannerImg.setAttribute("class", "banner-img");

  banner.appendChild(bannerImg);

  content.appendChild(banner);
};

export { homeLoad };
