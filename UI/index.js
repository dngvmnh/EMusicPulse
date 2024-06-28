const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

const Orders = [
  {
    productName: "Dreams-Fleetwood Mac",
    productNumber: "Dreams",
    paymentStatus: "Fleetwood Mac",
    status: "F-G",
  },
  {
    productName: "Tennessee Whiskey - Chris Stapleton",
    productNumber: "Tennessee Whiskey",
    paymentStatus: "Chris Stapleton",
    status: "A - Bm - Bm - A",
  },
  {
    productName: "Creep - Radiohead",
    productNumber: "Creep",
    paymentStatus: "Radiohead",
    status: "G - B - C - Cm",
  },
];

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${
          order.status === "Declined"
            ? "danger"
            : order.status === "Pending"
            ? "warning"
            : "primary"
        }">${order.status}</td>
        <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});