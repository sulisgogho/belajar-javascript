let btnNavbar = document.getElementById("btn-navbar");

btnNavbar.onclick = function () {
  let content = document.getElementById("content");
  if (content.style.display === "none") {
    btnNavbar.style.backgroundColor = "#3795BD";
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
};
