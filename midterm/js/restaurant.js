const menuListRef = document.querySelector("#menu");
const cartTableRef = document.querySelector("#cart");
const noItemsRef = document.querySelector("#no-items");

const menu = [
  { item: "Hamburger", price: 2.99 },
  { item: "Cheeseburger", price: 3.99 },
  { item: "Cheese Pizza", price: 3.99 },
  { item: "Pepperoni Pizza", price: 4.99 },
  { item: "Sausage Pizza", price: 4.99 },
  { item: "Caesar Salad", price: 3.99 },
  { item: "Fries", price: 1.99 },
  { item: "Onion Rings", price: 2.49 },
];

const cart = [];

for (let i = 0; i < menu.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = menu[i].item;

  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.item = menu[i].item + menu[i].price;
  newBtn.addEventListener("click", addItemToCart);
  newLi.appendChild(newBtn);

  menuListRef.appendChild(newLi);
}

function showItemCart() {
  cartTableRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartTableRef.innerHTML += "<tr colspan='4'>";
    cartTableRef.innerHTML += "<td colspan='4'>" + cart[i].item + "</td>";
    cartTableRef.innerHTML +=
      "<td colspan='4'>" + "<textarea>" + "</textarea>" + "</td>";
    cartTableRef.innerHTML +=
      "<td colspan='4'>" +
      "<button class='button'>" +
      "-" +
      "</button>" +
      "</td>";
    cartTableRef.innerHTML += "</tr>";
  }
}

function addItemToCart(e) {
  cart.push(e.target.dataset);
  showItemCart();
  //   noBookPText();
}
