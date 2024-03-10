function myFunction() {
  var x = document.getElementById("myInput");
  const icon = document.getElementById("myIcon");
  const iconOpen = document.getElementById("myIconOpen");
  if (x.type === "password") {
    x.type = "text";
    // icon.src = "assets/icon/eye-icons.svg";
    icon.style.display = "none";
    iconOpen.style.display = "block";
  } else {
    x.type = "password";
    icon.style.display = "block";
    iconOpen.style.display = "none";
    // icon.src = "assets/icon/eye-vector.svg";
  }
}
