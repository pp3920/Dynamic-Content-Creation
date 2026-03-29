const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cartElement = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let cart = [];   
let totalPrice = 0;

addProductButton.addEventListener("click", function () {

  let productName = productNameInput.value;
  let productPrice = parseFloat(productPriceInput.value);

  if (productName === "" || isNaN(productPrice)) {
    alert("Please fill all fields correctly");
    return;
  }

  let cartListObj = {
    prodname: productName,
    prodprice: productPrice,
  };

  cart.push(cartListObj);

  renderTasks();

  productNameInput.value = "";
  productPriceInput.value = "";
});



function renderTasks() {
  cartElement.innerHTML = "";  // clear old list

  totalPrice = 0;

  cart.forEach(function (product) {
    let li = document.createElement("li");

    li.innerText =
      "Product Name: " + product.prodname +
      " | Price: " + product.prodprice;

    cartElement.appendChild(li);

    totalPrice += product.prodprice;
  });

  totalPriceSpan.textContent = totalPrice.toFixed(2);
}