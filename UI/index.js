const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const darkMode = document.querySelector(".dark-mode");
const info1 = document.querySelector(
  "main .analyse .sales .status .info .info1"
);
const info2 = document.querySelector(
  "main .analyse .visits .status .info .info1"
);
const info3 = document.querySelector(
  "main .analyse .searches .status .info .info1"
);

function fetchData() {
  fetch("http://localhost:5000/get_latest_data")
    .then((response) => response.json())
    .then((data) => {
      // Create and update elements with the fetched data
      info1.innerHTML = "";
      info2.innerHTML = "";
      info3.innerHTML = "";
      const emgvalue = document.createElement("h1");
      const effectname = document.createElement("h1");
      const mode_value = document.createElement("h1");

      emgvalue.textContent = `EMG Value: ${data.emg_value}`;
      effectname.textContent = `Effect Name: ${data.effect_name}`;
      mode_value.textContent = `Mode Value: ${data.mode_value}`;

      info1.appendChild(emgvalue);
      info2.appendChild(effectname);
      info3.appendChild(mode_value);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Fetch data every second
setInterval(fetchData, 1000);

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