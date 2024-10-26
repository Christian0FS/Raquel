document.getElementById('imageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const caption = document.getElementById('caption').value;

    // Adiciona a imagem e a legenda no Local Storage
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images.push({ url, caption });
    localStorage.setItem('images', JSON.stringify(images));

    // Limpa os campos do formulário
    document.getElementById('url').value = '';
    document.getElementById('caption').value = '';

    // Atualiza a galeria
    loadImages();
});

function loadImages() {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    images.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('image-container');
        div.innerHTML = `
            <img src="${image.url}" alt="${image.caption}">
            <div class="caption">${image.caption}</div>
        `;
        gallery.appendChild(div);
    });
}

// Carrega as imagens ao iniciar
loadImages();