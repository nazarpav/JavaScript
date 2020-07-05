let my_array = [];
window.onload = function() {
    AddProductToArray("https://images.ua.prom.st/2338426760_w200_h200_amortizator-perednij-sprinter.jpg", "shock absorber", 1000);
    AddProductToArray("https://images.ua.prom.st/2338426760_w200_h200_amortizator-perednij-sprinter.jpg", "shock absorber", 1000);
    AddProductToArray("https://images.ua.prom.st/2338426760_w200_h200_amortizator-perednij-sprinter.jpg", "shock absorber", 1000);
    AddProductToArray("https://images.ua.prom.st/2338426760_w200_h200_amortizator-perednij-sprinter.jpg", "shock absorber", 1000);
    AddProductToArray("https://images.ua.prom.st/2338426760_w200_h200_amortizator-perednij-sprinter.jpg", "shock absorber", 1000);
    // console.log(false == false);
    // console.log(true == false);
    document.getElementById("btnAdd").onclick = (e) => {
        e.preventDefault();
        AddProductToArray(document.getElementById("image").value, document.getElementById("name").value, document.getElementById("price").value);
    }
    document.getElementById("btnGet").onclick = (e) => {
        e.preventDefault();
        let searchedValue = document.getElementById("searchedName").value;
        // let searched = [];
        // for (let index = 0; index < my_array.length; index++) {
        //     console.log(searchedValue);
        //     console.log(my_array[index].name);
        //     console.log(my_array[index].name.search(searchedValue));
        //     if (my_array[index].name.search(searchedValue)) {
        //         searched.push(my_array[index]);
        //     }
        // }
        LoadProducts(my_array.filter(x => !x.name.search(searchedValue)));
    }
}

function AddProductToArray(imgURL, name, price) {
    let product = {
        image: imgURL,
        name: name,
        price: price
    };
    my_array.push(product);
    console.log(product, "Is added");
}

function LoadProducts(products) {
    console.log("count=", products.length);
    console.log(products);

    let productContent = document.getElementById("productContent");
    productContent.innerHTML = ``;
    let row = document.createElement('tr');
    let counter = 1;
    for (let index = 0; index < products.length; index++, counter++) {
        row.innerHTML += `
        <td>
        <img width="150"
        src="${products[index].image}">
        </td>
        <td>${products[index].name}</td>
        <td>${products[index].price} грн.</td>
        `;
        if (counter == 3) {
            productContent.appendChild(row);
            row = document.createElement('tr');
            counter = 0;
        }
    }
    if (counter != 0) {
        productContent.appendChild(row);
    }
}