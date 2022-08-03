const scriptURL = "https://script.google.com/macros/s/AKfycbzzPkMnLFGN9nu-3tOD082ZlZ1VlKkXn4unRKjJADJM32t7UfXHTa1sInca7qcViyeZSg/exec";
const form = document.forms["wpu-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika submit
  //tampil loading, hilang button send
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampil kirim, hilang button loading
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      // tampil alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
