//  ................Nav slide  Section......................\
const btns = document.querySelectorAll(".btn");
const countnumber = document.querySelector(".number");
const btnorder = document.querySelectorAll(".btnorder");
const numberOrder = document.querySelector(".numberOrder");

let number = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const checkBtnClass = e.currentTarget.classList;
    if (checkBtnClass.contains("increase")) {
      number++;
    } else if (checkBtnClass.contains("decrease")) {
      if (number == 0) {
        number = 0;
      } else {
        number--;
      }
    }

    countnumber.innerText = number;
  });
});

let numberorder = 0;
btnorder.forEach(function (btnorderclick) {
  btnorderclick.addEventListener("click", function (e) {
    const checkclassOrder = e.currentTarget.classList;
    if (checkclassOrder.contains("increaseorder")) {
      numberorder++;
    } else if (checkclassOrder.contains("decreaseorder")) {
      if (numberorder == 0) {
        numberorder = 0;
      } else {
        number--;
      }
    }
    numberOrder.innerText = numberOrder;
  });
});

const menuProducts = [
  {
    category: "caffe",
    name: "Ice Latte",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/5.png",
  },
  {
    category: "caffe",
    name: "Green Tea",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/6.png",
  },
  {
    category: "caffe",
    name: "Hot Caffe",
    price: "$2.0",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/7.png",
  },
  {
    category: "drink",
    name: "Hot Latte",
    price: "$2.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/5.png",
  },
  {
    category: "drink",
    name: "Hor Caffe",
    price: "$1.9",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/6.png",
  },
  {
    category: "snack",
    name: "Hot Milk",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/7.png",
  },

  {
    category: "snack",
    name: "Mochar Hot",
    price: "$2.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/5.png",
  },
  {
    category: "food",
    name: "Capuchino Hot",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/6.png",
  },

  {
    category: "food",
    name: "Ice Latte",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/7.png",
  },

  {
    category: "dessert",
    name: "Ice Latte",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/5.png",
  },
  {
    category: "dessert",
    name: "Ice Latte",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/6.png",
  },
  {
    category: "dessert",
    name: "Milk Tea",
    price: "$1.5",
    textcard: "This Caffe is one of the most populur caffe in the world",
    imgSrc: "./Image/Coffee/7.png",
  },
];

const allBtnCategory = document.querySelectorAll(".categorybtn");
const BtnCategory = document.querySelector(".category-btn-container");
const card_container = document.querySelector(".card-container");

window.addEventListener("DOMContentLoaded", () => {
  showingProductCard(menuProducts);
});

const showingProductCard = (arrayCard) => {
  const displayCard = arrayCard
    .map((p) => {
      return `<div class="card-wraper">
          <div class="image-qty-wraper">
            <span class="image-card"
              ><img src="${p.imgSrc}" alt="${p.name}"
            /></span>
            <span class="qty-wraper">
              <button class="btn decrease">-</button>
              <span class="number">0</span>
              <button class="btn increase">+</button>
            </span>
          </div>

          <div class="description-wraper">
            <span class="name-price-wraper">
              <p class="name">${p.name}</p>
              <p class="price">${p.price}</p>
            </span>
            <span class="text"
              >This Caffe is one of the most populur caffe in the
              world</span
            >
            <span class="size">
              <button class="btnSize medium">Medium</button>
              <button class="btnSize large">Large</button>
            </span>
            <button class="btnaddtocard">Add to card</button>
          </div>
        </div>`;
    })
    .join("");
  card_container.innerHTML = displayCard;
};

BtnCategory.addEventListener("click", (e) => {
  const btnTaget = e.target.classList.contains("categorybtn");
  allBtnCategory.forEach((btn) => {
    if (btnTaget) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

allBtnCategory.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const idcategory = e.currentTarget.dataset.id;
    const filtermenuCard = menuProducts.filter((item) => {
      return item.category == idcategory;
    });
    if (idcategory == "all") {
      showingProductCard(menuProducts);
    } else {
      showingProductCard(filtermenuCard);
    }
  });
});

const btnSolutionwraper = document.querySelector(".btnSolution_wraper");
const btnSolution = document.querySelectorAll(".btnSolution");

btnSolutionwraper.addEventListener("click", (e) => {
  const btnSolutiontaget = e.target.classList.contains("btnSolution");
  btnSolution.forEach((btn) => {
    if (btnSolutiontaget) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});
