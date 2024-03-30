var box_container = document.querySelector(".box-container");
var input = document.getElementById("input");
var colors = JSON.parse(localStorage.getItem("color")) || [
  {
    color: "#FFF",
  },
];

function writeData() {
  box_container.innerHTML = "";
  for (let i in colors)
    box_container.innerHTML += `
    <div class='box' style="background-color:${colors[i].color};display:grid; place-items:center">${colors[i].color}</div>
    `;
}

function RandomColor() {
  var letters = "0123456789ABCDEF";
  var hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  var new_color = { color: hex };
  colors.push(new_color);
  savesStorage();
  input.value = hex;
  writeData();
}

function savesStorage() {
  localStorage.setItem("color", JSON.stringify(colors));
}

writeData();
