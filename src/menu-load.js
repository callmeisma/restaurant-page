const menuLoad = () => {
  let content = document.getElementById("content");

  // let heroTitle = document.createElement("h1");
  // heroTitle.setAttribute("class", "page-title");
  // heroTitle.innerHTML = "Menu";

  // content.appendChild(heroTitle);

  const products = [
    {
      name: "pecan pie",
      img: "https://images.unsplash.com/photo-1619051805375-7b83440bb11b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVjYW4lMjBwaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "apple pie",
      img: "https://images.unsplash.com/photo-1624299831638-82c15fcafd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "dulce de leche pie",
      img: "https://images.unsplash.com/photo-1605090932359-cc0642272eeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGR1bGNlJTIwZGUlMjBsZWNoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "pumpkin muffin",
      img: "https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "profiteroles",
      img: "https://images.unsplash.com/photo-1633424411336-f5b7a6886d88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZml0ZXJvbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "fudgesicle",
      img: "https://images.unsplash.com/photo-1501014882647-fa3cef30d47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvY29hJTIwZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  let prods = document.createElement("div");
  prods.setAttribute("class", "prods");

  for (let i = 0; i < products.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "prod-card");

    let cardImage = document.createElement("img");
    cardImage.setAttribute("class", "prod-img");
    cardImage.setAttribute("src", products[i].img);
    cardImage.setAttribute("alt", "product image");
    card.appendChild(cardImage);

    let cardTitleOverlay = document.createElement("div");
    cardTitleOverlay.setAttribute("class", "overlay");

    let cardTitle = document.createElement("h2");
    cardTitle.setAttribute("class", "prod-title");
    cardTitle.innerHTML = "- " + products[i].name + " -";

    cardTitleOverlay.appendChild(cardTitle);
    card.appendChild(cardTitleOverlay);

    prods.appendChild(card);
  }

  content.appendChild(prods);
};

export { menuLoad };
