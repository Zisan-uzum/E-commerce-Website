const nav_items = document.querySelectorAll(".brands");
const wrapper = document.querySelector(".slider-wrapper");


const products = [
    {
        title : "Jacket",
        price : 130,
        img : "img1.jpg"
    },
    {
        title : "Blazer",
        price : 140,
        img : "img2.jpg"
    },
    {
        title : "Faux",
        price : 150,
        img : "img3.jpg"
    },
    {
        title : "Bridesmaids",
        price : 160,
        img : "img4.jpg"
    },
    {   
        title : "Sateen Jacket",
        price : 170,
        img : "img5.jpg"
    },
    {
        title : "Sateen Top",
        price : 180,
        img : "img6.jpg"
    }
];

let chosen_product = products[0];

const current_img = document.querySelector(".slider-img");
const current_name = document.querySelector(".item-name");
const current_price = document.querySelector(".item-price");

nav_items.forEach((item, index) => {
    item.addEventListener("click", () =>{
        wrapper.style.transform  = 'translateX(${-100 * index}vw)';

        chosen_product = products[index];
        
        current_img.src = products[index].img;
        current_name.textContent = products[index].title ;
        current_price.textContent = products[index].price +  "$";
    });
});


