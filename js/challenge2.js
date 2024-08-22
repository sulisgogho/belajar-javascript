let btnDropdown = document.getElementById("btn");

btnDropdown.onclick = function () {
  let btnLink = document.getElementById("btn-link");
  if (btnLink.style.display == "" || btnLink.style.display === "none") {
    btnLink.style.display = "block";
  } else {
    btnLink.style.display = "none";
  }
};

let coba = document.getElementById("coba");
coba.onclick = function () {
  let p1 = document.getElementById("p1");
  if (p1.style.display === "none") {
    p1.style.display = "block";
  } else {
    p1.style.display = "none";
  }
};
