function getMenuItem(name, price) {
    const item = document.createElement('div');
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `€ ${price}`;
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    return item;
}

function menuDisplay() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(getMenuItem("Salade verte", "12"));
    menu.appendChild(getMenuItem("Soupe à l'oignon", "8"));
    menu.appendChild(getMenuItem("Steak Haché", "18"));
    menu.appendChild(getMenuItem("Tarte au Chocolat", "9"));
    return menu;
}

export default menuDisplay;