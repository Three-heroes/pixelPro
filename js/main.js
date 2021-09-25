const { useParams } = require("react-router");

let ishShow = false;
const menu = document.getElementById("menu");
const finish = document.getElementById("finish");
const body = document.getElementById("body");
const tugadi = document.getElementById("tugadi");
const toggleMenu = () => {
  ishShow = !ishShow;

  if (ishShow) {
    menu.classList.remove("d-none");
    menu.classList.add("mobile");
    tugadi.classList.remove("d-none");
  } else {
    menu.classList.add("d-none");
    menu.classList.remove("mobile");
    tugadi.classList.add("d-none");
  }
};

const row = document.getElementById("row");

let data = [
  {
    img: "https://demo.themesberg.com/pixel-pro/v5/assets/img/clients/airbnb.svg",
    paragraph:
      "Pixel has replaced the whiteboard for us! Being able to jump in the same file with someone fills the gap of not being able to gather in person.",
    link: "Read Story",
  },
  {
    img: "https://demo.themesberg.com/pixel-pro/v5/assets/img/clients/corsair.svg",
    paragraph:
      "Pixel has replaced the whiteboard for us! Being able to jump in the same file with someone fills the gap of not being able to gather in person.",
    link: "Read story",
  },
  {
    img: "https://demo.themesberg.com/pixel-pro/v5/assets/img/clients/paypal.svg",
    paragraph:
      "Pixel has replaced the whiteboard for us! Being able to jump in the same file with someone fills the gap of not being able to gather in person.",
    link: "Read story",
  },
  {
    img: "https://demo.themesberg.com/pixel-pro/v5/assets/img/clients/ebay.svg",
    paragraph:
      "Pixel has replaced the whiteboard for us! Being able to jump in the same file with someone fills the gap of not being able to gather in person.",
    link: "Read story",
  },
  {
    img: "https://demo.themesberg.com/pixel-pro/v5/assets/img/clients/northwestern.svg",
    paragraph:
      "Pixel has replaced the whiteboard for us! Being able to jump in the same file with someone fills the gap of not being able to gather in person.",
    link: "Read story",
  },
  {
    img: "https://demo.themesberg.com/pixel-pro/v5/assets/img/clients/elastic.svg",
    paragraph:
      "Pixel has replaced the whiteboard for us! Being able to jump in the same file with someone fills the gap of not being able to gather in person.",
    link: "Read story",
  },
];
const setData = () => {
  row.innerHTML = "";

  data.map((value, index) => {
    const col = document.createElement("div");
    col.className = `col-md-6 col-lg-4 mb-4 mb-lg-0 `;
    col.innerHTML = `
       <div class="box1 mt-lg-n6 mb-4">
            <div class="box shadow bg-white mt-4 text-center">
                <img src="${value.img}" alt=""
                    class="mb-3 surat">
                <span class="d-block">
                    <span class="star fas fa-star text-warning"> </span>
                    <span class="star fas fa-star text-warning"> </span>
                    <span class="star fas fa-star text-warning"> </span>
                    <span class="star fas fa-star text-warning"> </span>
<span class="star far fa-star text-warning"> </span>
 </span>
                <p class="text-secondary px-2 my-4">${value.paragraph}</p>
                <a class="btn btn-link read">
                    <span class="me-2">
                        <span> <i class="fas fa-book-open    "></i> </span>
                    </span>
                   ${value.link}
                </a>
            </div>
        </div>
`;
    row.appendChild(col);
  });
};
setData();

try {
  if (localStorage.getItem === "dark") $("html").addClass("dark");
  document.querySelector("html").classList.add("dark");
} catch (error) {}

const rowtwo = document.getElementById("rowtwo");
let words = [
  {
    big: "Main Pages",
    link2: "About",
    link3: "Pricing",
    link4: "Team",
    link5: "Services",
    link6: "Profile",
    link7: "Contact",
  },
  {
    big2: "Legal",
    link8: "Legal Center",
    link9: "Terms & agreement",
  },
  {
    big3: "Career",
    link10: "Careers",
    link11: "Career Single",
  },
];
const SetSecondData = () => {
  rowtwo.innerHTML = "";
  words.map((value, index) => {
    const coltwo = document.createElement("div");
    coltwo.className = `col-6 col-lg-4`;
    coltwo.innerHTML = `
    <div>
    <h6 class="d-block mb-3">${value.big}</h6>
<ul class="mb-4">
   <li class="mb-2"><a href="#">${value.link2}</a></li>
   <li class="mb-2"><a href="#">${value.link3}</a></li>
   <li class="mb-2"><a href="#">${value.link4}</a></li>
   <li class="mb-2"><a href="#">${value.link5}</a></li>
   <li class="mb-2"><a href="#">${value.link6}</a></li>
   <li class="mb-2"><a href="#">${value.link7}</a></li>
</ul>
<h6 class="d-block">${value.big2}</h6>
<ul class="mb-4">
   <li class="mb-2"><a href="#">${value.link8}</a></li>
   <li class="mb-2"><a href="#">${value.link9}</a></li>
</ul>
<h6 class="d-block">${value.big3}</h6>
<ul class="mb-4">
   <li class="mb-2"><a href="#">${value.link10}</a></li>
   <li class="mb-2"><a href="#">${value.link11}</a></li>
</ul>
</div>
    `;
    rowtwo.appendChild(coltwo);
  });
};
SetSecondData();
