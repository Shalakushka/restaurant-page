import restaurantImage from '../img/restaurant.jpg'

function homeDisplay() {
    const home = document.createElement("div");
    home.classList.add("home");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = restaurantImage;
    const legend = document.createElement("p");
    legend.innerHTML = 'Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    imageContainer.appendChild(image);
    imageContainer.appendChild(legend);

    const textContainer = document.createElement('div');
    textContainer.classList.add("text-container");
    const title = document.createElement('h2');
    title.textContent = "★★★★";
    const text = document.createElement('p');
    text.textContent = "High Quality Gastronomy";

    textContainer.appendChild(title);
    textContainer.appendChild(text);

    home.appendChild(imageContainer);
    home.appendChild(textContainer);
    return home;
}

export default homeDisplay;