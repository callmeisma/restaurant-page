import { pageLoad } from './page-load';
import { menuLoad } from './menu-load';
import { contactLoad } from './contact-load';

pageLoad();

function clearContent() { 
    if (document.getElementById('content').hasChildNodes() === true ) {
        let items = document.getElementById('content');
        while (items.firstChild) {
            items.removeChild(items.lastChild);
        }
    }
}

document.addEventListener('click', function(e) {
    if (e.target.innerHTML == 'Home') {
        clearContent()
        pageLoad();
    } else if (e.target.innerHTML == 'Menu') {
        clearContent()
        menuLoad();
    } else if (e.target.innerHTML == 'Contact') {
        clearContent();
        contactLoad();
    }
});