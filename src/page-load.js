const pageLoad = (() => {
    let content = document.getElementById('content');

    let hero = document.createElement('div');
    hero.setAttribute('class', 'hero');

    let heroContent = document.createElement('div');
    heroContent.setAttribute('class', 'hero-content');

    let heroTitle = document.createElement('h1');
    heroTitle.setAttribute('class', 'hero-title');
    heroTitle.innerHTML = 'Sushi Now';

    heroContent.appendChild(heroTitle);

    let heroSubtitle = document.createElement('h2');
    heroSubtitle.setAttribute('class', 'hero-subtitle');
    heroSubtitle.innerHTML = 'Coming Soon';

    heroContent.appendChild(heroSubtitle);

    let heroButton = document.createElement('button');
    heroButton.setAttribute('class', 'hero-button');
    heroButton.innerHTML = 'Chop Chop &raquo';

    heroContent.appendChild(heroButton);

    hero.appendChild(heroContent);

    content.appendChild(hero);
})

export { pageLoad }