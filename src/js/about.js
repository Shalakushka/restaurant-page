function aboutButton() {
    const about = document.createElement('div');
    about.classList.add('about');

    const number = document.createElement('p');
    number.textContent = '01.20.13.37';
    const address = document.createElement('p');
    address.textContent = '36 Rue de la Chouquette, 75000 Paris';
    about.appendChild(number);
    about.appendChild(address);
    return about;
}

export default aboutButton;