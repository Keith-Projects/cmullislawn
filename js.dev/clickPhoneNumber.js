var phoneNumber = document.getElementById("phoneNumberHeading");
phoneNumber.addEventListener("click", function () {
  var a = document.createElement("a");
  a.setAttribute("href", "tel:3869377573");
  a.click();
});
