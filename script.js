const button = document.getElementById('randomAnimalButton');
const image = document.getElementById('animalImage');

button.addEventListener('click', async () => {
    const animalUrls = [
        "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
        "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjY29vbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://media.newyorker.com/photos/5909719c1c7a8e33fb38edac/master/pass/01Larson-Bats-new.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-ivXxY5PG1_MvH30PQ5CvQiV9TypkqEHDA&s",
        "https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg",,
        "https://static.scientificamerican.com/dam/m/4beab95014486f06/original/Tree-Swallow2.JPG?m=1714055470.635&w=600",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5r3B2BINLwBWE9iM6zmVDyZMhB1ZUiszwYw&s",
        "https://media.npr.org/assets/img/2014/08/07/monkey-selfie_wide-8a2932497edb35f2c04b5de565b605f209c5c4b0.jpg?s=1400&c=100&f=jpeg"
    ];

    // Pick a random URL from the list
    const randomUrl = animalUrls[Math.floor(Math.random() * animalUrls.length)];

    // Display the image
    image.src = randomUrl;
    image.style.display = 'block';
});
