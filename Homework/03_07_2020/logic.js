const imagesBlock = document.getElementById('images');
const loader = document.getElementById('loader');
const btn = document.getElementById('btn');
const search = document.getElementById('search');

btn.addEventListener('click', function() {

    LoaderVisible(true);
    setTimeout(function() {

        var images = GetImages();
        var html = '';

        images.forEach(function(item) {

            html += `<div class="card col-md-3">
                    <img class="card-img-top" src="${item.url}" alt="${item.title}">
                    <div class="card-body">
                        <p class="card-text">${item.title}</p>
                    </div>
                </div>`;

        });

        imagesBlock.innerHTML = html;

        LoaderVisible(false);

    }, 2000);
});

function GetImages() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'images.json', false);

    xhr.send();

    if (xhr.status !== 200) {
        return {};
    } else {
        return JSON.parse(xhr.responseText);
    }
}

function UpdateImagesList(nameImage) {
    LoaderVisible(true);

    var images = GetImages();
    var html = '';

    images.forEach(function(item) {

        if (item.title.toUpperCase().startsWith(nameImage.toUpperCase()) && nameImage.length > 0) {
            html += `<div class="card col-md-3">
            <img class="card-img-top" src="${item.url}" alt="${item.title}">
            <div class="card-body">
            <p class="card-text">${item.title}</p>
            </div>
                </div>`;
        }
    });

    imagesBlock.innerHTML = html;

    LoaderVisible(false);
}

function LoaderVisible(set = true) {
    if (set === true) {
        loader.style.display = 'flex';
    } else {
        loader.style.display = 'none';
    }
}


window.addEventListener('load', function() {

    search.addEventListener('keyup', function(e) {
        UpdateImagesList(search.value);
    });

});