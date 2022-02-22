const nav_items = document.querySelectorAll(".brands");
const wrapper = document.querySelector(".slider-wrapper");

const products = [
  {
    title: "Jacket",
    price: 130,
    colors: [
      {
        code: "grey",
        img: "img1.jpg",
      },
      {
        code: "blue",
        img: "img1-color2.jpg",
      },
      {
        code: "brown",
        img: "img1-color3.jpg",
      },
      {
        code: "beige",
        img: "img1-color4.jpg",
      },
    ],
    sizes: [36, 38, 40, 42],
  },
  {
    title: "Blazer",
    price: 140,
    colors: [
      {
        code: "beige",
        img: "img2.jpg",
      },
      {
        code: "pink",
        img: "img2-color2.jpg",
      },
      {
        code: "#d4c161",
        img: "img2-color3.jpg",
      },
      {
        code: "#f59097",
        img: "img2-color4.jpg",
      },
    ],
    sizes: [38, 40, 42, 44],
  },
  {
    title: "Faux",
    price: 150,
    img: "img3.jpg",
  },
  {
    title: "Bridesmaids",
    price: 160,
    img: "img4.jpg",
  },
  {
    title: "Sateen Jacket",
    price: 170,
    img: "img5.jpg",
  },
  {
    title: "Sateen Top",
    price: 180,
    img: "img6.jpg",
  },
];

let chosen_product = products[0];
document.querySelector(".product-image").src = chosen_product.colors[0].img;
document.querySelector(".product-title").textContent = chosen_product.title;
document.querySelector(".product-price").textContent =
  "$" + chosen_product.price;
document.querySelectorAll(".color").forEach((color, index) => {
  color.style.background = chosen_product.colors[index].code;
});
document.querySelectorAll(".size").forEach((size, index) => {
  size.textContent = chosen_product.sizes[index];
});

const current_img = document.querySelector(".product-image");
const current_title = document.querySelector(".product-title");
const current_price = document.querySelector(".product-price");
const current_colors = document.querySelectorAll(".color");
const current_sizes = document.querySelectorAll(".size");

nav_items.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    chosen_product = products[index];

    current_img.src = chosen_product.colors[0].img;
    current_title.textContent = chosen_product.title;
    current_price.textContent = "$" + chosen_product.price;
    current_colors.forEach((color, index) => {
      color.style.background = chosen_product.colors[index].code;
    });
    current_sizes.forEach((size, index) => {
      size.textContent = chosen_product.sizes[index];
    });
  });
});

current_colors.forEach((color, index) => {
  color.addEventListener("click", () => {
    //console.log("here");
    current_img.src = chosen_product.colors[index].img;
  });
});

current_sizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    //console.log("here");
    current_sizes.forEach((size) => {
      size.style.background = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const buy_button = document.querySelector(".buy-button");
const close_button = document.querySelector(".payment-close");
const payment_section = document.querySelector(".payment-section");

buy_button.addEventListener("click", () => {
  payment_section.style.display = "flex";
});

close_button.addEventListener("click", () => {
  payment_section.style.display = "none";
});
