document.addEventListener('DOMContentLoaded', () => {
    const images = [
        {small: 'flowers-pink-small.jpg', large: 'flowers-pink-large.jpg', caption: 'Pink flowers'},
        {small: 'flowers-purple-small.jpg', large: 'flowers-purple-large.jpg', caption: 'Purple flowers'},
        {small: 'flowers-red-small.jpg', large: 'flowers-red-large.jpg', caption: 'Red flowers'},
        {small: 'flowers-white-small.jpg', large: 'flowers-white-large.jpg', caption: 'White flowers'},
        {small: 'flowers-yellow-small.jpg', large: 'flowers-yellow-large.jpg', caption: 'Yellow flowers'}
    ];

    
    const thumbnailsContainer = document.getElementById('thumbnails');
    const featuredImage = document.querySelector('figure img');
    const figcaption = document.querySelector('figcaption');

    images.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        
        img.src = `images/${image.small}`;
        img.alt = `Thumbnail ${index + 1}`;
        img.width = 240;
        img.height = 160;

        li.appendChild(img);
        thumbnailsContainer.appendChild(li);

        img.addEventListener('click', () => {
            featuredImage.src = `images/${image.large}`;
            figcaption.textContent = image.caption; 

            document.querySelectorAll('#thumbnails img').forEach(thumb => {
                thumb.classList.add('grayscale');
                thumb.classList.remove('active');
            });
            img.classList.remove('grayscale');
            img.classList.add('active');
        });
    });

    document.querySelector('#thumbnails img').classList.add('active');
});
