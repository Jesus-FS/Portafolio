let close = document.querySelectorAll(".close")[0];
let open = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal-container")[0];
let modalC = document.querySelectorAll(".background-modal")[0];

open.addEventListener("click", function(e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modalC.classList.toggle('modal-close');
});

close.addEventListener("click", function() {
  modal.classList.toggle = ('modal-close');
  modalC.style.visibility = "hidden";
  modalC.style.opacity = "0";
});