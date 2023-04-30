document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("contact");
  const button = document.getElementById("scroll-to-contact");
  if (button && element) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    });
  }

  const acceptButton = document.getElementById("acceptButton");
  const cancelButton = document.getElementById("cancelButton");
  const modalText = document.getElementById("modal-text");
  if (acceptButton) {
    acceptButton.addEventListener('click', function (e) {
      e.preventDefault();
      sessionStorage.setItem("ageConfirmed", true);
      checkAge();
    });
  }
  if (cancelButton && modalText) {
    console.log(cancelButton)
    console.log(modalText)
    cancelButton.addEventListener('click', function (e) {
      e.preventDefault();
      modalText.innerHTML("Unfortunately, you cannot continue using the site");
    });
  }
  function showModal() {
    document.body.classList.add("blocked-body");
    const modal = document.getElementById("ageModal");
    modal.style.display = "block";
  }
  function hideModal() {
    const modal = document.getElementById("ageModal");
    modal.style.display = "none";
    document.body.classList.remove("blocked-body");
  }
  function checkAge() {
    const ageConfirmed = sessionStorage.getItem("ageConfirmed");
    if (!ageConfirmed || ageConfirmed === "false") {
      showModal();
    } else {
      hideModal();
    }
  }
  checkAge();
});
