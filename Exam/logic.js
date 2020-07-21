const DataList = document.getElementById('DataList');
const Loader = document.getElementById('MainLoader');
const GetButton = document.getElementById('GetButton');
const POSTS = "https://jsonplaceholder.typicode.com/posts";

function GetData(URL) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL, false);
    xhr.send();
    if (xhr.status !== 200) {
        return {};
    } else {
        return JSON.parse(xhr.responseText);
    }
}

function UpdateData() {
    LoaderVisible(true);
    let data = GetData(POSTS);
    let html = '';
    data.forEach((item) => {
        html += `<div class="card col-md-2">
        <img class="card-img-top" id="${item.id}" src="${"download.png"}" alt="image">
            <div class="card-body" >
            <p class="card-text" >${item.title}</p>
            <p class="card-text" >${item.body}</p>
            </div></div>`;
        console.log(POSTS.toString() + item.id.toString());
    });
    DataList.innerHTML = html;
    data.forEach((item) => {
        document.getElementById(item.id).addEventListener("click", ElementClick);
    });
    LoaderVisible(false);
}

function ElementClick(e) {
    const win = window.open(Element.html, 'Element');
    win.onload = function() {
        let div = win.document.createElement('div');
        let body = win.document.body;
        let data = GetData(POSTS.toString() + "/" + e.target.id.toString());
        div.innerHTML = `<div class="card col-md">
        <img class="card-img-top" id="${data.id}" src="${"download.png"}" alt="image">
            <div class="card-body" >
            <p class="card-text" >${data.title}</p>
            <p class="card-text" >${data.body}</p>
            </div></div>`;
        body.insertBefore(div, body.firstChild);
    }
}

function LoaderVisible(value) {
    Loader.style.display = (value ? 'flex' : 'none');
}

window.addEventListener('load', function() {
    GetButton.addEventListener('click', function() {
        LoaderVisible(true);
        UpdateData();
        LoaderVisible(false);
    });
});