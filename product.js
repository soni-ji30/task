var item = []

function product() {
    var http = new XMLHttpRequest()
    http.open("GET", "pro/product.json")
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.response)
            console.log(res)
            item = res.products
        }
        BindItem(item)
    }
}
product()

function BindItem(arr) {
    var temp = ``
    arr.forEach((e) => {
        temp += `<div class="col-4">
        <div class="card">
        <div class="card-body">
            <h3 class="card-text"<b>Title : </b>${e.Title}</h3>
            <p class="card-title"<b>Id : </b>${e.Id}</p>
            <p class="card-text"<b>Price : ${e.Price}</p>
           <div class="img"><img src="${e.Image}"/></div>
            <p class="card-text"<b>Description : ${e.Description}</p>
            <button class="add cart" onclick="AddCart(${e.Id},${e.Title},${e.Price})" >Add Cart</button>
        </div>
        
    </div></div>`
    })

    document.querySelector(".post").innerHTML = temp;
}
value = [];

function AddCart(Id, Title, Price) {
    var s = Id + "," + Title + "," + Price;
    var myval = {
        "Id": Id,
        "Title": Title,
        "Price": Price
    };
    value.push(myval);
    console.log(JSON.stringify(value));
    localStorage.setItem("cart", JSON.stringify(value));
    let carts = document.querySelector(".add cart");
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(pro[i]);
            totalCost(pro[i])
        });
    }
}