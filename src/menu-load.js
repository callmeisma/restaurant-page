const menuLoad = (() => {
    let content = document.getElementById('content');

    let hero = document.createElement('div');
    hero.setAttribute('class', 'hero');

    let heroContent = document.createElement('div');
    heroContent.setAttribute('class', 'hero-content');

    let heroTitle = document.createElement('h1');
    heroTitle.setAttribute('class', 'hero-title');
    heroTitle.innerHTML = 'Menu';

    heroContent.appendChild(heroTitle);

    let heroButton = document.createElement('button');
    heroButton.setAttribute('class', 'hero-button');
    heroButton.innerHTML = 'Place Order &raquo';

    heroContent.appendChild(heroButton);

    hero.appendChild(heroContent);

    content.appendChild(hero);
})

export { menuLoad }