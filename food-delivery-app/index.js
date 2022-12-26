import { menuArray } from "./data.js";
const appContainer = document.querySelector(".app-container");
const billInfo = document.getElementById("bill-info");
const billContainer = document.getElementById("bill-container");
const formElement = document.getElementById("payment-form");
const customerName = document.querySelector(".customer-name");

let orderArray = [];
let total = 0;

// event listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.increase) {
    handleIncreaseClick(e.target.dataset.increase);
    console.log(orderArray);
  } else if (e.target.dataset.decrease) {
    handleDecreaseClick(e.target.dataset.decrease);
  } else if (e.target.dataset.placeOrder) {
    formElement.style.display = "block";
    appContainer.style.opacity = ".4";
  } else if (e.target.dataset.close) {
    formElement.style.display = "none";
    appContainer.style.opacity = "1";
  }
});

formElement.onsubmit = function (event) {
  event.preventDefault();

  formElement.innerHTML = `
    <img class="circle" src="https://cdn-icons-png.flaticon.com/512/189/189792.png">
`;
  setTimeout(() => {
    formElement.innerHTML = `
<h1>Thanks,${customerName.value}! Your order is on its way!</h1>
`;
    setTimeout(() => {
      formElement.submit();
    }, 3000);
  }, 1000);
};
// handle increase button
function handleIncreaseClick(itemId) {
  const targetClickObj = menuArray.filter(function (item) {
    return item.id === itemId;
  })[0];

  targetClickObj.piece++;

  orderArray.push({
    id: targetClickObj.id,
    orderArrayName: targetClickObj.name,
    orderArrayPrice: targetClickObj.price,
  });

  total = orderArray.reduce((sum, item) => sum + item.orderArrayPrice, 0);

  if (total > 0) {
    billContainer.style.display = "block";
  }

  renderBill();
  renderMenu();
  console.log(orderArray);
}
// handle decrease button
function handleDecreaseClick(itemId) {
  const targetClickObj = menuArray.filter(function (item) {
    return item.id === itemId;
  })[0];

  if (targetClickObj.piece > 0) {
    targetClickObj.piece--;

    deleteObjectFromArray(orderArray, targetClickObj.id);
  }

  total = orderArray.reduce((sum, item) => sum + item.orderArrayPrice, 0);
  if (total === 0) {
    billContainer.style.display = "none";
  }

  renderBill();
  renderMenu();
}

function deleteObjectFromArray(array, id) {
  const index = array.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

// rendering menu function
function renderMenu() {
  let menuItemHtml = ``;
  let billHtml = ``;

  menuArray.forEach(function (item) {
    let decreaseClass = "decrease";
    if (item.piece > 0) {
      decreaseClass = "increase";
    }

    menuItemHtml += `
        <div class="menu-item">
        <div class="item-img_container">
            <img src="${item.img}" alt="">
        </div>
        <div class="menu-item_info">
            <h2 class="item-name">${item.name}</h2>
            <p class="item-ingredients">${item.ingredients}</p>
            <p class="item-price">$ ${item.price}</p>
        </div>
        <div class="add-item">
            <button class="btn ${decreaseClass}" data-decrease="${item.id}">-</button>
            <span>${item.piece}</span>
            <button class="btn increase" data-increase="${item.id}">+</button>
        </div>
    </div>
    
        `;
  });
  document.getElementById("menu").innerHTML = menuItemHtml;
}
// render Bill
function renderBill() {
  let lastBill = ``;
  let renderBill = ``;
  orderArray.forEach((element) => {
    renderBill += `
        <div>
            <span>${element.orderArrayName}</span>
            <span> ${element.orderArrayPrice}$</span>
        </div>
    
        `;
    lastBill = `${renderBill} 
         <div class="total-container">
            <span >Total</span>
            <span> ${total}$</span>
        </div> `;

    return lastBill;
  });

  billInfo.innerHTML = lastBill;
}

// render app
renderMenu();
