const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg'
  ];

  let currentImageIndex = 0;
    
    const imageSlider = document.querySelector('.image-slider');
    const galleryContainer = document.querySelector('.gallery-container');
    const toggleButton = document.getElementById('toggleButton');
    
    images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = 'Imagen';
      imgElement.classList.add('img');
      
      
      if (index === currentImageIndex) {
        imgElement.classList.add('active');
      }
      imageSlider.appendChild(imgElement);
    });
    
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    prevButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateSlider();
    });
    
    nextButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateSlider();
    });

    toggleButton.addEventListener('click', () => {
      imageSlider.classList.toggle('hide');
      galleryContainer.classList.toggle('hide');
      toggleButton.textContent = imageSlider.classList.contains('hide') ? 'Mostrar Slider' : 'Mostrar Galería';
    });
    
    function updateSlider() {
      const imgElements = document.querySelectorAll('.image-slider img');
      
      imgElements.forEach((img, index) => {
        if (index === currentImageIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    }
