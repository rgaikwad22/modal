var card = document.querySelectorAll(".card"),
    modalSection = document.querySelector('.modal'),
    modal = document.querySelector(".modal-content img"),
    closeModal = document.querySelector(".close");

card.forEach((el) => {
  el.addEventListener("click", function () {
    var product = el.querySelectorAll(".card img");
    product.forEach(element => {
      var imgSource = element.getAttribute("src");
      modal.setAttribute('src', imgSource)
      modalSection.style.display = "flex";
      modalSection.classList.add("modal-selection");

      productHeading = el.querySelectorAll(".product-heading a");
      productHeading.forEach((el) => {
        var prodHead = document.querySelector('.product-head');
        prodHead.innerHTML = el.innerText;
      })
    })
  })
})


closeModal.addEventListener("click", function () {
  modalSection.style.display = "none";
})

window.onclick = function (event) {
  if (event.target == modalSection) {
    modalSection.style.display = "none";
  }
}