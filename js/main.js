// const [sidebar, setSidebar] = useState(false);
// const showSidebar = () => setSidebar(!sidebar);

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
    // body.classList.remove("d-none");
  } else {
    menu.classList.add("d-none");
    menu.classList.remove("mobile");
    // body.classList.add("d-none");
  }
};
toggleMenu();
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
} catch (error) {
  alert("Tugadi");
}

const body = document.getElementById("body");
const switchInput = document.getElementById("switch");

const changeMode = (status) => {
  console.log(status);
  if (status) {
    body.classList.add("night");
  } else {
    body.classList.remove("night");
  }
  // if (checked) {
  //   body.classList.add("night");
  // } else {
  //   body.classList.remove("night");
  // }

  localStorage.setItem("telegram-night", status);
  switchInput.checked = status;
};

changeMode(localStorage.getItem("telegram-night") == "true");
