const menu = [
  {
    id: 1,
    menuname: "chikenthandur",
    price: 100,
    discrip: "freshchiken",
    image: "./img/chikentandur.jpeg",
  },
  // {
  //   id: 2,
  //   menuname: "kolhapurichiken",
  //   price: 200,
  //   discrip: "spaice",
  //   //image: "./img/kolhapuri chiken.jpg",
  // },
  {
    id: 3,
    menuname: "icecreem",
    price: 100,
    discrip: "testyfresh",
    image: "./img/icecreem.jpg",
  },
  // {
  //   id: 4,
  //   menuname: "haydrabadiBiryane",
  //   price: 300,
  //   discrip: "testHaydrabadi",
  //   //image: "img/haidrabadi ChikanBiryani.jpg",
  // },
];
document.getElementById("showcart");
menu.forEach((Element) => {
  rowdiv = document.createElement("div");
  rowdiv.className = "col-3";
  rowdiv.innerHTML = `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src=${Element.image} alt="Card image">
<div class="card-body">
  <h5 class="card-title">${Element.menuname}</h5>
  <p class="card-text">"&#x20b9" ${Element.price}</p>
  <p class="card-text"> ${Element.discrip}</p>
  <button class="btn btn-primary"onclick="addtocart('${Element.id}')">add carts</button>
</div>
</div>

`;
  showcart.appendChild(rowdiv);
});
//menus add to cart
cart = [];
totalPrice = 0;
function addtocart(ID) {
  console.log(ID);
  indexNumber = menu.findIndex((Element) => Element.id == ID);
  console.log(indexNumber);
  if (indexNumber != -1) {
    cart.push(menu[indexNumber]);
    console.log(cart);
    console.log(cart.length);
  }
  document.getElementById("menuCountincarts").innerHTML = cart.length;
}
document
  .getElementById("showcartonbutton")
  .addEventListener("click", showproductsoncart);
function showproductsoncart() {
  cart.forEach((Element) => {
    cartlist = document.createElement("div");
    cartlist.innerHTML = `
                      <div><spana>${Element.menuname}</span>
                      <span>&#x20b9;${Element.price}</span>
                      <button onclick="removecart('${Element.id}')">remove</button>
                      </div><hr>
                      

  `;
    document.getElementById("productincard").appendChild(cartlist);

    totalPrice = totalPrice + Element.price;
  });
  document.getElementById("totalPrice").innerHTML = `"&#x20b9" ${totalPrice}`;

  function removecart(ID) {
    indNo = cart.findIndex((Element) => {
      Element.id == ID;
    });
    if (indNo != -1) {
      cart.splice(indNo, 1);
    }
  }
}
showproductsoncart();
